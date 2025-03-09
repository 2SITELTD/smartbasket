import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Order } from '../types/orderTypes';
import { orders } from '../data/mockOrders';
import { OrderStatus, OrderState } from '../types/orderTypes';



const initialState: OrderState = {
  orders
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<Order>) => {
      state.orders.unshift(action.payload);
    },
    setOrderStatus: (state, action: PayloadAction<{ id: string; status: OrderStatus; }>) => {
      const index = state.orders.findIndex(order => order.id === action.payload.id);
      if (index !== -1) {
        state.orders[index] = { ...state.orders[index], status: action.payload.status };
      }
    },
  }
});

// Selectors
export const selectOrders = (state: OrderState) => state.orders;  // Fixed here
export const selectOrderById = (state: OrderState, orderId: string) => 
  state.orders.find(order => order.id === orderId);  // Fixed here
export const selectOrderStatus = (state: OrderState, orderId: string) => 
  state.orders.find(order => order.id === orderId)?.status;  // Fixed here

export const { addOrder, setOrderStatus } = ordersSlice.actions;
export default ordersSlice.reducer;
