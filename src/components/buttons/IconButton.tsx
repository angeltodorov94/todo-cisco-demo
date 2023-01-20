import './IconButton.scss'

interface Props {
  onClick: () => void
  children: JSX.Element
}

const IconButton = ({ onClick, children }: Props) => {
  return (
    <button className="iconBtn" onClick={onClick}>
      {children}
    </button>
  )
}

export default IconButton
