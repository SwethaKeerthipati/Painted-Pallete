import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
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

export const selectTotal = createSelector(
  (state) => state.cart.cartItems,
  (cartItems) =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
);

// Add an extra action to load cart items from localStorage
export const loadCartItemsFromStorage = () => (dispatch) => {
  const cartItemsFromLocalStorage = JSON.parse(
    localStorage.getItem("cartItems")
  );
  if (cartItemsFromLocalStorage) {
    dispatch(cartSlice.actions.emptyCart());
    dispatch(cartSlice.actions.setCartItems(cartItemsFromLocalStorage));
  }
};

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  emptyCart,
  setCartItems,
} = cartSlice.actions;

export default cartSlice.reducer;
