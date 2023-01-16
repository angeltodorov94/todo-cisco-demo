import { useFormik } from 'formik'
import { signUpSchema } from '../utils/validationSchemas'

const SignUpPage = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      password: '',
    },
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      console.log(values)
    },
  })

  return (
    <div>
      <h1>Sign Up Page</h1>
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
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            name="name"
            type="string"
            placeholder="Enter a name..."
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <p>
            {formik.touched.name && formik.errors.name
              ? formik.errors.name
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
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default SignUpPage
