import { Types } from '../../utils/types'
import s from './Button.scss'

interface Props {
  type: Types
  text: string
  isSubmit?: true
  onClick?: () => void
}

const Button = ({ text, type, isSubmit, onClick }: Props) => {
  return (
    <button
      data-testid="btn"
      className={[s.btn, s[type]].join(' ')}
      onClick={onClick}
      type={isSubmit ? 'submit' : 'button'}
    >
      {text}
    </button>
  )
}

export default Button
