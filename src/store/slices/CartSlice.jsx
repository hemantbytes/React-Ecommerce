// src/store/slices/CartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Array to hold cart items
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.id === newItem.id);
      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].quantity++;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
    },
    removeItemFromCart(state, action) {
      const idToRemove = action.payload;
      state.items = state.items.filter(item => item.id !== idToRemove);
    },
    updateItemQuantity(state, action) {
      const { id, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.id === id);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addItemToCart, removeItemFromCart, updateItemQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
