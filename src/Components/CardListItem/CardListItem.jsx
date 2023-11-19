import { ThumbDown, ThumbUp,Delete,RemoveRedEye } from "@material-ui/icons";
import React from "react";
import { useNavigate } from "react-router-dom";
import './CardListItem.css'
import { dislikeItem} from "../../Actions/MovieAction";

import { useDispatch, useSelector } from "react-redux";
const CardListItem = ({item,setModel}) => {
	const user = useSelector(state => state.netflixAuth.authData)

    const navigate = useNavigate()
	const dispatch = useDispatch()

    const itemHandler = (id) => {
        navigate(`/netflix/${id}`)
        setModel(current => !current)
    }
    
    const handleClick = (id) => {
		  dispatch(dislikeItem({id:id,userId:user.user._id}))
    }
    
  return <div  className='netflix-card-item-container'>
           <img src={item?.image} alt="" />
           <div className="netflix-card-item-container-first-div">
                <p>{item?.name}</p>
                <p>{item?.year}</p>
           </div>
           <div className="netflix-card-item-container-last-div">
            <RemoveRedEye  className="card-btn view-card-btn" onClick={() => itemHandler(item._id)}/>
            <Delete  className="card-btn delete-card-btn" onClick={() => handleClick(item._id)}/>
           </div>
          
        </div>;
};

export default CardListItem;
