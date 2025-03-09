import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { RootState } from '.';
import { InventoryItem, InventoryState } from '@/types/inventoryTypes';
import { mockInventory } from '../data/mockInventory';

const initialState: InventoryState = {
    items: mockInventory
}




const inventorySlice = createSlice({
    name: "inventory",
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<InventoryItem>) => {
            state.items.push(action.payload);
        },
        updateItem: (state, action: PayloadAction<{ id: string; updates: Partial<InventoryItem> }>) => {
            const product = ((state: RootState) => state.products.products.find((product) => product.id === action.payload.id));
            const item = state.items.find((item) => item.id === action.payload.id);
            if (item) {
                Object.assign(item, action.payload.updates);
                if (item.quantity === 0) {
                    item.isOutOfStock = true;
                }
            }
        },
        removeItem: (state, action: PayloadAction<string>) => {
            const product = ((state: RootState) => state.products.products.find((product) => product.id === action.payload));
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
        markOutOfStock: (state, action: PayloadAction<string>) => {
            const item = state.items.find((item) => item.id === action.payload);
            if (item) {
                item.isOutOfStock = true;
            }
        },
    },
});

// Selectors
export const selectInventory = (state: RootState) => state.inventory.items;
export const selectInventoryPackages = (state: RootState) => state.inventory.items;
export const selectQuantityByPackageId = (state: RootState, packageId: string) => {
    const inventoryItem = state.inventory.items.find((inventoryItem: InventoryItem) => ((inventoryItem.id === packageId) && (inventoryItem.isPackage)));
    return inventoryItem ? inventoryItem.quantity : 0; // Return quantity or 0 if not found
};
export const selectOutOfStockItems = (state: RootState) =>
    state.inventory.items.filter((item) => item.isOutOfStock);
export const selectPackages = createSelector(
    [selectInventory],
    (items) => items.filter((item) => item.isPackage) // Returns the same reference if `items` haven't changed
  );
  
  export const selectProducts = createSelector(
    [selectInventory],
    (items:InventoryItem[]) => items.filter((item) => !item.isPackage)
  );

// Export actions and reducer
export const { addItem, updateItem, removeItem, markOutOfStock } = inventorySlice.actions;
export default inventorySlice.reducer;