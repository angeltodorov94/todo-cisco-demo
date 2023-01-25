import { render } from '@testing-library/react'
import DeleteTodo from './DeleteTodo'

describe('Test the DeleteTodo component', () => {
  test('Testing displaying text and elements', () => {
    const { getByTestId, getByText } = render(
      <DeleteTodo close={jest.fn()} confirm={jest.fn()} />
    )

    const component = getByTestId('delete-todo')
    const title = getByText('Delete Task')
    const desc = getByText('Are you sure you want to delete this task?')

    expect(component).toBeVisible()
    expect(title).toBeVisible()
    expect(desc).toBeVisible()
    expect(component.childElementCount).toEqual(4)
  })
})
