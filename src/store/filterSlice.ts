import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";


interface FiltersState {
  priceRange: [number, number];
  selectedCategories: string[];
  selectedTags: string[];
}

const initialState: FiltersState = {
  priceRange: [0, 30], // Default price range
  selectedCategories: [],
  selectedTags: [],
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setPriceRange: (state, action: PayloadAction<[number, number]>) => {
      state.priceRange = action.payload;
    },
    setSelectedCategories: (state, action: PayloadAction<string>) => {
      state.selectedCategories = state.selectedCategories.includes(action.payload) ?
      state.selectedCategories.filter ((c) => c !== action.payload) : [...state.selectedCategories, action.payload]
    },
    setSelectedTags: (state, action: PayloadAction<string>) => {
      state.selectedTags = state.selectedTags.includes(action.payload) ?
      state.selectedTags.filter ((t) => t !== action.payload) : [...state.selectedTags, action.payload]
    },
    clearFilters: (state) => {
      state.priceRange = [0, 30];
      state.selectedCategories = [];
      state.selectedTags = [];
    },

  },
});
export const selectFilters = (state: RootState) => state.filters;
export const { setPriceRange, setSelectedCategories, setSelectedTags, clearFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
