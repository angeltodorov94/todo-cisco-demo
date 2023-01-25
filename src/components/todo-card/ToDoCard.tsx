import IconButton from '../buttons/IconButton'
import EditIcon from '../../assets/edit.png'
import DeleteIcon from '../../assets/delete.png'
import s from './ToDoCard.scss'
import { ToDoApi, ToDoUser } from '../../utils/types'
import {
  isInstanceOfToDoUser,
  updateLocalStorageToDos,
} from '../../utils/helperFunctions'
import { deleteTodo } from '../../features/todos/todosSlice'
import AddEditTodo from '../add-edit-todo/AddEditTodo'
import { useState } from 'react'
import DeleteTodo from '../delete-todo/DeleteTodo'
import { useAppDispatch } from '../../app/hooks'

interface Props {
  todo: ToDoUser | ToDoApi
}

const ToDoCard = ({ todo }: Props) => {
  const { id, title } = todo
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const dispatch = useAppDispatch()

  const deleteHandler = () => {
    dispatch(deleteTodo(id.toString()))
    if (isInstanceOfToDoUser(todo))
      updateLocalStorageToDos('delete', todo, id.toString())
  }

  return (
    <>
      <div data-testid="todo-card-container" className={s.container}>
        <p data-testid="todo-card-title">{title}</p>
        {isInstanceOfToDoUser(todo) && (
          <div data-testid="todo-card-btns">
            <IconButton onClick={() => setIsEditModalOpen(true)}>
              <img src={EditIcon} alt="edit-icon" />
            </IconButton>
            <IconButton onClick={() => setIsDeleteModalOpen(true)}>
              <img src={DeleteIcon} alt="delete-icon" />
            </IconButton>
          </div>
        )}
      </div>
      {isEditModalOpen && isInstanceOfToDoUser(todo) && (
        <AddEditTodo todo={todo} close={() => setIsEditModalOpen(false)} />
      )}
      {isDeleteModalOpen && (
        <DeleteTodo
          confirm={deleteHandler}
          close={() => setIsDeleteModalOpen(false)}
        />
      )}
    </>
  )
}

export default ToDoCard
