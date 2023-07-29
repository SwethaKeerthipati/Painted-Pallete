// utils/localStorageUtil.js

const CART_STORAGE_KEY = "cartItems";

export const getCartItemsFromLocalStorage = () => {
  if (typeof window === "undefined") {
    // Return an empty array if running on the server-side
    return [];
  }

  const storedItems = localStorage.getItem(CART_STORAGE_KEY);
  console.log("Retrieving cart items from local storage:", storedItems);
  return storedItems ? JSON.parse(storedItems) : [];
};

export const saveCartItemsToLocalStorage = (cartItems) => {
  if (typeof window === "undefined") {
    // Do nothing if running on the server-side
    return;
  }

  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  console.log("Saving cart items to local storage:", cartItems);
};
