/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { UserState, BillingDetails } from '../types/userTypes';
import userService, { LoginCredentials, RegisterData } from '../services/userService';

const initialState: UserState = {
  isAuthenticated: true,
  loading: false,
  error: null,
  userInfo: {
    email: null,
    token: null,
    firstName: '',
    lastName: '',
    phone: '',
  },
  shippingDetails: {
    city: null,
    street: null,
    houseNumber: null,
    apartment: null,
    postalCode: null,
  },
  billingDetails: {
    city: null,
    street: null,
    houseNumber: null,
    apartment: null,
    postalCode: null,
  },
  mainAddress: {
    city: null,
    street: null,
    houseNumber: null,
    apartment: null,
    postalCode: null,
    isEditing: false
  },
  totalSaved: 0
};

// Async thunks
export const loginAsync = createAsyncThunk(
  'user/login',
  async (credentials: LoginCredentials, { rejectWithValue }) => {
    try {
      const response = await userService.login(credentials);
      localStorage.setItem('token', response.data.token);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Login failed');
    }
  }
);

export const registerAsync = createAsyncThunk(
  'user/register',
  async (data: RegisterData, { rejectWithValue }) => {
    try {
      const response = await userService.register(data);
      localStorage.setItem('token', response.data.token);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Registration failed');
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.userInfo = initialState.userInfo;
      state.error = null;
      userService.logout();
    },
    clearError: (state) => {
      state.error = null;
    },
    updateUserInfo: (state, action: PayloadAction<Partial<UserState['userInfo']>>) => {
      state.userInfo = { ...state.userInfo, ...action.payload };
    },
    updateShippingDetails: (state, action: PayloadAction<Partial<UserState['shippingDetails']>>) => {
      console.log(action.payload)
      state.shippingDetails = { ...state.shippingDetails, ...action.payload };
    },
    updateAddress: (state, action: PayloadAction<Partial<BillingDetails>>) => {
      state.billingDetails = { ...state.billingDetails, ...action.payload };
    },
    setSavingsAmount: (state, action: PayloadAction<number>) => {
      state.totalSaved = action.payload;
    }
  },
  extraReducers: (builder) => {
    // Login cases
    builder
      .addCase(loginAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        if (action.payload) {
          state.loading = false;
          state.isAuthenticated = true;
          state.userInfo = {
            email: action.payload.data.user?.email || '',
            token: action.payload.data.token || '',
            firstName: action.payload.data.user?.name?.split(' ')[0] || '',
            lastName: action.payload.data.user?.name?.split(' ')[1] || '',
            phone: action.payload.data.user?.phone || '',
          };
        }
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Register cases
      .addCase(registerAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.userInfo = {
          email: action.payload.data.user.email,
          token: action.payload.data.token,
          firstName: action.payload.data.user.name.split(' ')[0] || '',
          lastName: action.payload.data.user.name.split(' ')[1] || '',
          phone: action.payload.data.user.phone || '',
        };
      })
      .addCase(registerAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  }
});

export const { 
  logout, 
  clearError, 
  updateUserInfo, 
  updateShippingDetails, 
  updateAddress, 
  setSavingsAmount 
} = userSlice.actions;

export const selectUserDetails = (state: { user: UserState }) => state.user;
export const selectAddress = (state: UserState) => state.billingDetails;
export const selectSavings = (state: { user: UserState }) => state.user.totalSaved;

export default userSlice.reducer;