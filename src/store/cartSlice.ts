import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItemProps, CartState } from '../types/cartTypes';
import { mockCartItems } from '../data/mockCartItems';
import { calculateTotals } from '../lib/helpers';
import { RootState } from '.';

const savedCart = localStorage.getItem("cart");

const initialState: CartState = savedCart ? JSON.parse(savedCart) : { items: [], ...calculateTotals([]) }


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItemProps>) {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items = [...state.items, { ...action.payload, quantity: action.payload.quantity }];
      }
    
      Object.assign(state, calculateTotals(state.items));
      // Save updated state to localStorage
      localStorage.setItem("cart", JSON.stringify(state));
    },
    updateQuantity(state, action: PayloadAction<{ id: string; quantity: number }>) {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
        Object.assign(state, calculateTotals(state.items));
        // Save updated state to localStorage
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter(item => item.id !== action.payload);
      Object.assign(state, calculateTotals(state.items));
      // Save updated state to localStorage
      localStorage.setItem("cart", JSON.stringify(state));
    },

    clearCart(state) {
      state.items = [];
      Object.assign(state, calculateTotals([]));
      // Clear the cart in localStorage as well
      localStorage.removeItem("cart");
    },
    incrementQuantity(state, action: PayloadAction<string>) {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
        Object.assign(state, calculateTotals(state.items));
        // Save updated state to localStorage
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },
    decrementQuantity(state, action: PayloadAction<string>) {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        Object.assign(state, calculateTotals(state.items));
        // Save updated state to localStorage
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },
  },
});

export const { addItem, updateQuantity, removeItem, clearCart, incrementQuantity, decrementQuantity } = cartSlice.actions;

export const selectCartItems = (state: { cart: CartState }) => state.cart.items;
export const selectCartTotal = (state: RootState) => calculateTotals(state.cart.items);
export const selectCart = (state: { cart: CartState }) => state.cart;
export default cartSlice.reducer;