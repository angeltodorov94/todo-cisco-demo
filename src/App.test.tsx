import { cleanup, render } from '@testing-library/react'
import App from './App'

afterEach(cleanup)

it('', () => {
  const { getByTestId } = render(<App />)

  expect(getByTestId('custom-element')).toBeTruthy()
})
