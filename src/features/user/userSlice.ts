import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  isAuthenticated: boolean;
  userInfo: {
    email: string | null;
    token: string | null;
  };
}

const initialState: UserState = {
  isAuthenticated: false,
  userInfo: {
    email: null,
    token: null,
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ email: string; token: string }>) => {
      state.isAuthenticated = true;
      state.userInfo = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.userInfo = { email: null, token: null };
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
