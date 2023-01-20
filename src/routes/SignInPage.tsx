import { useFormik } from 'formik'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/buttons/Button'
import CenterFormContainer from '../components/center-form-container/CenterFormContainer'
import { signInHandler } from '../utils/helperFunctions'
import { signInSchema } from '../utils/validationSchemas'

const SignInPage = () => {
  const [error, setError] = useState<string | null>(null)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: signInSchema,
    onSubmit: (values) => {
      setError(null)

      try {
        signInHandler(values.email, values.password)
      } catch (e: any) {
        setError(e.message)
      }
    },
  })

  return (
    <CenterFormContainer>
      <>
        <h1>Sign In</h1>
        {error && <p>{error}</p>}
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter an email..."
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <p className="inputError">
              {formik.touched.email && formik.errors.email
                ? formik.errors.email
                : ''}
            </p>
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter a password..."
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <p className="inputError">
              {formik.touched.password && formik.errors.password
                ? formik.errors.password
                : ''}
            </p>
          </div>
          <Button text="Sign In" color="dodgerblue" isSubmit />
        </form>
        <p>or</p>
        <Link to="/sign-up">Create an account</Link>
      </>
    </CenterFormContainer>
  )
}

export default SignInPage
