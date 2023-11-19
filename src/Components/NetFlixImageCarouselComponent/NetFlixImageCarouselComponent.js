import React, { useEffect } from 'react'
import './NetFlixImageCarouselComponent.css'


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from 'react-redux'
import { getItems } from '../../Actions/MovieAction'

function NetFlixImageCarouselComponent({type}) {
	const dispatch = useDispatch()

  const items = useSelector(state => state.netflixAuth.items)
	
  const movies = items.filter(item=> item.type === type)

	useEffect(()=> {
	  dispatch(getItems())
	},[dispatch])


  const settings = {
    infinite: true,
    dots: true ,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };


 
  return (<div className='netflix-imageCarouselComponent-container'>
     <Slider {...settings}>
          {movies.map((item) => (
            <div key={item._id} className='netflix-imageCarouselComponent-sub-container'>
              <div className='netflix-imageCarouselComponent-container-desc'>
                  <h1>{item.name}</h1>
                  <p>{item.desc}</p>
              </div>
              <img className='netflix-imageCarouselComponent-container-image' src={item.image}  alt={item._id} />
            </div>
          ))}
        </Slider>
  </div>);
  
}

export default NetFlixImageCarouselComponent
