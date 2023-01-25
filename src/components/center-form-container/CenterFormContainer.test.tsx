import { render } from '@testing-library/react'
import CenterFormContainer from './CenterFormContainer'

describe('Test the CenterFormContainer component', () => {
  test('Testing rendering component and children', () => {
    const { getByTestId } = render(
      <CenterFormContainer>
        <div />
      </CenterFormContainer>
    )

    const container = getByTestId('centerFormContainer')
    const innerContainer = getByTestId('innerCenterFormContainer')

    expect(container).toBeVisible()
    expect(container).toHaveClass('container')
    expect(innerContainer).toBeVisible()
    expect(innerContainer).toHaveClass('inner')
    expect(innerContainer.childElementCount).toEqual(1)
  })
})
