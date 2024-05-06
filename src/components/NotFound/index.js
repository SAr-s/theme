// Write your code here
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          {isDarkTheme ? (
            <div className="not-found1">
              <img
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                alt="not found"
                className="not-image"
              />
              <h1 className="color1">Lost your way</h1>
              <p className="color1">
                We can not find a way to seeming you home
              </p>
            </div>
          ) : (
            <div className="not-found">
              <img
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                alt="not found"
                className="not-image"
              />
              <h1 className="color1">Lost Your Way</h1>
              <p className="color1">We cannot seem to find the page</p>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
