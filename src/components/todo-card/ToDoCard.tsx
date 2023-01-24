import IconButton from '../buttons/IconButton'
import EditIcon from '../../assets/edit.png'
import DeleteIcon from '../../assets/delete.png'
import s from './ToDoCard.scss'
import { ToDoApi, ToDoUser } from '../../utils/types'
import {
  isInstanceOfToDoUser,
  updateLocalStorageToDos,
} from '../../utils/helperFunctions'
import { store } from '../../app/store'
import { deleteTodo } from '../../features/todos/todosSlice'
import AddEditTodo from '../add-edit-todo/AddEditTodo'
import { useState } from 'react'
import DeleteTodo from '../delete-todo/DeleteTodo'

interface Props {
  todo: ToDoUser | ToDoApi
}

const ToDoCard = ({ todo }: Props) => {
  const { id, title } = todo
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

  const deleteHandler = () => {
    store.dispatch(deleteTodo(id.toString()))
    if (isInstanceOfToDoUser(todo))
      updateLocalStorageToDos('delete', todo, id.toString())
  }

  return (
    <>
      <div className={s.container}>
        <p>{title}</p>
        {isInstanceOfToDoUser(todo) && (
          <div>
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
