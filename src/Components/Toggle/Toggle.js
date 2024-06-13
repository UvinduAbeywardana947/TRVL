import React from 'react'
import './Toggle.css';
import { themeContext } from '../../context';
import { useContext } from 'react';

const Toggle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const handleClick = ( ) =>{
    theme.dispatch({type:'toggle'})
  }
  
  return (
    <div className='toggle'>
      <img src='./images/moon.svg' alt='Moon'/>
      <img src='./images/sun.svg' alt='Sun'/>
      <div className='t-button'
      style ={ darkMode? {left:'2px'} : {right:'2px'} }
      onClick={handleClick}
      >
      </div>
    </div>
  )
}

export default Toggle
