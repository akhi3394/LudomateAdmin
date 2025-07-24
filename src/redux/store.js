import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './slices/authSlice';
import { apiSlice } from './slices/apiSlice';
import { userApiSlice } from './slices/userApiSlice';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken', 'user', 'isAuthenticated'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    [userApiSlice.reducerPath]: userApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE', 'persist/PURGE'],
      },
    }).concat(apiSlice.middleware, userApiSlice.middleware),
});

export const persistor = persistStore(store);

export const clearPersistedState = () => {
  try {
    persistor.purge();
    console.log('Persisted state cleared successfully');
  } catch (error) {
    console.error('Failed to clear persisted state:', error);
  }
};


export default store;