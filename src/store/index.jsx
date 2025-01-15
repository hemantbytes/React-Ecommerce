// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import productsSlice from '../store/slices/ProductSlice';
import cartSlice from '../store/slices/CartSlice';


export const store = configureStore({
  reducer: {
    products: productsSlice,
    cart: cartSlice,
  },
});
