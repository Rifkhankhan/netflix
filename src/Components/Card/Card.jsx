import { ThumbDown, ThumbUp } from "@material-ui/icons";
import React from "react";
import { useNavigate } from "react-router-dom";
import './Card.css'
const Card = ({item}) => {
    const navigate = useNavigate()

    const itemHandler = (id) => {
        navigate(`/netflix/${id}`)
    }


  return <div key={item._id} className='netflix-item-card-container' onClick={() => itemHandler(item._id)} style={{backgroundImage:"url(" + item?.image + ")" }}>
            <ThumbUp className="thumbup"/>
            <ThumbDown className="thumbdown"/>
            <div className='netflix-item-card-container-desc'>
                <h4 class="name">{item.name}</h4>
                <h5 class="des">{item.year}</h5>
            </div>
        </div>;
};

export default Card;
