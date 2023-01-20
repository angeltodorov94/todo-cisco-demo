import './Button.scss'

interface Props {
  color: string
  text: string
  isSubmit?: true
  onClick?: () => void
}

const Button = ({ text, color, isSubmit, onClick }: Props) => {
  return (
    <button
      className="btn"
      style={{
        backgroundColor: color,
        color: color === 'transparent' ? 'black' : 'white',
      }}
      onClick={onClick}
      type={isSubmit ? 'submit' : 'button'}
    >
      {text}
    </button>
  )
}

export default Button
