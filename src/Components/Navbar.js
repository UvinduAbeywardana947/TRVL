import React from 'react'
import './Navbar.css';
import Toggle from './Toggle/Toggle';

function Navbar() {
  return (
    <div className='n-wrapper'>
      <div className='n-left'>
        <div className='n-name'>TRVL<i class="fa-solid fa-earth-americas"/></div>
        <Toggle/>
      </div>
      <div className='n-right'>
        <div className='n-list'>
          <ul style={{ listStyleType: 'none' }}>
            <li>Home</li>
            <li>Destinations</li>
            <li>AboutUs</li>
            <li>Testinomials</li>
            <li>ContactUs</li>
            <button className='n-button'>
            Sign Up
            </button>
          </ul>
        </div>
      </div>   
    </div>
  )
}

export default Navbar
