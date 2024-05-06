// Write your code here
import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onClickThemeChanger = () => {
        toggleTheme()
      }

      return (
        <>
          {!isDarkTheme ? (
            <div className="dark-navbar">
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                  alt="website logo"
                  className="logo"
                />
              </div>
              <ul className="navbar-item-container">
                <li className="list-item-light">
                  <Link to="/">Home</Link>
                </li>
                <li className="list-item-light">
                  <Link to="/about">About</Link>
                </li>
              </ul>
              <div className="theme-Button-Container">
                <button
                  data-testid="theme"
                  type="button"
                  onClick={onClickThemeChanger}
                  className="button"
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                    alt="theme"
                    className="theme-image"
                  />
                </button>
              </div>
            </div>
          ) : (
            <div className="light-navbar">
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                  alt="website logo"
                  className="logo"
                />
              </div>
              <ul className="navbar-item-container">
                <li className="list-item-dark">
                  <Link to="/">Home</Link>
                </li>
                <li className="list-item-dark">
                  <Link to="/about">About</Link>
                </li>
              </ul>
              <div className="theme-Button-Container">
                <button
                  data-testid="theme"
                  type="button"
                  onClick={onClickThemeChanger}
                  className="button"
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                    alt="theme"
                    className="theme-image"
                  />
                </button>
              </div>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
