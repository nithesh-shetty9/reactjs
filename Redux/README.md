### 1. Install

```bash
npm install @reduxjs/toolkit react-redux
```

### 2. Folder structure

```text
src/
├── redux/
│   ├── store.js
│   └── userSlice.js
├── App.jsx
└── main.jsx
```

### `redux/store.js`

```js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
```

### `redux/userSlice.js`

```js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },

    removeUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
```

### `main.jsx`

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import { store } from "./redux/store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
```

### Use it in a component

**Get data:**

```jsx
import { useSelector } from "react-redux";

function Profile() {
  const user = useSelector((state) => state.user.user);

  return <h1>{user?.name}</h1>;
}
```

**Change data:**

```jsx
import { useDispatch } from "react-redux";
import { setUser } from "./redux/userSlice";

function Login() {
  const dispatch = useDispatch();

  const login = () => {
    dispatch(setUser({
      name: "Nithesh",
      age: 19,
    }));
  };

  return <button onClick={login}>Login</button>;
}
```

### 🧠 Remember this

```text
createSlice()
     ↓
slice reducer
     ↓
configureStore()
     ↓
<Provider>
     ↓
useSelector()  → READ
useDispatch()  → UPDATE
```

That's the **Redux Toolkit boilerplate** you should use for your projects.
