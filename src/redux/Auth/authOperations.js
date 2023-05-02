import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';

import { logOut } from './authSlice';
import { unsetPlanState } from 'redux/PersonalPlan/personalPlanSlice';
axios.defaults.baseURL = 'https://flat-backend.p.goit.global/api';

export const token = {
  set(token) {
    axios.defaults.headers.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.Authorization = '';
  },
};

export const registerUser = createAsyncThunk(
  'user/register',
  async (credentials, { rejectWithValue, dispatch }) => {
    try {
      const res = await axios.post('/user/register', credentials);
      const { email, password } = credentials;
      dispatch(loginUser({ email, password }));
      return res.data;
    } catch (error) {
      const { status } = error.response.request;
      // if (status === 409) {
      //   Notify.failure(`${credentials.email} already exists`);
      // } else if (status === 500) {
      //   Notify.failure(`${credentials.name} already exists`);
      // }

      switch (status) {
        case 500:
          Notify.failure('Sorry, server error occured👻');
          break;
        case 401:
          Notify.failure('Sorry, you are not authorized👻');
          break;
        default:
          Notify.failure('Sorry, bad reqest👻');
      }

      return rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'user/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await axios.post('/user/login', credentials);
      token.set(res.data.token);
      const user = await axios.get('/user/info');
      const userData = { ...user.data, token: res.data.token };
      return userData;
    } catch (error) {
      const { status } = error.response.request;
      if (status === 401) {
        Notify.failure(`Email or password is wrong`);
      } else if (status === 400) {
        Notify.failure(`Error`);
      } else if (status === 500) {
        Notify.failure('Server error');
      }

      return rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'user/logout',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const res = await axios.get('/user/logout');
      token.unset();
      dispatch(unsetPlanState())
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'user/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.token;

    try {
      token.set(persistToken);
      const res = await axios.get('/user/info');
      return res.data;
    } catch (error) {
      setTimeout(() => {
        thunkAPI.dispatch(logOut());
      }, 0);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition(_, { getState }) {
      const { token } = getState().auth;
      return Boolean(token);
    },
  }
);

export const getBalanceUser = createAsyncThunk(
  'user/balance',
  async (balance, { rejectWithValue }) => {
    try {
      const res = await axios.put('/user/addBalance', { balance });
      return res.data;
    } catch (error) {
      const { status } = error.response.request;
      switch (status) {
        case 500:
          Notify.failure('Sorry, server error occured👻');
          break;
        case 401:
          Notify.failure('Sorry, you are not authorized👻');
          break;
        default:
          Notify.failure('Sorry, bad reqest👻');
      }

      return rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { balance } = getState().auth.user;
      if (balance) return false;
      return true;
    },
  }
);
