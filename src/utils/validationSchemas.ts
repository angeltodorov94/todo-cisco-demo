import * as Yup from 'yup'

export const signUpSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required!'),
  name: Yup.string().required('Required!'),
  password: Yup.string()
    .length(8, 'Password must be 8 characters!')
    .matches(/[A-Za-z]{8}/, 'Password can only contain a-z, A-Z')
    .required('Required!'),
})

export const signInSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required!'),
  password: Yup.string().required('Required!'),
})
