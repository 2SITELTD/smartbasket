
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import categoryReducer from './categorySlice';
import tagReducer from './tagSlice';
import cartReducer from './cartSlice';
import packageReducer from './packageSlice';
import userReducer from './userSlice';
import favoriteReducer from './favoriteSlice'; // Ensure this is imported
import orderReducer from './orderSlice';
import courierReducer from './courierSlice';
import paymentReducer from './paymentSlice';
import listReducer from './listSlice';
import filterReducer from './filterSlice';
import inventoryReducer from './inventorySlice';

const store = configureStore({
  reducer: {
    products: productReducer,
    packages: packageReducer,
    categories: categoryReducer,
    tags: tagReducer,
    cart: cartReducer,
    user: userReducer,
    favorites: favoriteReducer,
    order: orderReducer, 
    courier: courierReducer,
    payment: paymentReducer, 
    //lists: listReducer, 
    list: listReducer, 
    filters: filterReducer,
    inventory: inventoryReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
