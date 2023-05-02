import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { token } from 'redux/Auth/authOperations';

axios.defaults.baseURL = 'https://flat-backend.p.goit.global/api';

export const uploadImage = createAsyncThunk(
  'dynamics/patch',
  async (image, thunkAPI) => {
    try {
      const imageToken = thunkAPI.getState().auth.token;
      token.set(imageToken);
      
      const data = await axios.patch('/dynamics/flatImage', image);
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const userChartInfo = createAsyncThunk(
  'dynamics/get',
  async (__, thunkAPI) => {
    try {
      const imageToken = thunkAPI.getState().auth.token;
      token.set(imageToken);

      const data = await axios.get('/dynamics');
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const userChartInfoByMonth = createAsyncThunk(
  'dynamics/by-month',
  async (__, thunkAPI) => {
    try {
      const imageToken = thunkAPI.getState().auth.token;
      token.set(imageToken);

      const data = await axios.get('/dynamics/by-month?year=1&month=4');
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);