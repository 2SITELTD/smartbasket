import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './index';
import { List } from '../types/listsType';
import { mockLists } from '../data/mockLists';

const initialState: List[] = mockLists;

const listsSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addList: (state, action: PayloadAction<List>) => {
      state.push(action.payload);
    },
    updateList: (state, action: PayloadAction<List>) => {
      const index = state.findIndex(list => list.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteList: (state, action: PayloadAction<string>) => {
      return state.filter(list => list.id !== action.payload);
    },
    addProductToList: (state, action: PayloadAction<{ listId: string; products: { productId: string; quantity: number; }; }>) => {
      const list = state.find(list => list.id === action.payload.listId);
      if (list && !list.products.some(p => p.productId === action.payload.products.productId)) {
        list.products.push(action.payload.products);
      }
    },
    removeProductFromList: (state, action: PayloadAction<{ listId: string; products: { productId: string; quantity: number; }; }>) => {
      const list = state.find(list => list.id === action.payload.listId);
      if (list) {
        list.products = list.products.filter(p => p.productId !== action.payload.products.productId);
      }
    },
    updateProductQuantity: (state, action: PayloadAction<{ listId: string; products: { productId: string; quantity: number; }; }>) => {
      const list = state.find(list => list.id === action.payload.listId);
      if (list) {
        const productIndex = list.products.findIndex(p => p.productId === action.payload.products.productId);
        if (productIndex !== -1) {
          list.products[productIndex].quantity = action.payload.products.quantity;
        }
      }
    },
  },
});

export const { 
  addList, 
  updateList, 
  deleteList, 
  addProductToList, 
  removeProductFromList,
  updateProductQuantity 
} = listsSlice.actions;

export const selectLists = (state: RootState) => state.list;
export const selectListById = (state: RootState, listId: string) => 
  state.list.find(list => list.id === listId);

export default listsSlice.reducer;
