import { useFormik } from 'formik'
import { Link } from 'react-router-dom'
import { signInSchema } from '../utils/validationSchemas'

const SignInPage = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: signInSchema,
    onSubmit: (values) => {
      console.log(values)
    },
  })

  return (
    <>
      <h1>Sign In</h1>
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
          <p>
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
          <p>
            {formik.touched.password && formik.errors.password
              ? formik.errors.password
              : ''}
          </p>
        </div>
        <button type="submit">Sign In</button>
      </form>
      <p>or</p>
      <Link to="sign-up">Create an account</Link>
    </>
  )
}

export default SignInPage
