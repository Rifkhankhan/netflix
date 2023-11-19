import React from 'react'
import './VideoComponent.css'
import image1 from '../../Images/crousel1.jpg'
import image2 from '../../Images/crousel2.jpg'
import image3 from '../../Images/crousel3.jpg'
import image4 from '../../Images/crousel4.jpg'
import image5 from '../../Images/crousel5.jpg'
import dc from '../../Images/dc.jpg'
import jacksparrow from '../../Images/jack-sparrow.jpg'
import transformers from '../../Images/transformers.jpg'
import moneyHeist from '../../Images/money-heist.jpg'



import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function VideoComponent() {

  return <div className='netflix-video-card-container'>
          <div class="video-card">
            <img src={image1} class="video-card-image" alt="" />
            <video src="D:\HotstarClone\disney.mp4" mute loop class="card-video"></video>
        </div>

        <div class="video-card">
            <img src={dc} class="video-card-image" alt="" />
            {/* <video src="D:\HotstarClone\disney.mp4" mute loop class="card-video"></video> */}
        </div>

        <div class="video-card">
            <img src={jacksparrow} class="video-card-image" alt="" />
            {/* <video src="D:\HotstarClone\disney.mp4" mute loop class="card-video"></video> */}
        </div>

        <div class="video-card">
            <img src={transformers} class="video-card-image" alt="" />
            {/* <video src="D:\HotstarClone\disney.mp4" mute loop class="card-video"></video> */}
        </div>

        <div class="video-card">
            <img src={moneyHeist} class="video-card-image" alt="" />
            {/* <video src="D:\HotstarClone\disney.mp4" mute loop class="card-video"></video> */}
        </div>
  </div>;
  
}

export default VideoComponent
