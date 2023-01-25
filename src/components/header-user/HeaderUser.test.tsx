import HeaderUser from './HeaderUser'
import { fireEvent, renderWithProviders } from '../../utils/test-utils'
import { authUser } from '../../utils/dummyDataForTesting'

describe('Test the HeaderUser component', () => {
  test('Test the HeaderUser component', () => {
    const { getByTestId, queryByTestId, getByText } = renderWithProviders(
      <HeaderUser />,
      {
        preloadedState: { users: authUser },
      }
    )

    const container = getByTestId('header-user-container')
    const name = getByTestId('header-user-name')

    expect(container).toBeVisible()
    expect(name.innerHTML).toBe(authUser.user?.name)
    expect(queryByTestId('header-user-dropdown')).not.toBeTruthy()

    fireEvent.mouseEnter(container)

    const dropdown = getByTestId('header-user-dropdown')

    expect(dropdown).toBeVisible()
    expect(dropdown.childElementCount).toEqual(2)
    expect(getByText('Board')).toBeVisible()
    expect(getByText('Logout')).toBeVisible()
  })
})
