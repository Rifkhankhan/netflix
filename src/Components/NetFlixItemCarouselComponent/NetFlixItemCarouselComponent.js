import React, { useState } from 'react'
import './NetFlixItemCarouselComponent.css'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import heart from '../../Images/heartRed.png'
import whiteheart from '../../Images/heartWhite.png'
import { useNavigate } from 'react-router-dom';
function NetFlixItemCarouselComponent({type,name,category,items}) {
  const navigate = useNavigate()
  const [like,setLike] = useState(false)
  const movies = items.filter(item=> item.category === category && item.type === type)



  const settings = {
    infinite: true,
    dots: true ,
    slidesToShow: movies?.length <= 5 ? movies?.length : 5,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplaySpeed: 2000,
  };

  const likeHandler = (e) => {
    e.preventDefault()
    setLike(current => !current)
  }

  const itemHandler = (id) => {
    navigate(`/netflix/${id}`)
  }

  return (movies.length > 0 && movies.length <= 3 &&  <div className='netflix-itemCarouselComponent-container three'>
  <h2 className='netflix-itemCarouselComponent-container-heading'>{name}</h2>
   <Slider {...settings}>
        {movies.map((item) => (
          <div key={item._id} className='netflix-itemCarouselComponent-sub-container' onClick={() => itemHandler(item._id)}>
           {!like && <img src={whiteheart} onClick={likeHandler} alt="" className='netflix-itemCarouselComponent-sub-container-like' />}
           {like && <img src={heart} onClick={likeHandler} alt="" className='netflix-itemCarouselComponent-sub-container-like' />}
            <img className='netflix-itemCarouselComponent-container-image' src={item.image}  alt={item.name} />
            <div className='netflix-itemCarouselComponent-container-desc'>
                <h4 class="name">{item.name}</h4>
                <h5 class="des">{item.year}</h5>
            </div>
          </div>
        ))}
      </Slider>
  </div>) || (movies.length > 0 && movies.length > 3 &&  <div className='netflix-itemCarouselComponent-container'>
  <h2 className='netflix-itemCarouselComponent-container-heading'>{name}</h2>
   <Slider {...settings}>
        {movies.map((item) => (
          <div key={item._id} className='netflix-itemCarouselComponent-sub-container' onClick={() => itemHandler(item._id)}>
           {!like && <img src={whiteheart} onClick={likeHandler} alt="" className='netflix-itemCarouselComponent-sub-container-like' />}
           {like && <img src={heart} onClick={likeHandler} alt="" className='netflix-itemCarouselComponent-sub-container-like' />}
            <img className='netflix-itemCarouselComponent-container-image' src={item.image}  alt={item.name} />
            <div className='netflix-itemCarouselComponent-container-desc'>
                <h4 class="name">{item.name}</h4>
                <h5 class="des">{item.year}</h5>
            </div>
          </div>
        ))}
      </Slider>
  </div>)
  
  }

export default NetFlixItemCarouselComponent
