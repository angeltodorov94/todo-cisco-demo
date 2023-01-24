import Button from '../buttons/Button'
import ModalContainer from '../modalContainer/ModalContainer'

interface Props {
  confirm: () => void
  close: () => void
}

const DeleteTodo = ({ confirm, close }: Props) => {
  return (
    <ModalContainer>
      <div data-testid="delete-todo">
        <h3>Delete Task</h3>
        <p>Are you sure you want to delete this task?</p>
        <Button text="Delete" type="secondary" onClick={confirm} />
        <Button text="Cancel" type="transparent" onClick={close} />
      </div>
    </ModalContainer>
  )
}

export default DeleteTodo
