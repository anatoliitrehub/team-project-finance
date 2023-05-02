import { createSlice } from '@reduxjs/toolkit';
import {
  uploadImage,
  userChartInfo,
  userChartInfoByMonth,
} from './dinamicsOperation';

const dinamicsSlice = createSlice({
  name: 'dinamics',
  initialState: {
    image: '',
    chartInfo: [],
    year: '',
    month: '',
  },
  reducers: {
    addImg(state, { payload }) {
      state.image = payload;
    },
    fetchByYear(state, { payload }) {
      state.year = payload;
    },
    fetchByMonth(state, { payload }) {
      state.month = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(userChartInfoByMonth.fulfilled, (state, { payload }) => {
        console.log(payload);
      })
      .addCase(userChartInfo.fulfilled, (state, { payload }) => {
        return {
          ...state,
          ...payload,
        };
      })
      .addCase(uploadImage.fulfilled, (state, { payload }) => {
        return {
          ...state,
          ...payload,
        };
      });
  },
});

const dinamicsReducer = dinamicsSlice.reducer;

export default dinamicsReducer;
export const { addImg } = dinamicsSlice.actions;
