import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import AddEditTodo from '../../components/add-edit-todo/AddEditTodo'
import Button from '../../components/buttons/Button'
import ToDoCard from '../../components/todo-card/ToDoCard'
import { useGetPostsQuery } from '../../services/todosAPI'
import { initialToDosSetup } from '../../utils/helperFunctions'
import { Status } from '../../utils/types'
import s from './HomePage.scss'

const columns: Status[] = ['To Do', 'In progress', 'QA', 'Done']

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { data: todos } = useSelector((state: RootState) => state.todos)
  const { data, isLoading, isError } = useGetPostsQuery()

  useEffect(() => {
    initialToDosSetup()
  }, [])

  const renderApiPosts = () =>
    data?.map((x) => <ToDoCard key={x.id} todo={x} />)

  const renderUserToDos = (type: Status) =>
    todos
      .filter((x) => x.status === type)
      .map((x) => <ToDoCard key={x.id} todo={x} />)

  const renderColumns = () =>
    columns.map((title) => {
      return (
        <div className={s.column} key={title}>
          <h3>{title}</h3>
          {title === 'To Do' && renderApiPosts()}
          {renderUserToDos(title)}
          <Button
            text="Add Task"
            type="primary"
            onClick={() => setIsModalOpen(true)}
          />
        </div>
      )
    })

  if (isLoading) return <p>Loading...</p>

  if (isError) return <p>Something went wrong!!!</p>

  return (
    <>
      <div className={s.container}>{renderColumns()}</div>
      {isModalOpen && <AddEditTodo close={() => setIsModalOpen(false)} />}
    </>
  )
}

export default HomePage
