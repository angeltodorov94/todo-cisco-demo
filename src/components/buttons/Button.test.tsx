import { fireEvent, render } from '@testing-library/react'
import Button from './Button'
import { classes } from '../../utils/types'

const text = 'Click Me!'

describe('Test the Button component', () => {
  test('Testing displaying text and onCLick event', () => {
    const fn = jest.fn()
    const { getByTestId } = render(
      <Button text={text} type={classes[0]} onClick={fn} />
    )

    const btn = getByTestId('btn')

    expect(btn).toBeVisible()
    expect(btn.innerHTML).toBe(text)
    expect(btn).toHaveAttribute('type', 'button')

    fireEvent.click(btn)

    expect(fn.mock.calls.length).toEqual(1)
  })

  test('Testing isSubmit', () => {
    const fn = jest.fn()
    const { getByTestId } = render(
      <Button text={text} type={classes[0]} onClick={fn} isSubmit />
    )

    const btn = getByTestId('btn')

    expect(btn).toHaveAttribute('type', 'submit')
  })

  classes.forEach((x) => {
    test(`Testing ${x} type button`, () => {
      const { getByTestId } = render(<Button text={text} type={x} />)

      const btn = getByTestId('btn')

      expect(btn.className).toBe(`btn ${x}`)
    })
  })
})
