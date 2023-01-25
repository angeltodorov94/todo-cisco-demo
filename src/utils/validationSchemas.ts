import * as Yup from 'yup'

const required = 'Required!'

export const signUpSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required(required),
  name: Yup.string().required(required),
  password: Yup.string()
    .length(8, 'Password must be 8 characters!')
    .matches(/[A-Za-z]{8}/, 'Password can only contain a-z, A-Z')
    .required(required),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required(required),
})

export const signInSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required(required),
  password: Yup.string().required(required),
})

export const addEditSchema = Yup.object({
  title: Yup.string().required(required),
  status: Yup.string().required(required),
})
