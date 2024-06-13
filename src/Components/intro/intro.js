import React from 'react'
import './intro.css';

function intro() {
  return (
    <div className='intro'>
      <div className='i-left'>
        <div className='i-name'>
         <span className='a'>Explore Your Travel</span><br/>
         <span className='b'>Trusted Travel<br/> Agency</span>
         <p>I travel not to go anywhere.I travel for travel's great sake the<br/>great affair is to move.</p>
        </div>
        <button className='button-i-button'>Discover More</button>
        <div className='intro-icons'>
          <i class="fa-brands fa-linkedin"/>
          <i class="fa-brands fa-square-facebook"/>
          <i class="fa-brands fa-square-instagram"/>
        </div>
      </div>
      <div className='i-right'>
        <img className='img1' src='/images/v1.png' alt=''/>
        <img className='img2' src='./images/girl.png' alt=''/>
        <img className='img3' src='./images/heart.png' alt=''/>
        <img className='img4' src='./images/ok.png' alt=''/>
        <img className='img5' src='./images/smile.png' alt=''/>
      </div>
      {/*blur effects*/}
      <div className='blur' style={{backgroundColor: 'rgb(238 210 255)' }}></div>
      <div className='blur' style={{backgroundColor: '#c1f5ff',top:'70%' ,width:'21rem', height:'11rem',left:'40% '}}></div>
    </div>
  )
}

export default intro
