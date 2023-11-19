import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import { netflixAuthActions } from "../Redux/netflixAuthSlice";



import { useDispatch, useSelector } from 'react-redux'


// netflix
import Home from '../Pages/Home/Home'
import NetflixLoginPage from '../Pages/LoginPage/LoginPage'
import NetflixMovies from '../Pages/Home/Home'
import NetflixSeries from '../Pages/NetflixSeries/NetflixSeries'
import NetflixProfile from '../Pages/Profile/Profile'
import Movies from '../Components/Movies/Movies'
import Series from '../Components/Series/Series'
import MovieItem from '../Pages/MovieItem/MovieItem'
import AddItem from '../Components/AddItem/AddItem'
import ViewItem from '../Components/ViewItem/ViewItem'
import EditItem from '../Components/EditItem/EditItem'
import AddCategory from '../Components/AddCategory/AddCategory'
import LikesComponents from '../Components/LikesComponents/LikesComponents'
import NetflixRegisterPage from '../Pages/NetflixRegisterPage/NetflixRegisterPage'
import Users from '../Components/Users/Users';
import DownloadsComponent from '../Components/DownloadsComponent/DownloadsComponent';
import YourVideosComponent from '../Components/YourVideosComponent/YourVideosComponent';
import WatchLaterComponent from '../Components/WatchLaterComponent/WatchLaterComponent';
import React, { useEffect } from "react";
import DisLikeComponents from '../Components/DisLikeComponents/DisLikeComponents';


const Routers = (props) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

	// const PrivateRoute = ({ children }) => {
	// 	const isAuthenticated = useSelector(state => state.netflixAuth.isAuthenticated)
	// 	return isAuthenticated ? <>{children}</> : <Navigate to="/netflix" />;
	// }
	
	// const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
	const isAuthenticated = useSelector(state => state.netflixAuth.isAuthenticated)

	useEffect(() => {
		dispatch(netflixAuthActions.autoLogin())
	  },[dispatch])
	
	//   console.log(isAuthenticated);
	return (
		<Routes>
			<Route path="/" element={<Home searchItems={props.searchItems}/>} />
			<Route path="/home" element={<Home searchItems={props.searchItems}/>} />
			<Route path="/netflix" element={<NetflixMovies searchItems={props.searchItems}/>} />
			<Route path="/netflix/login" element={<NetflixLoginPage />} />
			<Route path="/netflix/register" element={<NetflixRegisterPage />} />
			<Route path="/netflix/series" element={<NetflixSeries searchItems={props.searchItems}/>} />
			
			{/* <Route path="/netflix/profile" element={<PrivateRoute> <NetflixProfile /></PrivateRoute>} >  */}
			{isAuthenticated && <Route path="/netflix/profile" element={<NetflixProfile />} > 
				<Route index element={<Movies /> } />
				<Route path="movies" element={<Movies /> } />
				<Route path="series" element={<Series /> } />
				<Route path="users" element={<Users /> } />
				<Route path="likes" element={<LikesComponents /> } />
				<Route path="unlikes" element={<DisLikeComponents /> } />
				<Route path="yourVideos" element={<YourVideosComponent /> } />
				<Route path="downloads" element={<DownloadsComponent /> } />
				<Route path="watchLater" element={<WatchLaterComponent /> } />
				<Route path="category" element={<AddCategory /> } />
				<Route path="*" element={<Series /> } />
			</Route> }
		
			 {/* <Route path="/netflix/profile/movies" element={<PrivateRoute><Movies /></PrivateRoute>} >  */}
			{isAuthenticated && <Route path="/netflix/profile/movies" element={<NetflixProfile />} > 
				<Route index element={<Movies />} />
				<Route path="add" element={<AddItem />}  />
				<Route path=":id" element={<ViewItem />} />
				<Route path="edit/:id" element={<EditItem />} />
				<Route path="edit" element={<AddItem />}  />
				<Route path="*" element={<Movies />} />
			</Route>}
			<Route path="/netflix/:id" element={<MovieItem />} />
			{/* {!isAuthenticated && <Route path="/netflix" element={<NetflixMovies />} />} */}
			 <Route path="*" element={<NetflixMovies />} />



			{/* <Route path="*" element={<Home />} /> */}
		</Routes>
	)
}

export default Routers
