import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './routes/HomePage'
import SignInPage from './routes/SignInPage'
import SignUpPage from './routes/SignUpPage'

const guestRouter = createBrowserRouter([
  {
    path: '/',
    element: <SignInPage />,
  },
  {
    path: '/sign-up',
    element: <SignUpPage />,
  },
])

const authRouter = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
])

const App = () => {
  const [auth, setAuth] = useState(false)

  return (
    <>
      <button onClick={() => setAuth(!auth)}>Switch</button>
      <RouterProvider router={auth ? authRouter : guestRouter} />
    </>
  )
}

export default App
