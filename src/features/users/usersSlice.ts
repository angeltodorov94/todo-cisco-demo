import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { User, UserState } from '../../utils/types'

const initialState: UserState = {
  user: null,
  isLoggedIn: false,
}

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null
      state.isLoggedIn = false
    },
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload
      state.isLoggedIn = true
    },
  },
})

export const { logout, login } = userSlice.actions

export default userSlice.reducer
