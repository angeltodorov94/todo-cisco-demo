import './CenterFormContainer.scss'

interface Props {
  children: JSX.Element
}

const CenterFormContainer = ({ children }: Props) => {
  return (
    <div className="outerContainer">
      <div className="innerContainer">{children}</div>
    </div>
  )
}

export default CenterFormContainer
