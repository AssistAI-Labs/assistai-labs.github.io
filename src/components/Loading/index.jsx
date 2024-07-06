import React, { useEffect, useRef } from 'react'
import loadingVideo from '../../assets/LoadingVideo.mp4'
import './style.css'

const Loading = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2;
    }
  }, []);
  return (
    <div className='loading-container'>
        <video autoPlay
            loop
            muted
            disablePictureInPicture
            preload="auto"
            ref={videoRef}
            >
              <source src={loadingVideo} type="video/mp4" />
            </video>
    </div>
  )
}

export default Loading