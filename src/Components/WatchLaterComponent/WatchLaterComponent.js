import React, { useEffect } from "react";
import './WatchLaterComponent.css'
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
  Add
} from "@material-ui/icons";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../../Actions/MovieAction";
import ItemList from "../ItemList/ItemList";

const WatchLaterComponent = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const items = useSelector(state => state.netflixAuth.items)
  const authData = useSelector(state => state.netflixAuth.authData)

  const videos = items.filter(item => item.save.includes(authData.user._id))
  console.log(videos)
  const LoadDetail = (e) => {
    console.log(e);
    navigate(`/netflix/profile/movies/${e}`)
  }

  useEffect(() => {
    dispatch(getItems())
  },[dispatch])


  return <div className="netflix-profile-Content">
      <div className="netflix-profile-Content-title">
          <h2 >Watch Later Videos</h2>
      </div>
      <div className="netflix-profile-like-Content-container">
          <ItemList items={videos}/>
      </div>
  </div>;
};

export default WatchLaterComponent;
