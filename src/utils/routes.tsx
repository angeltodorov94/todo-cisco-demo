import HomePage from '../routes/home-page/HomePage'
import SignInPage from '../routes/SignInPage'
import { Route } from './types'

export const guestRoutes: Route[] = [
  {
    path: '/sign-in',
    component: <SignInPage />,
  },
  {
    path: '/sign-up',
    component: <SignInPage />,
  },
]

export const authRoutes: Route[] = [
  {
    path: '/',
    component: <HomePage />,
  },
]
