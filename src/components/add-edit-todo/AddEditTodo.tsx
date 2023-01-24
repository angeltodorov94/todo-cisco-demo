import { useFormik } from 'formik'
import { store } from '../../app/store'
import { editTodo } from '../../features/todos/todosSlice'
import {
  addTodoHandler,
  updateLocalStorageToDos,
} from '../../utils/helperFunctions'
import { Status, statuses, ToDoUser } from '../../utils/types'
import { addEditSchema } from '../../utils/validationSchemas'
import Button from '../buttons/Button'
import ModalContainer from '../modalContainer/ModalContainer'
import './AddEditTodo.scss'

interface Props {
  todo?: ToDoUser
  close: () => void
}

const AddEditTodo = ({ todo, close }: Props) => {
  const formik = useFormik({
    initialValues: {
      title: todo ? todo.title : '',
      status: todo ? todo.status : '',
    },
    validationSchema: addEditSchema,
    onSubmit({ title, status }) {
      if (todo) {
        const castStatus: Status = status as Status
        const updatedTodo: ToDoUser = { ...todo, title, status: castStatus }
        store.dispatch(editTodo(updatedTodo))
        updateLocalStorageToDos('edit', updatedTodo)
      } else {
        addTodoHandler(title, status)
      }
      close()
    },
  })

  const renderOptions = () =>
    statuses.map((x) => (
      <option key={x} value={x}>
        {x}
      </option>
    ))

  return (
    <ModalContainer>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title..."
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <p className="inputError">
            {formik.touched.title && formik.errors.title
              ? formik.errors.title
              : ' '}
          </p>
        </div>
        <div>
          <label htmlFor="status">Status:</label>
          <select
            name="status"
            id="status"
            value={formik.values.status}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value=""></option>
            {renderOptions()}
          </select>
          <p className="inputError">
            {formik.touched.status && formik.errors.status
              ? formik.errors.status
              : ' '}
          </p>
        </div>
        <Button onClick={close} type="dismiss" text="Close" />
        <Button
          isSubmit
          type="primary"
          text={todo ? 'Save changes' : 'Create Task'}
        />
      </form>
    </ModalContainer>
  )
}

export default AddEditTodo
