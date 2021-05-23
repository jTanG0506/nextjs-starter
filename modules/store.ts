import { logger } from 'redux-logger'
import {
  configureStore,
  combineReducers,
  Action,
  ThunkAction,
} from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import { RootState } from '@/types/redux'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [],
}

export const store = configureStore({
  reducer: persistReducer(persistConfig, combineReducers({})),
  middleware: (getDefaultMiddleware) => {
    const middleware = getDefaultMiddleware({
      serializableCheck: false,
    }).concat(process.env.NODE_ENV === 'development' ? [logger] : [])
    return middleware
  },
})

export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>
