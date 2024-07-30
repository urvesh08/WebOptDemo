import {configureStore} from '@reduxjs/toolkit';
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
import AsyncStorage from '@react-native-async-storage/async-storage';

import homeReducer from './features/home/homeSlice';
import charactersReducer from '../redux/features/characters/charactersSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['characters'],
};

const persistedReducer = persistReducer(persistConfig, charactersReducer);

export const store = configureStore({
  reducer: {
    characters: persistedReducer,
    home: homeReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
