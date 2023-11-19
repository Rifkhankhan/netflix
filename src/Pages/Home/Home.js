import React, { useEffect, useState } from 'react'
import './Home.css'
import Topbar from '../../Components/topbar/Topbar'
import NetFlixImageCarouselComponent from '../../Components/NetFlixImageCarouselComponent/NetFlixImageCarouselComponent'
import VideoComponent from '../../Components/VideoComponent/VideoComponent'
import NetFlixItemCarouselComponent from '../../Components/NetFlixItemCarouselComponent/NetFlixItemCarouselComponent'
import items from '../../Movies'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories, getItems } from '../../Actions/MovieAction'
import NetFlixSearchComponent from '../../Components/NetFlixSearchComponent/NetFlixSearchComponent'
import close from '../../Images/close.png'
import { netflixAuthActions } from "../../Redux/netflixAuthSlice";
import RightSideCardModel from '../../Components/RightSideCardModel/RightSideCardModel'

function Home() {

	const dispatch = useDispatch()
	const [query,setQuery] = useState('')
	const [searchItems,setSearchItems] = useState()
	const [model,setModel] = useState(false)
	const categories = useSelector(state => state.netflixAuth.category)
	const items = useSelector(state => state.netflixAuth.items)
	const authData = useSelector(state => state.netflixAuth.authData)
	const likeVideos = items?.filter(item => item.likes.includes(authData?.user?._id))


	
	useEffect(() => {
		console.log('autologin');
		dispatch(netflixAuthActions.autoLogin())
	  },[])

	useEffect(()=> {
	  dispatch(getItems())
	  dispatch(getCategories())
	},[dispatch])

	useEffect(() => {

	},[model])
	const searchHandler = (e) => {
		setQuery(e)
		setSearchItems(items?.filter(item => item.name.toLowerCase().includes(e.toLowerCase())))
	}

	useEffect(() => {},[query])
	
	
	useEffect(() => {

	return	()=> {
		document.documentElement.style.overflow = 'scroll';
		document.body.scroll = "yes";
		setModel(false)
	}
	},[])
	
	return (
		<>
				 {/* <Topbar searchHandler={searchHandler} setModel={setModel} /> */}
				 <div className= "netflix-home-page-container">
					<NetFlixImageCarouselComponent type='movie'/>
					<VideoComponent type='movie'/>

					{query.length > 0 && <NetFlixSearchComponent items={searchItems}/>}
					{query.length === 0 && categories?.map((item) => (<NetFlixItemCarouselComponent key={item.name} type='movie' name={item.name} category={item.name} items={items}/>))}
				
				</div>
			
		</>
	)
}

export default Home
