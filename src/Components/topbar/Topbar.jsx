import "./topbar.css";
import { Search, Person, Chat, Notifications,User } from "@material-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


import profileImg from  '../../Images/profile.png'
import hamburger from  '../../Images/hamburger.png'
import like from  '../../Images/heartRed.png'
import { netflixAuthActions } from "../../Redux/netflixAuthSlice";

import { getItems } from "../../Actions/MovieAction";

// function getWindowDimensions() {
//   const { innerWidth: width, innerHeight: height } = window;
//   return {
//     width,
//     height
//   };
// }
export default function Topbar({setModel,setSearchItems}) {
  // const { user } = useContext(AuthContext);
  // const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [query,setQuery] = useState('')
  const [isModelOpen,setModelIsOpen] = useState(false)
  const isAuthenticated = useSelector(state => state.netflixAuth.isAuthenticated)
  const dispatch = useDispatch()
  const navigate = useNavigate()
	const items = useSelector(state => state.netflixAuth.items)
	const series = items?.filter(item => item.type === 'series')

  const authData = useSelector(state => state.netflixAuth.authData)

  console.log(authData);
  const likeVideos = items?.filter(item => item.likes.includes(authData?.user?._id))




 

  
  useEffect(() => {
    dispatch(getItems())
  },[dispatch])

  const searchHandler = (e) => {
		setQuery(e)
		setSearchItems(series?.filter(item => item.name.toLowerCase().includes(e.toLowerCase())))
	}

	
	// useEffect(() => {

  //   return	()=> {
  //     document.documentElement.style.overflow = 'scroll';
  //     document.body.scroll = "yes";
  //     setModel(false)
  //   }
  //   },[])

  const loginHandler = (e) => {
    navigate('/netflix/login')
  }

  // useEffect(() => {
  //   if(!isAuthenticated) {
  //     navigate('/netflix')
  //   }
  // },[isAuthenticated,navigate])

  useEffect(() => {
    dispatch(netflixAuthActions.autoLogin())
  },[dispatch])

	useEffect(() => {},[query])

  const profileHandler = (e) => {
    navigate('/netflix/profile')
  }

  // serach
  const handleChange = (e) => {
    setQuery(e.target.value)
    
  }

 

   return (
     <div className="netflix-topbarContainer">
      <div className="netflix-topbarLeft">
         <img src={hamburger} alt=""  className='topbarhumbergurbtn'/>
          <Link to='/netflix' className="netflix-logo">Movies</Link>
          <Link to='/netflix/series' className="netflix-logo">Series</Link>
      </div>
      <div className="netflix-topbarCenter">

      </div>
      <div className="netflix-topbarRight">
        <input type="text" className="search-box" value={query} placeholder="search" onChange={handleChange}/>
        {isAuthenticated &&   <div className="netflix-topbarIcons">
        
          <div className='netflix-topbarIconItem' style={{marginTop:'2px'}}  onClick={() => setModel(current => !current)}>
            <span>{likeVideos.length}</span>
            <img src={like} alt=""/>
          </div>
          <div className="netflix-topbarIconItem">
            <img src={profileImg} alt="" onClick={profileHandler}/>
            {/* <span className="netflix-topbarIconBadge">1</span> */}
          </div>
        </div>}
       {!isAuthenticated && <button className="topbar-login-btn" onClick={loginHandler}>Login</button>}
      </div>
    </div>
  );
}
