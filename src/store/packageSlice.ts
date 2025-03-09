import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { PackageState } from '../types/packageType';
import { packages } from '../data/mockPackages';
import { RootState } from '.';
import { Package } from '@/types/product';

const initialState: PackageState = {
    packages: packages,
    loading: false,
    error: null,
};

// Async thunk to fetch products
export const fetchPackages = createAsyncThunk('products/fetch', async () => {
    console.log('fetchPackages')
    const response = await fetch('/api/packages'); // Adjust the API endpoint as needed
    if (!response.ok) {
        throw new Error('Failed to fetch packages');
    }
    return response.json();
});

const packageSlice = createSlice({
    name: 'packages',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPackages.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchPackages.fulfilled, (state, action) => {
                state.loading = false;
                console.log(action.payload)
                state.packages = action.payload;
            })
            .addCase(fetchPackages.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch products by category';
            });
    },
});

export const selectPackages = (state: { packages: PackageState }) => state.packages.packages;
export const selectPackageById = (state: RootState, packageId: string) =>
    state.packages.packages.find((packageItem: Package) => packageItem.id === packageId);
export const selectLoading = (state: { packages: PackageState }) => state.packages.loading;
export const selectError = (state: { packages: PackageState }) => state.packages.error;

export default packageSlice.reducer;