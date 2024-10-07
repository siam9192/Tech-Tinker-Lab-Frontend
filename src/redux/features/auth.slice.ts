import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

type TAuthState = {
  accessToken: null | string;
  refreshToken: null | string;
};
const initialState: TAuthState = {
  accessToken: null,
  refreshToken: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { accessToken, refreshToken } = action.payload;
      (state.accessToken = accessToken), (state.refreshToken = refreshToken);
    },
    logout: (state) => {
      (state.accessToken = null), (state.refreshToken = null);
    },
  },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;

export const useCurrentAccessToken = (state: RootState) =>
  state.auth.accessToken;

export const selectCurrentRefreshToken = (state: RootState) =>
  state.auth.refreshToken;
