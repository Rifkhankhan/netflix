import React, { useEffect, useState } from 'react'
import './NetflixSeries.css'
import Topbar from '../../Components/topbar/Topbar'
import NetFlixImageCarouselComponent from '../../Components/NetFlixImageCarouselComponent/NetFlixImageCarouselComponent'
import VideoComponent from '../../Components/VideoComponent/VideoComponent'
import NetFlixItemCarouselComponent from '../../Components/NetFlixItemCarouselComponent/NetFlixItemCarouselComponent'
import { useDispatch, useSelector } from 'react-redux'
import {  getItems } from '../../Actions/MovieAction'
import NetFlixSearchComponent from '../../Components/NetFlixSearchComponent/NetFlixSearchComponent'
function NetflixSeries() {

	const dispatch = useDispatch()
	const [query,setQuery] = useState('')
	const [searchItems,setSearchItems] = useState()

	const items = useSelector(state => state.netflixAuth.items)
	const series = items?.filter(item => item.type === 'series')
	let categories = series?.map(serie => serie.category)
	categories = [...new Set(categories)];

	useEffect(()=> {
	  dispatch(getItems())
	},[dispatch])

	const searchHandler = (e) => {
		setQuery(e)
		setSearchItems(series?.filter(item => item.name.toLowerCase().includes(e.toLowerCase())))
	}


	return (
		<>
			{/* <Topbar searchHandler={searchHandler}/> */}
			<div className="netflix-home-container">
				<NetFlixImageCarouselComponent type='series'/>
				<VideoComponent type='series'/>

				{query.length > 0 && <NetFlixSearchComponent items={searchItems}/>}
				{query.length === 0 && categories?.map((item) => (<NetFlixItemCarouselComponent key={item} name={item} type='series' category={item} items={series}/>))}

				{/* <NetFlixItemCarouselComponent name='Transformers' category='transformers' items={items}/> */}

				{/* Pirates of carribian */}
				{/* <NetFlixItemCarouselComponent name='Pirates of caribbean' category='pirate of the caribbean' items={items}/> */}

				{/* mission impossible */}
				{/* <NetFlixItemCarouselComponent name='Mission impossible' category='mission impossible' items={items}/> */}

				{/* fast and furious */}
				{/* <NetFlixItemCarouselComponent name='fast and furious' category='fast and furious' items={items}/> */}
			</div>
		</>
	)
}

export default NetflixSeries
