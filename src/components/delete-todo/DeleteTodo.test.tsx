import { render, screen } from '@testing-library/react'
import DeleteTodo from './DeleteTodo'

describe('Test the DeleteTodo component', () => {
  test('Testing displaying text and elements', () => {
    render(<DeleteTodo close={jest.fn()} confirm={jest.fn()} />)

    const component = screen.getByTestId('delete-todo')
    const title = screen.getByText('Delete Task')
    const desc = screen.getByText('Are you sure you want to delete this task?')

    expect(component).toBeTruthy()
    expect(title).toBeTruthy()
    expect(desc).toBeTruthy()
    expect(component.childElementCount).toEqual(4)
  })
})
