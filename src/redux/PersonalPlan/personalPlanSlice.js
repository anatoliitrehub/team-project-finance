import { createSlice } from '@reduxjs/toolkit';
import {
  getPersonalPlan,
  postPersonalPlan,
  postPersonalPlanPre,
  putPersonalPlan,
} from './personalPlanOperations';

const initialState = {
  salary: '',
  passiveIncome: '',
  savings: '',
  cost: '',
  footage: '',
  procent: '',
  year: '',
  month: '',
  error: null,
  isLoading: false,
};

const personalPlanSlice = createSlice({
  name: 'plan',
  initialState,
  reducers: {
    unsetPlanState() {
      return { ...initialState };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(postPersonalPlanPre.fulfilled, (state, { payload }) => {
        return {
          ...state,
          ...payload,
          isLoading: false,
        };
      })
      .addCase(postPersonalPlan.fulfilled, (state, { payload }) => {
        return {
          ...state,
          ...payload,
          isLoading: false,
        };
      })
      .addCase(getPersonalPlan.fulfilled, (state, { payload }) => {
        return {
          ...state,
          ...payload,
          isLoading: false,
        };
      })
      .addCase(putPersonalPlan.fulfilled, (state, { payload }) => {
        return {
          ...state,
          ...payload,
          isLoading: false,
        };
      })

      .addMatcher(
        action =>
          action.type.startsWith('plan') && action.type.endsWith('/pending'),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        action =>
          action.type.startsWith('plan') && action.type.endsWith('/rejected'),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const { unsetPlanState } = personalPlanSlice.actions;
export default personalPlanSlice.reducer;
