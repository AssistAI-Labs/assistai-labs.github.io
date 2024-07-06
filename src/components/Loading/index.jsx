import React from 'react'
import loadingVideo from '../../assets/LoadingVideo.mp4'
import './style.css'

const Loading = () => {
  return (
    <div className='loading-container'>
        <video autoPlay
            loop
            muted
            disablePictureInPicture
            preload="auto"
             >
              <source src={loadingVideo} type="video/mp4" />
            </video>
    </div>
  )
}

export default Loading