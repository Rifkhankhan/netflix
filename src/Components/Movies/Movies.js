import React, { useEffect } from "react";
import './Movies.css'
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

const Movies = () => {
const navigate = useNavigate()
const dispatch = useDispatch()
const items = useSelector(state => state.netflixAuth.items)
const series = items.filter(item => item.type === 'movie')

  const addHandler = (e) => {
    e.preventDefault()
    navigate('/netflix/profile/movies/add')
  }
  const LoadDetail = (e) => {
    console.log(e);
    navigate(`/netflix/profile/movies/${e}`)
  }

  useEffect(() => {
    dispatch(getItems())
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
                  <th>Year</th>
                  <th>Type</th>
                  <th>Category</th>
                </tr>
						</thead>

            <tbody className="table-body">
									{series &&
										series.map((item,index) => (
											<tr key={item._id} onClick={() => LoadDetail(item._id)}>
												<td>{index+1}</td>
												<td>{item.name}</td>
												<td>{item.year}</td>
												<td>{item.type}</td>
												<td>{item.category}</td>
											</tr>
										))}
								</tbody>
        </table>
      </div>
  </div>;
};

export default Movies;
