import React from 'react'
import { useNavigate } from 'react-router-dom'
import './NetFlixSearchComponent.css'




function NetFlixSearchComponent({items}) {
  const navigate = useNavigate()

  const handler = (id) => {
    navigate(`/netflix/${id}`)
  }
  return <div className='netflix-itemCarouselComponent-container'>
    <h2 className='netflix-itemCarouselComponent-container-heading'>Search Results {items.length}</h2>
    <div className='netflix-searchItemComponent-container'>
      {items?.map(item => <div className='search-item' onClick={() => handler(item._id)}>
        <img src={item.image} alt="" />
        <div className='netflix-searchItemComponent-container-desc'>
                <h4 class="name">{item.name}</h4>
                <h5 class="year">{item.year}</h5>
            </div>
      </div>)}
    </div>

  </div>
  
  }

export default NetFlixSearchComponent
