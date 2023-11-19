import React, { useEffect, useState } from 'react'
import './Profile.css'
import Topbar from '../../Components/topbar/Topbar'
import ProfileSidebar from '../../Components/ProfileSidebar/ProfileSidebar'
import { Outlet, useNavigate } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
function Profile() {
	const dispatch = useDispatch()

	function getWindowDimensions() {
		const { innerWidth: width, innerHeight: height } = window;
		return {
		  width,
		  height
		};
	  }
	// const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const [show,setShow] = useState(false)




	  const toggleHandler = (e) => {
		setShow(current => !current)
	  }

	return (
		<>
			{/* <Topbar toggleHandler={toggleHandler}/> */}
			<div className="netflix-profile-container">
				<ProfileSidebar show={show}/>
				<Outlet />
			</div>
		</>
	)
}

export default Profile
