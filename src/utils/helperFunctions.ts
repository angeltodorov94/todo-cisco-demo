import { v4 as uuidv4 } from 'uuid'
import { store } from '../app/store'
import { initTodos } from '../features/todos/todosSlice'
import { login, logout } from '../features/users/usersSlice'
import { ToDoUserState, User, UsersState } from './types'

const initialState: UsersState = {
  data: [],
}

export const addUserHandler = (
  email: string,
  password: string,
  name: string
): void => {
  const users = getAllUsers()

  const newUser: User = {
    email,
    password,
    name,
    id: uuidv4(),
  }

  users.data.push(newUser)
  localStorage.setItem('users', JSON.stringify(users))

  loginHandler(newUser)
}

export const getAllUsers = (): UsersState => {
  const localStorageData = localStorage.getItem('users')

  if (localStorageData) return JSON.parse(localStorageData) as UsersState
  else return initialState
}

export const isEmailTaken = (email: string): boolean => {
  const users = getAllUsers()
  const result = users.data.find((x) => x.email === email)

  if (result) return true
  else return false
}

export const initialCheckOnLogin = () => {
  const token = localStorage.getItem('token')

  const { data } = getAllUsers()
  const user = data.find((x) => x.id === token)

  if (user) {
    loginHandler(user)
  }
}

export const signInHandler = (email: string, password: string) => {
  const { data } = getAllUsers()

  const user = data.find((x) => x.email === email && x.password === password)

  if (user) {
    loginHandler(user)
  } else {
    throw new Error('Invalid email or password')
  }
}

export const loginHandler = (user: User) => {
  localStorage.setItem('token', user.id)
  store.dispatch(login(user))
}

export const logoutHandler = () => {
  localStorage.removeItem('token')
  store.dispatch(logout())
}

export const initialToDosSetup = () => {
  const value = localStorage.getItem('todos')

  if (value) {
    const { data } = JSON.parse(value) as ToDoUserState
    store.dispatch(initTodos(data))
  } else {
    localStorage.setItem('todos', JSON.stringify({ data: [] }))
  }
}
