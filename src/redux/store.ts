import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from './api/baseApi';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REGISTER,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authSlice from './features/auth.slice';
import toggleSlice from './features/toggle.slice';
const persistConfig = {
  key: 'auth',
  storage,
};
const persistAuthReducer = persistReducer(persistConfig, authSlice);

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: persistAuthReducer,
    toggle: toggleSlice,
  },
  middleware: (getDefaultMiddlewares: any) =>
    getDefaultMiddlewares({
      serializableCheck: {
        ignoredActions: [FLUSH, REGISTER, REHYDRATE, PAUSE, PERSIST, PURGE],
      },
    }).concat(baseApi.middleware),
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const persistore = persistStore(store);
