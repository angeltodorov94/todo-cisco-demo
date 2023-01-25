import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootState } from '../../app/store'
import { logoutHandler } from '../../utils/helperFunctions'
import { routes } from '../../utils/routes'
import s from './HeaderUser.scss'

const HeaderUser = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false)
  const { user } = useSelector((state: RootState) => state.users)
  const navigate = useNavigate()

  return (
    <div
      data-testid="header-user-container"
      className={s.container}
      onMouseEnter={() => setIsDropdownVisible(true)}
      onMouseLeave={() => setIsDropdownVisible(false)}
    >
      <p data-testid="header-user-name">{user?.name}</p>
      {isDropdownVisible && (
        <div data-testid="header-user-dropdown" className={s.dropdown}>
          <button onClick={() => navigate(routes.home)}>Board</button>
          <button onClick={() => logoutHandler()}>Logout</button>
        </div>
      )}
    </div>
  )
}

export default HeaderUser
