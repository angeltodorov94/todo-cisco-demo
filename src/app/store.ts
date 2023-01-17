import { configureStore } from '@reduxjs/toolkit'
import { todosSlice } from '../features/todos/todosSlice'
import { userSlice } from '../features/users/usersSlice'
import { todosApi } from '../services/todosAPI'

export const store = configureStore({
  reducer: {
    [todosApi.reducerPath]: todosApi.reducer,
    users: userSlice.reducer,
    todos: todosSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
