import AddEditTodo from './AddEditTodo'
import { fireEvent, renderWithProviders } from '../../utils/test-utils'
import { todoUser } from '../../utils/dummyDataForTesting'
import userEvent from '@testing-library/user-event'

describe('Test the AddEditTodo component', () => {
  test('Test initial rendering for new todo', () => {
    const close = jest.fn()
    const { getByTestId, getByLabelText, getByText } = renderWithProviders(
      <AddEditTodo close={close} />
    )

    const formContainer = getByTestId('addEditToDo-container')
    const titleInput = getByLabelText(/title:/i)
    const statusSelect = getByLabelText(/status:/i)
    const closeBtn = getByText('Close')
    const createBtn = getByText('Create Task')

    expect(formContainer).toBeVisible()
    expect(formContainer.childElementCount).toEqual(4)
    expect(titleInput).toHaveValue('')
    expect(statusSelect).toHaveValue('')
    expect(statusSelect.childElementCount).toEqual(5)
    expect(closeBtn).toBeVisible()
    expect(createBtn).toBeVisible()

    fireEvent.click(closeBtn)

    expect(close).toBeCalledTimes(1)
  })

  test('Test initial rendering for new todo', () => {
    const close = jest.fn()
    const { getByLabelText, getByText } = renderWithProviders(
      <AddEditTodo close={close} todo={todoUser} />
    )

    const titleInput = getByLabelText(/title:/i)
    const statusSelect = getByLabelText(/status:/i)
    const saveBtn = getByText('Save changes')

    expect(titleInput).toHaveValue(todoUser.title)
    expect(statusSelect).toHaveValue(todoUser.status)
    expect(saveBtn).toBeVisible()
  })

  test('Test values after user input', async () => {
    const close = jest.fn()
    const { getByLabelText } = renderWithProviders(
      <AddEditTodo close={close} />
    )
    const user = userEvent.setup()

    const titleInput = getByLabelText(/title:/i)
    const statusSelect = getByLabelText(/status:/i)

    expect(titleInput).toHaveValue('')
    expect(statusSelect).toHaveValue('')

    await user.type(titleInput, 'Title 12')
    await user.selectOptions(statusSelect, 'QA')

    expect(titleInput).toHaveValue('Title 12')
    expect(statusSelect).toHaveValue('QA')
  })
})
