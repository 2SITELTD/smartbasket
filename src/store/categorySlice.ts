import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Category, CategoryState } from '../types/categoryTypes';
import { mockCategories } from '../data/mockCategories';
import { RootState } from './index';

const initialState: CategoryState = {
  categories: mockCategories,
  loading: false,
  error: null,
};

// Async thunk to fetch categories
export const fetchCategories = createAsyncThunk('categories/fetch', async () => {
  const response = await fetch('/api/categories'); // Adjust the API endpoint as needed
  if (!response.ok) {
    throw new Error('Failed to fetch categories');
  }
  return response.json();
});

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch categories';
      });
  },
});

export const selectCategories = (state: { categories: CategoryState }) => state.categories.categories;
export const selectCategoryNamesById = (categoryIds: string[]) => (state: RootState) => {
  const categoryMap = new Map(state.categories.categories.map((category) => [category.id, category.name]));
  return categoryIds.map((id) => categoryMap.get(id) || "Unknown");
};
export default categorySlice.reducer;