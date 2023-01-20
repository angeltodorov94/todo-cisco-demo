export interface ToDoApi {
  id: number
  title: string
  completed: boolean
  userId: number
}

export interface ToDoUser {
  id: string
  title: string
  status: Status
  userId: string
}

export type Status = 'To Do' | 'In progress' | 'QA' | 'Done'

export const statuses: Status[] = ['To Do', 'In progress', 'QA', 'Done']

export enum Statuses {
  'To Do',
  'In progress',
  'QA',
  'Done',
}

export interface User {
  email: string
  name: string
  password: string
  id: string
}

export interface UserState {
  user: User | null
  isLoggedIn: boolean
}

export interface ToDoUserState {
  data: ToDoUser[]
}

export interface UsersState {
  data: User[]
}

export interface Route {
  path: string
  component: JSX.Element
}
