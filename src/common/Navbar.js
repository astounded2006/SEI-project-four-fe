import { Link, useHistory } from 'react-router-dom'
import { removeId, removeToken } from '../lib/auth.js' // update this to remove the id too

function Navbar({ isAuth, setIsAuth }) {
  const history = useHistory()

  const handleLogout = () => {
    setIsAuth(false)
    removeToken()
    removeId()
    history.push('/')
    // createNotification('Come back again soon!')
  }

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="d-flex flex-row bd-highlight">
          <Link to="/" className="navbar-brand">
            <img src="../assets/Keto.png" alt="" width="60" height="60" className="navbar-logo" />
          </Link>
          <Link to="/venues" className="nav-item">Venues</Link>
        </div>
        <div className="d-flex flex-row bd-highlight mb-3">
          {!isAuth && (
            <>
              <Link to="/register" className="nav-item">Register</Link>
              <Link to="/login" className="nav-item">Log in</Link>
            </>
          )}
          {isAuth && (
            <>
              <Link to="/profile" className="nav-item">
                Profile
              </Link>
              <button
                className="nav-item-logout"
                onClick={handleLogout}
              >Log Out
              </button>
            </>
          )}
        </div>
      </div>
    </nav >
  )
}

export default Navbar