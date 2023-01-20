import './ModalContainer.scss'

interface Props {
  children: JSX.Element
}

const ModalContainer = ({ children }: Props) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">{children}</div>
    </div>
  )
}

export default ModalContainer
