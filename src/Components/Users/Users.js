import React, { useEffect } from "react";
import './Users.css'
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
import {getUsers } from "../../Actions/MovieAction";

const Users = () => {
const navigate = useNavigate()
const dispatch = useDispatch()
const users = useSelector(state => state.netflixAuth.users)
console.log(users);
  const addHandler = (e) => {
    e.preventDefault()
    navigate('/netflix/profile/movies/add')
  }

  const LoadDetail = (e) => {
    navigate(`/netflix/profile/movies/${e}`)
  }

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('user')).token
    dispatch(getUsers(token))
  },[dispatch])


  return <div className="netflix-profile-Content">
      <div className="netflix-profile-Content-title">
          <h2 >Movies</h2>
          <Add className="addbtn" onClick={addHandler}/>
      </div>
      <div className="netflix-profile-Content-container">
        <table className="netflix-profile-Content-table" >
            <thead className="table-head">
                <tr>
                  <th>N0</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Netflix User ID</th>
                  <th>Email</th>
                </tr>
						</thead>

            <tbody className="table-body">
									{users &&
										users.map((item,index) => (
											<tr key={item._id} onClick={() => LoadDetail(item._id)}>
												<td>{index+1}</td>
												<td>{item.name}</td>
												<td>{item.age}</td>
												<td>{item.netflixUserId}</td>
												<td>{item.email}</td>
											</tr>
										))}
								</tbody>
        </table>
      </div>
  </div>;
};

export default Users;
