import { Navigate } from 'react-router-dom'

interface Props {
  isLoggedIn: boolean
  children: JSX.Element
}

export const AuthGuard = ({ isLoggedIn, children }: Props) => {
  if (!isLoggedIn) {
    return <Navigate to="/sign-in" replace />
  }

  return children
}

export const PublicGuard = ({ isLoggedIn, children }: Props) => {
  if (isLoggedIn) {
    return <Navigate to="/" replace />
  }

  return children
}
