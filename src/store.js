import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slices/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export { store }; // Export the store object directly, not using 'default'
