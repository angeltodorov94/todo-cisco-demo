import PageLayout from './PageLayout'
import { renderWithProviders } from '../../utils/test-utils'

describe('Test the PageLayout component', () => {
  test('Test the PageLayout component', () => {
    const { getByTestId } = renderWithProviders(
      <PageLayout>
        <div></div>
      </PageLayout>
    )

    const container = getByTestId('page-layout')

    expect(container).toBeVisible()
    expect(container.childElementCount).toEqual(2)
  })
})
