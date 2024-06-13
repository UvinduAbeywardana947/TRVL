import React from 'react'
import './video.css';
import ReactPlayer from 'react-player';

const video = () => {
  return (
    <div className='video'>
        <span className='v1'>Enjoy The Video</span>
        <span className='v2'>12 Europe Countries in 24 days</span>
        <div className='yt-video'>
         <ReactPlayer 
         url="https://www.youtube.com/watch?v=he-aCCA2ONI" 
         controls={true}
         width={1920} height={540}/>
        </div>
    </div>
  )
}

export default video
