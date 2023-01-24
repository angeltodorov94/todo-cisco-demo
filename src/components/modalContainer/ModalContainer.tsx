import s from './ModalContainer.scss'

interface Props {
  children: JSX.Element
}

const ModalContainer = ({ children }: Props) => {
  return (
    <div data-testid="modal-background" className={s.modalBackground}>
      <div className={s.modalContainer}>{children}</div>
    </div>
  )
}

export default ModalContainer
