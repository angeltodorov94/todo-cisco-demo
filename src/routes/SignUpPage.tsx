import { useFormik } from 'formik'
import Button from '../components/buttons/Button'
import CenterFormContainer from '../components/center-form-container/CenterFormContainer'
import { addUserHandler, isEmailTaken } from '../utils/helperFunctions'
import { signUpSchema } from '../utils/validationSchemas'

const SignUpPage = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: signUpSchema,
    onSubmit: ({ email, password, name }) => {
      const emailCheck = isEmailTaken(email)

      if (emailCheck) {
        formik.setErrors({ email: 'Email is already taken' })
        return
      }

      addUserHandler(email, password, name)
    },
  })

  return (
    <CenterFormContainer>
      <>
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
            <p className="inputError">
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
            <p className="inputError">
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
            <p className="inputError">
              {formik.touched.password && formik.errors.password
                ? formik.errors.password
                : ''}
            </p>
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Repeat password..."
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <p>
              {formik.touched.confirmPassword && formik.errors.confirmPassword
                ? formik.errors.confirmPassword
                : ''}
            </p>
          </div>
          <Button text="Register" color="dodgerblue" isSubmit />
        </form>
      </>
    </CenterFormContainer>
  )
}

export default SignUpPage
