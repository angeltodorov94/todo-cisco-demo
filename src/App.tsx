import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom'
import { RootState } from './app/store'
import { AuthGuard, PublicGuard } from './components/guards/Guards'
import HomePage from './routes/HomePage'
import SignInPage from './routes/SignInPage'
import SignUpPage from './routes/SignUpPage'
import { initialCheckOnLogin, initialToDosSetup } from './utils/helperFunctions'

const App = () => {
  const { isLoggedIn } = useSelector((state: RootState) => state.users)

  useEffect(() => {
    initialCheckOnLogin()
    initialToDosSetup()
  }, [])

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <AuthGuard isLoggedIn={isLoggedIn}>
              <HomePage />
            </AuthGuard>
          }
        />
        <Route
          path="/sign-in"
          element={
            <PublicGuard isLoggedIn={isLoggedIn}>
              <SignInPage />
            </PublicGuard>
          }
        />
        <Route
          path="/sign-up"
          element={
            <PublicGuard isLoggedIn={isLoggedIn}>
              <SignUpPage />
            </PublicGuard>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App
