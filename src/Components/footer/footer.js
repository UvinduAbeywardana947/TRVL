import React from 'react'
import './footer.css';

const footer = () => {
  return (
    <div className='footer'>
      <div className='footer-col'>
        <h3>TRVL<i class="fa-solid fa-earth-americas"/></h3>
        <div className='footer-adress'>
            <p>5th flora, 700/D kings road, green</p>
            <p>lane New York-1782</p>
            <p>+10 367 283 441</p>
            <p>contactus@gmail.com</p>
        </div>
        <div className='footer-icons'>
          <i class="fa-brands fa-linkedin"/>
          <i class="fa-brands fa-square-facebook"/>
          <i class="fa-brands fa-square-instagram"/>
        </div>
      </div>
      <div className='footer-col'>
        <h3>Company</h3>
        <ul>
          <li>Pricing</li>
          <li>About</li>
          <li>Gallery</li>
          <li>Guide</li>
        </ul>
      </div>
      <div className='footer-col'>
        <h3>Destinations</h3>
        <ul style={{ listStyleType: 'none' }}>
          <li>America</li>
          <li>England</li>
          <li>Australia</li>
          <li>Russia</li>
        </ul>
      </div>
      <div className='footer-col'>
        <h3>Instagram</h3>
        <div className='footer-photos'>
            <img src='./images/footerimg1.webp' alt=''/>
            <img src='./images/footerimg2.avif' alt=''/>
            <img src='./images/footerimg3.jpg' alt=''/>
            <img src='./images/footerimg4.avif' alt=''/>
            <img src='./images/footerimg5.jpeg' alt=''/>
            <img src='./images/footerimg6.webp' alt=''/>
        </div>
      </div>
      <div class="p">Copyright @2023 all right reserved| This template is made by Uv</div>
    </div>
  )
}

export default footer
