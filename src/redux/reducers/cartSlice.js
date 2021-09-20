import { createSlice } from '@reduxjs/toolkit';
// import cookie from 'react-cookies';

// const cardData = cookie.load('cart') !== undefined ? cookie.load('cart') : null;

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      let cart = state.cart;
      if (cart !== null) {
        cart.push(action.payload);
        state.cart = cart;
      } else {
        state.cart = [action.payload];
      }
    },
    removeFromCart: (state, action) => {
      const data = state.cart.filter((item) => item.id !== action.payload.id);
      state.cart = data;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
