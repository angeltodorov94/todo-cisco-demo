import { fireEvent, render } from '@testing-library/react'
import IconButton from './IconButton'

describe('Test the IconButton component', () => {
  test('Testing rendering children component and onCLick event', () => {
    const fn = jest.fn()

    const { getByTestId } = render(
      <IconButton onClick={fn}>
        <div />
      </IconButton>
    )

    const iconContainer = getByTestId('icon-btn')

    expect(iconContainer).toBeVisible()
    expect(iconContainer.className).toBe('btn')
    expect(iconContainer.childElementCount).toEqual(1)

    fireEvent.click(iconContainer)

    expect(fn.mock.calls.length).toEqual(1)
  })
})
