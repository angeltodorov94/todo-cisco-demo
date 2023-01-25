import { render } from '@testing-library/react'
import ModalContainer from './ModalContainer'

describe('Test the ModalContainer component', () => {
  test('Testing rendering of the component and the children', () => {
    const { getByTestId } = render(
      <ModalContainer>
        <div />
      </ModalContainer>
    )

    const modalWrapper = getByTestId('modal-background')

    expect(modalWrapper).toBeVisible()
    expect(modalWrapper.className).toEqual('modalBackground')

    expect(modalWrapper.childElementCount).toEqual(1)
    expect(modalWrapper.firstElementChild?.className).toBe('modalContainer')
    expect(modalWrapper.firstElementChild?.childElementCount).toEqual(1)
  })
})
