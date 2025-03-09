import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userReducer from '../features/user/userSlice';
import productsReducer from '../features/products/productsSlice';
import cartReducer from '../store/cartSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    counter: counterReducer,
    user: userReducer,
    cart: cartReducer,
  },
  preloadedState: {
    user: {
      isAuthenticated: false,
      userInfo: {
        email: null,
        token: null,
      }
    }
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;