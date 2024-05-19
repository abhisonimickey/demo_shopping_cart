import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartSlice";

const store = configureStore({
  reducer: {
    carts: CartReducer,
  },
});
export default store;
