import Logo from '../../assets/jira_logo.png'
import { RootState } from '../../app/store'
import { useSelector } from 'react-redux'
import HeaderUser from '../header-user/HeaderUser'
import s from './Header.scss'

const Header = () => {
  const { isLoggedIn } = useSelector((state: RootState) => state.users)

  return (
    <div className={s.container}>
      <img src={Logo} alt="jira-logo" />
      {isLoggedIn && <HeaderUser />}
    </div>
  )
}

export default Header
