import { createSlice } from '@reduxjs/toolkit';
import {
  getCategories,
  getTransactions,
  updateTransaction,
} from './StatisticsOperations';

const statiaticsSlice = createSlice({
  name: 'statistics',
  initialState: {
    date: {},
    transactions: [],
    categories: [],
    isLoading: false,
    error: null,
    isOpenEditModal: false,
  },

  reducers: {
    addDate: (state, action) => {
      if (action && action.type === 'statistics/addDate') {
        state.date = action.payload;
        console.log('Slise-date', state.date);
      }
    },
  },

  extraReducers: builder => {
    builder

      .addCase(getTransactions.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getTransactions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.transactions = action.payload;
      })
      .addCase(getTransactions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      .addCase(getCategories.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      .addCase(updateTransaction.pending, state => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(updateTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default statiaticsSlice.reducer;
