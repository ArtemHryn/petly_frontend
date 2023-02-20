import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { authReducer } from './auth/authSlice';

import { noticesReducer } from './notices/noticesSlice';
import { filterSlice } from './notices/searchSlice';

import { partnersReducer } from './partners/partnersSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    notices: noticesReducer,
    filter: filterSlice.reducer,
    sponsors: partnersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
