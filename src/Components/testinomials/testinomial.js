import React from 'react'
import './testinomial.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { themeContext } from '../../context';
import { useContext } from 'react';

const Testinomial = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='testinomial'>
      <span className='t1'>Testinomials</span>
      <Swiper
       slidesPerView={1}
       grabCursor={true}
       centeredSlides={true}
       className='testinomial-slider'
       modules={[Navigation, Pagination, Scrollbar, A11y]}
       navigation
       onSlideChange={() => console.log('slide change')}
       onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className='slide'>
          <img src='./images/jeff zeid.avif' alt=''/>
          <div className='t-details'>
            <p>Gorgeous view on the mountains!!</p>
            <h3
            style ={{color:darkMode? 'rgb(255 183 0)' : ''}}
            >Jeff Zeid</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <img src='./images/sasha rugurella.jpg' alt=''/>
          <div className='t-details'>
            <p>comfortable beds, very friendly staff, clean the placement of the lockers is not ideal,when I was travelling there weren't any other people </p>
            <h3
            style ={{color:darkMode? 'rgb(255 183 0)' : ''}}
            >Sasha Rugurella</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <img src='./images/anegla sarah.avif' alt=''/>
          <div className='t-details'>
            <p>very friendly family, great breakfast and dinner options (affordable), beautiful view, comfortable bed</p>
            <h3
            style ={{color:darkMode? 'rgb(255 183 0)' : ''}}
            >Anegla Sarah</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <img src='./images/david leid.avif' alt=''/>
          <div className='t-details'>
            <p>Definitely this place has good location. Also having downstairs a restaurant is a plus. Food was quite tasty.</p>
            <h3
            style ={{color:darkMode? 'rgb(255 183 0)' : ''}}
            >David Leid</h3>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Testinomial
