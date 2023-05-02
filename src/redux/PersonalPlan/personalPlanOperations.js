import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';

axios.defaults.baseURL = 'https://flat-backend.p.goit.global/api';

export const postPersonalPlanPre = createAsyncThunk(
  'plan/postpre',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/personal-plan/pre', credentials);
      return data;
    } catch (error) {
      const status = error.response.status;

      switch (status) {
        case 401:
          Notify.failure('Please, log in👻');
          break;
        case 404:
          Notify.failure('Sorry, this page not found👻');
          break;
        case 500:
          Notify.failure('Sorry, server error👻');
          break;
        default:
          Notify.failure('Sorry, bad request👻');
      }
      return rejectWithValue(error.message);
    }
  }
);

export const postPersonalPlan = createAsyncThunk(
  'plan/post',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/personal-plan', credentials);
     if(data._id) Notify.success('Congratulations🏡 Your personal plan has been saved');
      return data;
    } catch (error) {
      const status = error.response.status;

      switch (status) {
        case 401:
          Notify.failure('Please, log in👻');
          break;
        case 404:
          Notify.failure('Sorry, this page not found👻');
          break;
        case 500:
          Notify.failure('Sorry, server error👻');
          break;
        default:
          Notify.failure('Sorry, bad request👻');
      }
      return rejectWithValue(error.message);
    }
  }
);

export const getPersonalPlan = createAsyncThunk(
  'plan/get',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/personal-plan');
      return data;
    } catch (error) {
      const status = error.response.status;

      switch (status) {
        case 400:
          Notify.info("You don't have a personal plan yet👻");
          break;
        case 401:
          Notify.failure('Please, log in👻');
          break;
        case 404:
          Notify.failure('Sorry, this page not found👻');
          break;
        case 500:
          Notify.failure('Sorry, server error👻');
          break;
        default:
          Notify.failure('Sorry, bad request👻');
      }
      return rejectWithValue(error.message);
    }
  }
);

export const putPersonalPlan = createAsyncThunk(
  'plan/put',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.put('/personal-plan', credentials);
      Notify.success(
        'Congratulations🏡 Your personal plan has been successfully changed'
      );
      return data;
    } catch (error) {
      const status = error.response.status;

      switch (status) {
        case 401:
          Notify.failure('Please, log in👻');
          break;
        case 404:
          Notify.failure('Sorry, this page not found👻');
          break;
        case 500:
          Notify.failure('Sorry, server error👻');
          break;
        default:
          Notify.failure('Sorry, bad request👻');
      }
      return rejectWithValue(error.message);
    }
  }
);
