
import './Toggle.css'
import React, { useContext } from 'react'
import Sun from '../../assets/home/icons/sun.png'
import Moon from '../../assets/home/icons/moon.png'
import { ThemeContext } from '../Context'

const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className="t">
      <img src={Sun} alt="" className="t-icon" />
      <img src={Moon} alt="" className="t-icon" />
      <div  className="t-button"
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 0 : 25 }}
      ></div>
    </div>
  )
}


export default Toggle