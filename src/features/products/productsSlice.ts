import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Product, Package, ProductState, UserFavorite } from '../../types/product';

// Async thunk for saving favorite to backend
export const toggleFavorite = createAsyncThunk(
  'products/toggleFavorite',
  async ({ 
    userId, 
    productId, 
    type 
  }: { 
    userId: string; 
    productId: string; 
    type: 'product' | 'package' 
  }) => {
    // TODO: Replace with your actual API call
    const response = await fetch('/api/favorites', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, productId, type }),
    });
    const data = await response.json();
    return data;
  }
);

// Async thunk for fetching user's favorites
export const fetchUserFavorites = createAsyncThunk(
  'products/fetchUserFavorites',
  async (userId: string) => {
    const response = await fetch(`/api/users/${userId}/favorites`);
    const data = await response.json();
    return data;
  }
);

const initialState: ProductState = {
  products: [],
  packages: [],
  favorites: [],
  status: 'idle',
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    addPackage: (state, action: PayloadAction<Package>) => {
      state.packages.push(action.payload);
    },
    addToFavorites: (state, action: PayloadAction<UserFavorite>) => {
      state.favorites.push(action.payload);
    },
    removeFromFavorites: (state, action: PayloadAction<{ userId: string; productId: string }>) => {
      state.favorites = state.favorites.filter(
        fav => !(fav.userId === action.payload.userId && fav.productId === action.payload.productId)
      );
    },
  },
  extraReducers: (builder) => {
    builder
      // Toggle Favorite Cases
      .addCase(toggleFavorite.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(toggleFavorite.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // The backend should return the updated favorite status
        if (action.payload.isFavorited) {
          state.favorites.push(action.payload.favorite);
        } else {
          state.favorites = state.favorites.filter(
            fav => !(fav.userId === action.payload.userId && fav.productId === action.payload.productId)
          );
        }
      })
      .addCase(toggleFavorite.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to update favorite status';
      })
      // Fetch Favorites Cases
      .addCase(fetchUserFavorites.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserFavorites.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.favorites = action.payload;
      })
      .addCase(fetchUserFavorites.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch favorites';
      });
  },
});

export const { 
  addProduct, 
  addPackage, 
  addToFavorites, 
  removeFromFavorites 
} = productsSlice.actions;

// Selectors
export const selectIsFavorite = (state: { products: ProductState }, userId: string, productId: string) => 
  state.products.favorites.some(fav => fav.userId === userId && fav.productId === productId);

export const selectUserFavorites = (state: { products: ProductState }, userId: string) =>
  state.products.favorites.filter(fav => fav.userId === userId);

export default productsSlice.reducer;
