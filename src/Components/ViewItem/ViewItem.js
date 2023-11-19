import React, { useEffect, useState } from "react";
import './ViewItem.css'
import {
  Backspace,
  Edit
} from "@material-ui/icons";
import pencil from '../../Images/pencil.png'
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../../Actions/MovieAction";

const ViewItem = () => {
  const navigate = useNavigate()
  const {id} = useParams()
  const dispatch = useDispatch()
  const items = useSelector(state => state.netflixAuth.items)
  const item = items?.find(item => item._id === id)
  
  useEffect(()=> {
    dispatch(getItems())
  },[dispatch,id])

  const backHandler = (e) =>{

    navigate(-1)

  }


  const editHandlet = (e) => {
    e.preventDefault()
    navigate(`/netflix/profile/movies/edit/${id}`)
  }



  return <div className="netflix-profile-Content">
      <div className="netflix-profile-Content-title">
          <h2>View Item</h2>
          <Backspace className="backbtn" onClick={backHandler}/>
      </div>
      <div className="netflix-profile-ViewItem-container">
       <div className="netflix-view-item">
          <div className="netflix-view-item-container" >
            <img src={item?.image} alt="" className="netflix-view-item-container-background" />
            <div className="view-item-col"></div>
            <div className="view-item-col" >
                        <img src={item?.image} alt=""  />
                    </div>
            <div className="view-item-col view-item-col-desc" >
                        <h1 >{item?.name}</h1>
                        <h2>{item?.year}</h2>
                        <h4>{item?.desc}</h4>
                    </div>
            <div className=" edit-btn-col">
              <img src={pencil} className="edit-btn" alt="" onClick={editHandlet}/>
            </div>
          </div>
       </div>
      </div>
  </div>;
};

export default ViewItem;
