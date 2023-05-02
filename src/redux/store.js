import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Auth/authSlice';
import planReducer from './PersonalPlan/personalPlanSlice';
import { burgerReducer } from './BurgerMenu/burgerSlice';
import cashflowSlice from './Cashflow/cashflowSlice';
import statisticsReducer from './Statistics/StatisticsSlise';
import loaderReducer from "./Loader/loaderSlice"
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import dinamicsReducer from './Dynamics/dinamicsSlice';

const persistContactsConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedContactsReducer = persistReducer(
  persistContactsConfig,
  authReducer
);

export const store = configureStore({
  reducer: {
    auth: persistedContactsReducer,
    plan: planReducer,
    cashflow: cashflowSlice,

    burger: burgerReducer,
    dinamics: dinamicsReducer,
    statistics: statisticsReducer,
    isLoading: loaderReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
