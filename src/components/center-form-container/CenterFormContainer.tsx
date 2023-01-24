import s from './CenterFormContainer.scss'

interface Props {
  children: JSX.Element
}

const CenterFormContainer = ({ children }: Props) => {
  return (
    <div data-testid="centerFormContainer" className={s.container}>
      <div data-testid="innerCenterFormContainer" className={s.inner}>
        {children}
      </div>
    </div>
  )
}

export default CenterFormContainer
