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
import { partnersReducer } from './partners/partnersSlice';
import { newsReducer } from './news/newsSlice';
import { noticesReducer } from './notices/noticesSlice';
import { filterSlice } from './notices/searchSlice';
import { petsReducer } from './pets/petSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    sponsors: partnersReducer,
    notices: noticesReducer,
    filter: filterSlice.reducer,
    news: newsReducer,
    pets: petsReducer,

  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
