import s from './IconButton.scss'

interface Props {
  onClick: () => void
  children: JSX.Element
}

const IconButton = ({ onClick, children }: Props) => {
  return (
    <button data-testid="icon-btn" className={s.btn} onClick={onClick}>
      {children}
    </button>
  )
}

export default IconButton
