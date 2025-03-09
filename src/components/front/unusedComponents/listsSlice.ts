import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { List } from '../../../types/listsType';

const initialState: List[] = [];

const listsSlice = createSlice({
  name: 'lists',
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
  },
});

export const { addList, updateList, deleteList } = listsSlice.actions;
export default listsSlice.reducer;