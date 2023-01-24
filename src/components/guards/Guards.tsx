import { Navigate } from 'react-router-dom'
import { routes } from '../../utils/routes'

interface Props {
  isLoggedIn: boolean
  children: JSX.Element
}

export const AuthGuard = ({ isLoggedIn, children }: Props) => {
  if (!isLoggedIn) {
    return <Navigate to={routes.signIn} replace />
  }

  return children
}

export const PublicGuard = ({ isLoggedIn, children }: Props) => {
  if (isLoggedIn) {
    return <Navigate to={routes.home} replace />
  }

  return children
}
