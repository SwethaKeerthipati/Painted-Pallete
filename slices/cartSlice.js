import { createSlice, createSelector } from "@reduxjs/toolkit";
import axios from "axios";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cartItems.push(item);
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cartItems.find((cartItem) => cartItem.id === id);

      if (item) {
        item.quantity = quantity;
      }
    },
    removeFromCart: (state, action) => {
      const itemIdToRemove = action.payload.id;
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== itemIdToRemove
      );
    },
    emptyCart: (state) => {
      state.cartItems = [];
    },
  },
});

// // API calls

// export const addToCartAsync = (item) => async (dispatch) => {
//   try {
//     const response = await axios.post("/api/cart", { productId: item.id });
//     dispatch(cartSlice.actions.addToCart(response.data));
//   } catch (error) {
//     console.error(error);
//   }
// };

// export const updateCartItemQuantityAsync =
//   (itemId, quantity) => async (dispatch) => {
//     try {
//       const response = await axios.put("/api/cart", {
//         productId: itemId,
//         quantity,
//       });
//       dispatch(cartSlice.actions.updateQuantity(response.data));
//     } catch (error) {
//       console.error(error);
//     }
//   };

// export const removeFromCartAsync = (itemId) => async (dispatch) => {
//   try {
//     await axios.delete("/api/cart", { data: { productId: itemId } });
//     dispatch(cartSlice.actions.removeFromCart({ id: itemId }));
//   } catch (error) {
//     console.error(error);
//   }
// };

// Selectors

export const selectTotal = createSelector(
  (state) => state.cart.cartItems,
  (cartItems) =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
);

export const { addToCart, removeFromCart, updateQuantity, emptyCart } =
  cartSlice.actions;

export default cartSlice.reducer;
