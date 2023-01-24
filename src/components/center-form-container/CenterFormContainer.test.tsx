import { render, screen } from '@testing-library/react'
import CenterFormContainer from './CenterFormContainer'

describe('Test the CenterFormContainer component', () => {
  test('Testing rendering component and children', () => {
    render(
      <CenterFormContainer>
        <div />
      </CenterFormContainer>
    )

    const container = screen.getByTestId('centerFormContainer')
    const innerContainer = screen.getByTestId('innerCenterFormContainer')

    expect(container).toBeTruthy()
    expect(container.className).toEqual('container')
    expect(innerContainer).toBeTruthy()
    expect(innerContainer.className).toEqual('inner')
    expect(innerContainer.childElementCount).toEqual(1)
  })
})
