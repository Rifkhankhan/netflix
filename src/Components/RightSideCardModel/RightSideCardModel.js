import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import  './RightSideCardModel.css'
import CardListItem from "../CardListItem/CardListItem";
import close from '../../Images/cancel.png'
import {  getItems } from "../../Actions/MovieAction";
import { netflixAuthActions } from "../../Redux/netflixAuthSlice";
const RightSideCardModel = ({model,setModel}) => {
    const authData = useSelector(state => state.netflixAuth.authData)
	const items = useSelector(state => state.netflixAuth.items)
	const dispatch = useDispatch()

	useEffect(()=> {
		dispatch(getItems())
	  },[dispatch])
	

	useEffect(() => {
		console.log('autologin');
		dispatch(netflixAuthActions.autoLogin())
	  },[])

	const likeVideos = items?.filter(item => item.likes.includes(authData?.user?._id))

  return <>
		<div 
			
			className={model ? "netflix-like-model-list-container" : "netflix-like-model-list-container-close"}
		>
				<img 
					src={close} alt="" 
					className={model ? "model-close-btn model-close-open" : "model-close-btn model-close-close"}
					onClick={() => setModel(current => !current)}
				/>
				<div  className={model ? 'netflix-like-model-list-open' : 'netflix-like-model-list-close'}>
						{likeVideos?.map(item => <CardListItem  key={item._id} item={item} setModel={setModel} />)}
				</div>
		</div>
  </>;
};

export default RightSideCardModel;
