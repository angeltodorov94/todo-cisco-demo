import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import { RootState } from './app/store'
import { AuthGuard, PublicGuard } from './components/guards/Guards'
import { initialCheckOnLogin } from './utils/helperFunctions'
import { authRoutes, guestRoutes } from './utils/routes'

const App = () => {
  const { isLoggedIn } = useSelector((state: RootState) => state.users)

  useEffect(() => {
    initialCheckOnLogin()
  }, [])

  const renderAuthRoutes = () =>
    authRoutes.map(({ path, component }) => (
      <Route
        key={path}
        path={path}
        element={<AuthGuard isLoggedIn={isLoggedIn}>{component}</AuthGuard>}
      />
    ))

  const renderGuestRoutes = () =>
    guestRoutes.map(({ path, component }) => (
      <Route
        key={path}
        path={path}
        element={<PublicGuard isLoggedIn={isLoggedIn}>{component}</PublicGuard>}
      />
    ))

  return (
    <Routes>
      {renderAuthRoutes()}
      {renderGuestRoutes()}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
