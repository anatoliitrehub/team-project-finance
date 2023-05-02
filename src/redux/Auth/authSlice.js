import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
  getBalanceUser,
} from './authOperations';
import { addTransaction } from 'redux/Cashflow/cashflowOperations';


const initialState = {
  user: { name: null, email: null, balance: 0 },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut() {
      return { ...initialState };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.error = null;
        state.isLoading = false;
        state.user = { ...payload };
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.error = null;
        state.isLoading = false;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.user = { ...payload.user };
      })
      .addCase(logoutUser.fulfilled, state => {
        return initialState;
      })
      .addCase(getCurrentUser.fulfilled, (state, { payload }) => {
        state.error = null;
        state.isLoading = false;
        state.user = { ...payload.user };
        state.isLoggedIn = true;
      })
      .addCase(getBalanceUser.fulfilled, (state, { payload }) => {
        state.user.balance = payload;
      })
      .addCase(addTransaction.fulfilled, (state, { payload }) => {
        state.user.balance = payload.newBalance;
      })
      .addMatcher(
        action =>
          action.type.startsWith('user') && action.type.endsWith('/pending'),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        action =>
          action.type.startsWith('user') && action.type.endsWith('/rejected'),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const { logOut } = authSlice.actions;
export default authSlice.reducer;
