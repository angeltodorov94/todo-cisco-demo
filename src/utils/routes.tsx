import HomePage from '../routes/home-page/HomePage'
import SignInPage from '../routes/SignInPage'
import SignUpPage from '../routes/SignUpPage'
import { Route } from './types'

export const routes = {
  signIn: '/sign-in',
  signUp: '/sign-up',
  home: '/',
}

export const guestRoutes: Route[] = [
  {
    path: routes.signIn,
    component: <SignInPage />,
  },
  {
    path: routes.signUp,
    component: <SignUpPage />,
  },
]

export const authRoutes: Route[] = [
  {
    path: routes.home,
    component: <HomePage />,
  },
]
