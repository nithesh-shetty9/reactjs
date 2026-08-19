
# Redux Toolkit Setup & Usage in React

## 1. Installation

Install Redux Toolkit and React Redux in your Vite + React application:

```bash
npm install @reduxjs/toolkit react-redux
```

* **Redux Toolkit** → used to create and manage Redux state.
* **React Redux** → connects Redux with React and provides `Provider`, `useSelector`, and `useDispatch`.

---

## 2. Create the Redux Store

Create a `store.js` file:

```js
import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "../Features/todoSlice";

export const store = configureStore({
  reducer: todoReducer,
});
```

The store is the **central place where Redux stores application state**.

### Multiple reducers

When your application has multiple features such as users, products, and cart, use an object:

```js
import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "../Features/todoSlice";
import userReducer from "../Features/userSlice";
import cartReducer from "../Features/cartSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    user: userReducer,
    cart: cartReducer,
  },
});
```

The state structure becomes:

```js
{
  todo: {...},
  user: {...},
  cart: {...}
}
```

---

## 3. Create a Feature Slice

Create a separate slice for each feature.

For example:

```text
src/
├── Features/
│   ├── todoSlice.js
│   ├── userSlice.js
│   └── cartSlice.js
│
├── Store/
│   └── store.js
```

### Example: `todoSlice.js`

```js
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "hello world",
    },
  ],
};

export const TodoSlice = createSlice({
  name: "todo",

  initialState,

  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };

      state.todos.push(todo);
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
    },

    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            text: action.payload.text,
          };
        }

        return todo;
      });
    },
  },
});

export const {
  addTodo,
  removeTodo,
  updateTodo,
} = TodoSlice.actions;

export default TodoSlice.reducer;
```

### What does a slice contain?

```text
createSlice()
     │
     ├── initialState
     │
     ├── reducers
     │     ├── addTodo
     │     ├── removeTodo
     │     └── updateTodo
     │
     └── actions
           ├── addTodo()
           ├── removeTodo()
           └── updateTodo()
```

`createSlice()` automatically creates the corresponding actions from the reducers.

---

## 4. Connect Redux to React

In `main.jsx`, wrap your application with `Provider`:

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import { store } from "./Store/store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
```

`Provider` makes the Redux store available to all components inside the application.

---

# 5. `useSelector` — Reading State

Use `useSelector` when you want to **read data from the Redux store**.

```js
import { useSelector } from "react-redux";
```

### Syntax

```js
const data = useSelector((state) => state.featureName);
```

For the multiple-reducer store:

```js
const todos = useSelector((state) => state.todo.todos);
```

Because the store is:

```js
{
  todo: {
    todos: [...]
  }
}
```

### Example

```jsx
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todo.todos);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};
```

So:

```text
useSelector()
      ↓
Reads data
      ↓
Redux Store
```

---

# 6. `useDispatch` — Changing State

Use `useDispatch` when you want to **send an action to Redux**.

```js
import { useDispatch } from "react-redux";
```

### Syntax

```js
const dispatch = useDispatch();

dispatch(action());
```

### Example

```jsx
import { useDispatch } from "react-redux";
import { addTodo } from "../Features/todoSlice";

const AddTodo = () => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addTodo("Learn Redux"));
  };

  return (
    <button onClick={handleAdd}>
      Add Todo
    </button>
  );
};
```

The flow is:

```text
dispatch(addTodo("Learn Redux"))
              ↓
        addTodo reducer
              ↓
        action.payload
              ↓
        state.todos.push()
              ↓
        Redux Store updates
```

---

# 7. Passing Payload

When you need to send data to a reducer:

```js
dispatch(addTodo("Learn Redux"));
```

The value:

```text
"Learn Redux"
```

becomes:

```js
action.payload
```

So inside the reducer:

```js
addTodo: (state, action) => {
  console.log(action.payload);
}
```

Output:

```text
Learn Redux
```

### Multiple values

You can send an object:

```js
dispatch(
  updateTodo({
    id: 1,
    text: "Learn Redux Toolkit",
  })
);
```

Then:

```js
action.payload.id
action.payload.text
```

can be accessed inside the reducer.

---

# 8. `useSelector` vs `useDispatch`

| Hook            | Purpose                   |
| --------------- | ------------------------- |
| `useSelector()` | Read state                |
| `useDispatch()` | Send actions/change state |

Remember:

```text
useSelector
     ↓
   READ
     ↓
Redux Store
```

```text
useDispatch
     ↓
   ACTION
     ↓
  Reducer
     ↓
State changes
```

---

# 9. Complete Redux Flow

```text
                 Redux Store
                      │
                      │
                 useSelector()
                      │
                      ↓
                 React Component
                      │
                   User action
                      │
                      ↓
                 useDispatch()
                      │
                      ↓
                    Action
                      │
                      ↓
                   Reducer
                      │
                      ↓
                State changes
                      │
                      ↓
                 Redux Store
                      │
                      ↓
                Component updates
```

### Quick revision

```text
configureStore()
→ Creates the Redux store

createSlice()
→ Creates state + reducers + actions

Provider
→ Makes the store available to React

useSelector()
→ Reads Redux state

useDispatch()
→ Dispatches actions

action.payload
→ Data sent with an action

nanoid()
→ Generates a unique ID
```

This is a good **Redux Toolkit fundamentals section for your GitHub README**.
