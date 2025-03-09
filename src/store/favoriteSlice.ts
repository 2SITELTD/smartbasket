import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { RootState } from '../store'; // Adjust the import according to your project structure

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: {
    favoriteProducts: [] as string[],
    favoritePackages: [] as string[],
  },
  reducers: {
    toggleFavoriteProduct: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      if (state.favoriteProducts.includes(productId)) {
        state.favoriteProducts = state.favoriteProducts.filter(id => id !== productId);
      } else {
        state.favoriteProducts = [...state.favoriteProducts, productId];
      }
      localStorage.setItem('favoriteProducts', JSON.stringify(state.favoriteProducts));
    },
    toggleFavoritePackage: (state, action: PayloadAction<string>) => {
      const packageId = action.payload;
      if (state.favoritePackages.includes(packageId)) {
        state.favoritePackages = state.favoritePackages.filter(id => id !== packageId);
      } else {
        state.favoritePackages = [...state.favoritePackages, packageId];
      }
      localStorage.setItem('favoritePackages', JSON.stringify(state.favoritePackages));
    },
    setFavorites: (state, action: PayloadAction<{ favoriteProducts: string[]; favoritePackages: string[] }>) => {
      state.favoriteProducts = action.payload.favoriteProducts;
      state.favoritePackages = action.payload.favoritePackages;
      localStorage.setItem('favoriteProducts', JSON.stringify(state.favoriteProducts));
      localStorage.setItem('favoritePackages', JSON.stringify(state.favoritePackages));
    },
    clearFavorites: (state) => {
      state.favoriteProducts = [];
      state.favoritePackages = [];
      localStorage.removeItem('favoriteProducts');
      localStorage.removeItem('favoritePackages');
    },
  },
});

export const { toggleFavoriteProduct, toggleFavoritePackage, setFavorites, clearFavorites } = favoriteSlice.actions;

export const selectFavoriteProducts = (state: RootState) => state.favorites.favoriteProducts;
export const selectFavoritePackages = (state: RootState) => state.favorites.favoritePackages;

// Memoized selectors
export const selectFavoriteProductIds = createSelector(
  (state: RootState) => state.favorites.favoriteProducts,
  (favoriteProducts) => new Set(favoriteProducts)
);

export const selectFavoritePackageIds = createSelector(
  (state: RootState) => state.favorites.favoritePackages,
  (favoritePackages) => new Set(favoritePackages)
);

export default favoriteSlice.reducer;