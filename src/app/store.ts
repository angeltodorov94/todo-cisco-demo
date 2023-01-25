import {
  combineReducers,
  configureStore,
  PreloadedState,
} from '@reduxjs/toolkit'
import { todosSlice } from '../features/todos/todosSlice'
import { userSlice } from '../features/users/usersSlice'
import { todosApi } from '../services/todosAPI'

export const rootReducer = combineReducers({
  [todosApi.reducerPath]: todosApi.reducer,
  users: userSlice.reducer,
  todos: todosSlice.reducer,
})

export const storeWithPreloadedState = (
  preloadedState?: PreloadedState<RootState>
) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(todosApi.middleware),
  })

export const store = storeWithPreloadedState()
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof storeWithPreloadedState>
export type AppDispatch = AppStore['dispatch']
