import { atom, selector } from "recoil";

// Create a cart atom
export const cartState = atom({
  key: "cart",
  default: [],
});

// Function to add an item to the cart
export const addToCart = selector({
  key: "addToCart",
  get: ({ get }) => get(cartState),
  set: ({ get, set }, newItem) => {
    const currentCart = get(cartState);
    set(cartState, [...currentCart, newItem]);
  },
});

// Function to remove an item from the cart
export const removeFromCart = selector({
  key: "removeFromCart",
  get: ({ get }) => get(cartState),
  set: ({ get, set }, itemToRemove) => {
    const currentCart = get(cartState);
    const updatedCart = currentCart.filter(
      (item) => item.id !== itemToRemove.id
    );
    set(cartState, updatedCart);
  },
});
