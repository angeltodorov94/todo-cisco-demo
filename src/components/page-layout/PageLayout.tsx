import Header from '../header/Header'

interface Props {
  children: JSX.Element
}

const PageLayout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default PageLayout
