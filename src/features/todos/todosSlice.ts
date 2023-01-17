import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ToDoUser, ToDoUserState } from '../../utils/types'

const initialState: ToDoUserState = {
  data: [],
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    initTodos: (state, action: PayloadAction<ToDoUser[]>) => {
      state.data = action.payload
    },
    addTodo: (state, action: PayloadAction<ToDoUser>) => {
      state.data.push(action.payload)
    },
    editTodo: (state, action: PayloadAction<ToDoUser>) => {
      const index = state.data.findIndex((x) => x.id === action.payload.id)
      if (state.data[index]) {
        state.data.splice(index, 1, action.payload)
      }
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      const index = state.data.findIndex((x) => x.id === action.payload)
      if (state.data[index]) {
        state.data.splice(index, 1)
      }
    },
  },
})

export const { initTodos, addTodo, editTodo, deleteTodo } = todosSlice.actions

export default todosSlice.reducer
