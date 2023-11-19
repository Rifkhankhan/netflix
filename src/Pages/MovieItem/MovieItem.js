import React, { useEffect, useState } from "react";
import './MovieItem.css'
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { dislikeItem, downloadItem, getItems, likeItem,saveItem } from "../../Actions/MovieAction";
import { Save, Share, ThumbDown, ThumbUp,SaveOutlined,ShareTwoTone,CloudDownload } from "@material-ui/icons";
import { netflixAuthActions } from "../../Redux/netflixAuthSlice";


const MovieItem = () => {
    const {id} = useParams()
	const dispatch = useDispatch()
	const isAuthenticated = useSelector(state => state.netflixAuth.isAuthenticated)
	const user = useSelector(state => state.netflixAuth.authData)
	const items = useSelector(state => state.netflixAuth.items)
	const item = items?.find(item => item._id === id)
	const [feedback,setFeedback] = useState({
											like:item?.likes?.includes(user?.user?._id),
											dislike:item?.dislikes?.includes(user?.user?._id),
											share:item?.share?.includes(user?.user?._id),
											save:item?.save?.includes(user?.user?._id),
											downloads:item?.downloads?.includes(user?.user?._id),
										})

	
	useEffect(() => {
		dispatch(netflixAuthActions?.autoLogin())
	  },[dispatch])

	  useEffect(() => {

	  },[feedback])

	const handleClick = (e) => {
		if(e === 'like'){
			setFeedback({...feedback,like:true,dislike:false})
			dispatch(likeItem({id:id,userId:user?.user?._id}))
		}
		else if(e === 'dislike'){
			setFeedback({...feedback,like:false,dislike:true})

			dispatch(dislikeItem({id:id,userId:user?.user?._id}))

		}
		else if(e === 'share'){
			setFeedback({...feedback,share:!feedback?.share})

		}
		else if(e === 'save'){
			setFeedback({...feedback,save:!feedback.save})
			dispatch(saveItem({id:id,userId:user?.user?._id}))

		}
		else if(e === 'downloads'){
			setFeedback({...feedback,downloads:!feedback.downloads})
			dispatch(downloadItem({id:id,userId:user?.user?._id}))

		}
	}
	useEffect(()=> {
	  dispatch(getItems())
	},[dispatch,id])
	   return <>
			<div className="netflix-movieItem-container"  
			style={{ backgroundImage: "url(" + item?.image + ")" ,backgroundColor:'rgba(7, 17, 128, 0.541)'}}>
                {/* <img src={item?.image} alt="" className="netflix-movieItem-container-background"/> */}
				<div className="movieItem-col"></div>
				<div className="movieItem-col">
                    <img src={item?.image} alt="" className="movieItem-col-img"/>
                </div>
				<div className="movieItem-col movieItem-col-desc">
                    <h1>{item?.name}</h1>
                    <h2>{item?.year}</h2>
                    <h4>{item?.desc}</h4>
					{isAuthenticated && <div className="movie-item-feedback">
						 {!feedback.like &&<div className="feedback-icon-div"> 
							<ThumbUp   onClick={() => handleClick('like')}/>
							<p>Like</p>
						</div>}
						{feedback.like &&<div className="feedback-icon-div"> 
							<ThumbUp style={{color:'red'}}   onClick={() => handleClick('like')}/>
							<p>Like</p>
						</div>}
						{!feedback.dislike &&<div className="feedback-icon-div"> 
							<ThumbDown   onClick={() => handleClick('dislike')}/>
							<p>Dislike</p>
						</div>}
						{feedback.dislike &&<div className="feedback-icon-div"> 
							<ThumbDown style={{color:'red'}}   onClick={() => handleClick('dislike')}/>
							<p>Dislike</p>
						</div>}
						{!feedback.share &&<div className="feedback-icon-div"> 
							<Share   onClick={() => handleClick('share')}/>
							<p>Share</p>
						</div>}
						{feedback.share &&<div className="feedback-icon-div"> 
							<ShareTwoTone style={{color:'red'}}   onClick={() => handleClick('share')}/>
							<p>Shared</p>
						</div>}
						{!feedback.save &&<div className="feedback-icon-div"> 
							<Save   onClick={() => handleClick('save')}/>
							<p>Save</p>
						</div>}

						{feedback.save &&<div className="feedback-icon-div"> 
							<SaveOutlined style={{color:'red'}}  onClick={() => handleClick('save')}/>
							<p>Saved</p>
						</div>}

						{!feedback.downloads &&<div className="feedback-icon-div"> 
							<CloudDownload  onClick={() => handleClick('downloads')}/>
							<p>Download</p>
						</div>}

						{feedback.downloads &&<div className="feedback-icon-div"> 
							<CloudDownload style={{color:'red'}}  onClick={() => handleClick('downloads')}/>
							<p>Downloaded</p>
						</div>}

						{/* <img src={like} alt=""  onClick={handleClick}/>
						<img src={dislike} alt="" onClick={handleClick}/>
						<img src={share} alt="" onClick={handleClick}/>
						<img src={add} alt="" onClick={handleClick}/> */}
					</div>}
                </div>
				<div className="movieItem-col">
						
				</div>
			</div>
		</>
};

export default MovieItem;
