import { fireEvent, render, screen } from '@testing-library/react'
import Button, { Types } from './Button'

const text = 'Click Me!'
const classes: Types[] = ['primary', 'secondary', 'dismiss', 'transparent']

describe('Test the Button component', () => {
  test('Testing displaying text and onCLick event', () => {
    const fn = jest.fn()
    render(<Button text={text} type={classes[0]} onClick={fn} />)

    const btn = screen.getByTestId('btn')

    expect(btn).toBeTruthy()
    expect(btn.innerHTML).toBe(text)

    fireEvent.click(btn)

    expect(fn.mock.calls.length).toEqual(1)
  })

  classes.forEach((x) => {
    test(`Testing ${x} type button`, () => {
      render(<Button text={text} type={x} />)

      const btn = screen.getByTestId('btn')

      expect(btn.className).toBe(`btn ${x}`)
    })
  })
})
