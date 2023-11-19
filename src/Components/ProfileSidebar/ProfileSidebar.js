import React, { useEffect, useState } from "react";
import './ProfileSidebar.css'
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
  Category,
  Search,
  Person,
  Dashboard,
  Movie,
  MovieCreation,
  MoveToInbox,
  VideocamSharp,
  FontDownload,
  CloudDownload,
  WatchLater,
  LinkedCameraSharp,
  LocalMovies,
  Settings,
} from "@material-ui/icons";
import { Link, NavLink } from "react-router-dom";

const ProfileSidebar = ({show}) => {




 
  // useEffect(() => {
    // if(windowDimensions > 1100) 
        // document.getElementsByClassName('netflix-ProfileSidebar')[0].classList.remove('netflix-ProfileSidebarToggle');
  // },[windowDimensions])
  return <div className="netflix-ProfileSidebar">
      <div className="sidebarWrapper">
      <ul className="sidebarList">
          <NavLink to='/netflix' className="sidebarListItem">
            <Dashboard className="sidebarIcon" />
            <span className="sidebarListItemText">Dashboard</span>
          </NavLink>
          <NavLink to='/netflix/profile/movies' className="sidebarListItem">
            <Movie className="sidebarIcon" />
            <span className="sidebarListItemText">Movies</span>
          </NavLink>
          <NavLink to='/netflix/profile/series' className="sidebarListItem">
            <MoveToInbox className="sidebarIcon" />
            <span className="sidebarListItemText">Series</span>
          </NavLink>
          <NavLink to='/netflix/profile/users' className="sidebarListItem">
            <Person className="sidebarIcon" />
            <span className="sidebarListItemText">Users</span>
          </NavLink>
          <NavLink className="sidebarListItem">
            <Search className="sidebarIcon" />
            <span className="sidebarListItemText">Search</span>
          </NavLink>
          <NavLink to='/netflix/profile/category' className="sidebarListItem">
            <Category className="sidebarIcon" />
            <span className="sidebarListItemText">Category</span>
          </NavLink>
          <NavLink to='/netflix/profile/yourVideos' className="sidebarListItem">
            <VideocamSharp className="sidebarIcon" />
            <span className="sidebarListItemText">Your videos</span>
          </NavLink>
          <NavLink to='/netflix/profile/downloads' className="sidebarListItem">
            <CloudDownload className="sidebarIcon" />
            <span className="sidebarListItemText">Downloads</span>
          </NavLink>
          <NavLink to='/netflix/profile/watchLater' className="sidebarListItem">
            <WatchLater className="sidebarIcon" />
            <span className="sidebarListItemText">Watch later</span>
          </NavLink>
          <NavLink to='/netflix/profile/likes' className="sidebarListItem">
            <LocalMovies className="sidebarIcon" />
            <span className="sidebarListItemText">Likes</span>
          </NavLink>
          <NavLink to='/netflix/profile/unlikes' className="sidebarListItem">
            <LocalMovies className="sidebarIcon" />
            <span className="sidebarListItemText">UnLikes</span>
          </NavLink>
          <NavLink to='/netflix/profile/category' className="sidebarListItem">
            <Settings className="sidebarIcon" />
            <span className="sidebarListItemText">Settings</span>
          </NavLink>
        </ul>
      </div>
  </div>;
};

export default ProfileSidebar;
