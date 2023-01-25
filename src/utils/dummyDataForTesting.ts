import { ToDoApi, ToDoUser, UserState } from './types'

export const authUser: UserState = {
  isLoggedIn: true,
  user: {
    email: 'todorovangel14@gmail.com',
    id: '9137520f-9e8a-4169-b309-945028a6110d',
    name: 'Angel',
    password: 'ssssssss',
  },
}

export const guestUser: UserState = {
  isLoggedIn: false,
  user: null,
}

export const todoApi: ToDoApi = {
  id: 1,
  title: 'Title 1',
  completed: true,
  userId: 5,
}

export const todoUser: ToDoUser = {
  id: '424324',
  title: 'Task 543',
  status: 'In progress',
  userId: '93438434',
}
