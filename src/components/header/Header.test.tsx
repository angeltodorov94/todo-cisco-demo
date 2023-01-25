import Header from './Header'
import { renderWithProviders } from '../../utils/test-utils'
import { authUser, guestUser } from '../../utils/dummyDataForTesting'

describe('Test the Header component', () => {
  test('Test with auth user', () => {
    const { getByTestId, getByAltText } = renderWithProviders(<Header />, {
      preloadedState: { users: authUser },
    })

    const container = getByTestId('header-container')
    const img = getByAltText('jira-logo')

    expect(container).toBeVisible()
    expect(container.childElementCount).toEqual(2)
    expect(img).toBeVisible()
  })

  test('Test with guest user', () => {
    const { getByTestId, getByAltText } = renderWithProviders(<Header />, {
      preloadedState: { users: guestUser },
    })

    const container = getByTestId('header-container')
    const img = getByAltText('jira-logo')

    expect(container).toBeVisible()
    expect(container.childElementCount).toEqual(1)
    expect(img).toBeVisible()
  })
})
