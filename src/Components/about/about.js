import React from 'react'
import './about.css';
import { themeContext } from '../../context';
import { useContext } from 'react';

function About() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='about'>
      <span className='a1'>About Us</span>
      <div className='about-details'>
        <div className='about1'>
          <i class="fa-solid fa-train"/>
          <h4
          style ={{color:darkMode? 'rgb(255 183 0)' : ''}}
          >Comfortable Journey</h4>
          <p>A comfortable journey can take many forms, but it always has one thing in common.</p>
        </div>
        <div className='about1'>
          <i class="fa-solid fa-hotel"></i>
          <h4
          style ={{color:darkMode? 'rgb(255 183 0)' : ''}}
          >Luxurious Hotels</h4>
          <p>Luxurious hotels are havens for those seeking indulgence and unforgettable experiences.</p> 
        </div>
        <div className='about1'>
          <i class="fa-solid fa-route"></i>
          <h4
          style ={{color:darkMode? 'rgb(255 183 0)' : ''}}
          >Travel Guide</h4>
          <p>A travel guide is your trusty companion on any adventure, offering.</p> 
        </div>  
      </div>
    </div>
  )
}

export default About
