import { createSlice } from '@reduxjs/toolkit';
import {
  addTransaction,
  getCategoryList,
  getPresevingDate,
} from './cashflowOperations';

const initialState = {
  category: [],
  presaving: {
    monthLimit: 0,
    dailyLimit: 0,
    totalByMounth: 0,
    totalByDay: 0,
  },
  error: null,
};

const cashflowSlice = createSlice({
  name: 'cashflow',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getCategoryList.fulfilled, (state, { payload }) => {
        state.category = payload;
      })
      .addCase(getPresevingDate.fulfilled, (state, { payload }) => {
        const { monthLimit, dailyLimit, totalByDay, totalByMounth } = payload;
        state.presaving.monthLimit = Math.round(monthLimit);
        state.presaving.dailyLimit = Math.round(dailyLimit);
        state.presaving.totalByDay = Number(totalByDay);
        state.presaving.totalByMounth = Number(totalByMounth);
      })
      .addCase(addTransaction, (state, { payload }) => {
        const { sum, type } = payload;
        if (type === 'expense') {
          state.presaving.dailyLimit -= sum;
        } 
        
        return state;
        
      })
      .addMatcher(
        action =>
          action.type.startsWith('cashflow') &&
          action.type.endsWith('/pending'),
        state => {
        }
      )
      .addMatcher(
        action =>
          action.type.startsWith('cashflow') &&
          action.type.endsWith('/rejected'),
        (state, { payload }) => {
          state.error = payload;
        }
      );
  },
});

export default cashflowSlice.reducer;
