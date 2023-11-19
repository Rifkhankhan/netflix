import React, { useEffect } from "react";
import './DownloadsComponent.css'
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
import ItemList from "../ItemList/ItemList";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../../Actions/MovieAction";

const DownloadsComponent = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const items = useSelector(state => state.netflixAuth.items)
  const authData = useSelector(state => state.netflixAuth.authData)
const likeVideos = items.filter(item => item.downloads?.includes(authData.user._id))
  
const LoadDetail = (e) => {
  console.log(e);
  navigate(`/netflix/profile/movies/${e}`)
}

useEffect(() => {
  dispatch(getItems())
},[dispatch])


return <div className="netflix-profile-Content">
    <div className="netflix-profile-Content-title">
        <h2 >Downloaded Videos</h2>
    </div>
    <div className="netflix-profile-like-Content-container">
        <ItemList items={likeVideos}/>
    </div>
</div>;
};

export default DownloadsComponent;
