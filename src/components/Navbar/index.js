// Write your code here
import './index.css'
import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onToggleTheme = () => {
        toggleTheme()
      }

      const themeImageURL = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const navbarBgClassName = isDarkTheme
        ? 'navbar-bg-dark'
        : 'navbar-bg-light'

      const websiteLogoImageURL = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const navItemClassName = isDarkTheme
        ? 'list-text-dark-theme'
        : 'list-text-light-theme'

      return (
        <nav className={`navbar ${navbarBgClassName}`}>
          <div className="navbar-content">
            <Link to="/">
              <img
                src={websiteLogoImageURL}
                alt="website logoUI"
                className="website-logo"
              />
            </Link>
            <ul className="nav-menu">
              <li className="nav-menu-item">
                <Link to="/" className={`nav-link ${navItemClassName}`}>
                  Home
                </Link>
              </li>
              <li className="nav-menu-item">
                <Link to="/about" className={`nav-link ${navItemClassName}`}>
                  About
                </Link>
              </li>
            </ul>
            <button
              type="button"
              className="theme-button"
              onClick={onToggleTheme}
              data-testid="theme"
            >
              <img src={themeImageURL} alt="theme" className="theme-image" />
            </button>
          </div>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)
export default Navbar
