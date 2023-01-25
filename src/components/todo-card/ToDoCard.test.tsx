import ToDoCard from './ToDoCard'
import { renderWithProviders } from '../../utils/test-utils'
import { todoApi, todoUser } from '../../utils/dummyDataForTesting'

describe('Test the ToDoCard component', () => {
  test('Test with api todo', () => {
    const { getByTestId } = renderWithProviders(<ToDoCard todo={todoApi} />)

    const container = getByTestId('todo-card-container')
    const title = getByTestId('todo-card-title')

    expect(container).toBeVisible()
    expect(container.childElementCount).toEqual(1)
    expect(title).toHaveTextContent(todoApi.title)
  })

  test('Test with user todo', () => {
    const { getByTestId, getByAltText } = renderWithProviders(
      <ToDoCard todo={todoUser} />
    )

    const container = getByTestId('todo-card-container')
    const title = getByTestId('todo-card-title')
    const btnContainer = getByTestId('todo-card-btns')

    expect(container).toBeVisible()
    expect(container.childElementCount).toEqual(2)
    expect(title).toHaveTextContent(todoUser.title)
    expect(btnContainer.childElementCount).toEqual(2)
    expect(getByAltText('edit-icon')).toBeVisible()
    expect(getByAltText('delete-icon')).toBeVisible()
  })
})
