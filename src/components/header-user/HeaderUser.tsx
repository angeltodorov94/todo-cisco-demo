import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootState } from '../../app/store'
import { logoutHandler } from '../../utils/helperFunctions'
import './HeaderUser.scss'

const HeaderUser = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false)
  const { user } = useSelector((state: RootState) => state.users)
  const navigate = useNavigate()

  return (
    <div
      className="header-user-dropdown"
      onMouseEnter={() => setIsDropdownVisible(true)}
      onMouseLeave={() => setIsDropdownVisible(false)}
    >
      <p className="user-btn">{user?.name}</p>
      {isDropdownVisible && (
        <div className="dropdown-menu">
          <button onClick={() => navigate('/')}>Board</button>
          <button onClick={() => logoutHandler()}>Logout</button>
        </div>
      )}
    </div>
  )
}

export default HeaderUser
