Here’s a clean, **README-ready Redux Toolkit boilerplate summary**:

````md
## Redux Toolkit Setup

### 1. Create the Redux Store

Create a central store to hold all application states.

```js
import { configureStore } from "@reduxjs/toolkit";
import foodreducer from "./foodslice";
import cartreducer from "./CartSlice";

export const store = configureStore({
  reducer: {
    food: foodreducer,
    cart: cartreducer,
  },
});
````

State can then be accessed using:

```js
state.food.food_list
state.cart.cart_list
```

---

### 2. Create Slices

Create separate slices for different parts of the global state.

Example: `foodslice.js`

```js
import { createSlice } from "@reduxjs/toolkit";
import { food_list } from "../assets/frontend_assets/assets.js";

const initialState = {
  food_list: food_list,
};

const foodslice = createSlice({
  name: "food",
  initialState,
  reducers: {
    // Add reducers here to update the state
  },
});

export default foodslice.reducer;
```

Each slice contains:

* `name` → identifies the slice
* `initialState` → stores the initial data
* `reducers` → contains functions used to update the state

---

### 3. Provide the Store to React

In `main.jsx`, wrap the application with Redux's `Provider`.

```jsx
import { Provider } from "react-redux";
import { store } from "./store/store";

<Provider store={store}>
  <App />
</Provider>
```

Now the Redux store is available throughout the React application.

---

### 4. Access Global State

Use `useSelector` to read data from the Redux store.

```jsx
import { useSelector } from "react-redux";

const foodList = useSelector((state) => state.food.food_list);
```

General pattern:

```js
useSelector((state) => state.<sliceName>.<stateProperty>);
```

---

### 5. Update Global State

Use `useDispatch` to dispatch reducer actions.

```jsx
import { useDispatch } from "react-redux";
import { addToCart } from "./CartSlice";

const dispatch = useDispatch();

dispatch(addToCart(item));
```

General pattern:

```js
dispatch(reducerAction(data));
```

### Redux Flow

```text
Component
   ↓
useSelector → Read State
   ↓
Redux Store
   ↑
useDispatch → Dispatch Action
   ↑
Reducer → Update State
```

**In short:** Store → Slices → Provider → `useSelector` to access state → `useDispatch` to update state.

```
```
