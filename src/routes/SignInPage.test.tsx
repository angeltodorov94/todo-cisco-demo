import SignInPage from './SignInPage'
import { renderWithProviders } from '../utils/test-utils'
import userEvent from '@testing-library/user-event'

describe('Test the SignInPage component', () => {
  test('Testing the rendering of all static components', () => {
    const { getByText, getByTestId, getAllByText } = renderWithProviders(
      <SignInPage />
    )

    const container = getByTestId('singin-page-container')
    const heading = getAllByText('Sign In')
    const or = getByText('or')
    const createAnAccount = getByText('Create an account')

    expect(container).toBeVisible()
    expect(heading.length).toBe(2)
    expect(or).toBeVisible()
    expect(createAnAccount).toBeVisible()
  })

  test("Testing the form's behaviour", async () => {
    const email = 'test@test.com'
    const pass = 'pass'

    const { getByLabelText, getByTestId } = renderWithProviders(<SignInPage />)
    const user = userEvent.setup()

    const emailInput = getByLabelText(/email:/i)
    const passwordInput = getByLabelText(/password:/i)

    const emailError = getByTestId('inputEmailError')
    const passwordError = getByTestId('inputPasswordError')

    await user.type(emailInput, email)
    await user.type(passwordInput, pass)

    expect(emailError).toHaveTextContent('')
    expect(passwordError).toHaveTextContent('')

    await user.clear(emailInput)
    await user.clear(passwordInput)
    await user.click(emailInput)

    expect(emailError).toHaveTextContent('Required!')
    expect(passwordError).toHaveTextContent('Required!')
  })
})
