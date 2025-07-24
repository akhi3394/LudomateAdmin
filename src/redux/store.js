import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './slices/authSlice';
import { apiSlice } from './slices/apiSlice';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken', 'user', 'isAuthenticated'], // Persist only these fields
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE', 'persist/PURGE'],
      },
    }).concat(apiSlice.middleware),
});

export const persistor = persistStore(store);

// Function to clear persisted state on logout
export const clearPersistedState = () => {
  try {
    persistor.purge();
    console.log('Persisted state cleared successfully');
  } catch (error) {
    console.error('Failed to clear persisted state:', error);
  }
};

// Optional: For debugging in development
window.store = store;

export default store;