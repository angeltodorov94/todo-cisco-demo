import SignUpPage from './SignUpPage'
import { renderWithProviders } from '../utils/test-utils'
import userEvent from '@testing-library/user-event'

describe('Test the SignUpPage component', () => {
  test('Testing the rendering of all static components', () => {
    const { getByText, getByTestId } = renderWithProviders(<SignUpPage />)

    const container = getByTestId('signup-page-container')
    const heading = getByText('Sign Up Page')
    const register = getByText('Register')

    expect(container).toBeVisible()
    expect(heading).toBeVisible()
    expect(register).toBeVisible()
  })

  test("Testing the form's behaviour", async () => {
    const email = 'test@test.com'
    const name = 'Some Name'
    const pass = 'password'
    const confirmPass = pass

    const { getByLabelText, getAllByLabelText, getByTestId } =
      renderWithProviders(<SignUpPage />)
    const user = userEvent.setup()

    const emailInput = getByLabelText(/email:/i)
    const nameInput = getByLabelText(/name:/i)
    const passwordInput = getAllByLabelText(/Password:/i)[0]
    const confirmPasswordInput = getAllByLabelText(/Password:/i)[1]

    const emailError = getByTestId('inputEmailError')
    const nameError = getByTestId('inputNameError')
    const passwordError = getByTestId('inputPasswordError')
    const inputRePasswordError = getByTestId('inputRePasswordError')

    await user.type(emailInput, email)
    await user.type(nameInput, name)
    await user.type(passwordInput, pass)
    await user.type(confirmPasswordInput, confirmPass)

    expect(emailError).toHaveTextContent('')
    expect(nameError).toHaveTextContent('')
    expect(passwordError).toHaveTextContent('')
    expect(inputRePasswordError).toHaveTextContent('')

    await user.clear(emailInput)
    await user.clear(nameInput)
    await user.clear(passwordInput)
    await user.clear(confirmPasswordInput)
    await user.click(emailInput)

    expect(emailError).toHaveTextContent('Required!')
    expect(nameError).toHaveTextContent('Required!')
    expect(passwordError).toHaveTextContent('Required!')
    expect(inputRePasswordError).toHaveTextContent('Required!')

    await user.type(emailInput, pass)
    await user.type(passwordInput, email)
    await user.type(confirmPasswordInput, confirmPass)

    expect(emailError).toHaveTextContent('Invalid email address')
    expect(passwordError).toHaveTextContent('Password must be 8 characters!')
    expect(inputRePasswordError).toHaveTextContent('Passwords must match')

    await user.clear(passwordInput)
    await user.type(passwordInput, 'sssssss9')
    expect(passwordError).toHaveTextContent(
      'Password can only contain a-z, A-Z'
    )
  })
})
