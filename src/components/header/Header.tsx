import Logo from '../../assets/jira_logo.png'
import './Header.scss'
import { RootState } from '../../app/store'
import { useSelector } from 'react-redux'
import HeaderUser from '../header-user/HeaderUser'

const Header = () => {
  const { isLoggedIn } = useSelector((state: RootState) => state.users)

  return (
    <div className="header-container">
      <img src={Logo} alt="jira-logo" />
      {isLoggedIn && <HeaderUser />}
    </div>
  )
}

export default Header
