import React, { useEffect, useState } from "react";
import './AddItem.css'
import {
  Backspace
} from "@material-ui/icons";
import ImageUploader from "../ImageUploader/ImageUploader";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createItem, getCategories } from "../../Actions/MovieAction";

const AddItem = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
	const [selectedFile, setSelectedFile] = useState()

  const categories = useSelector(state => state.netflixAuth.category)
  

  useEffect(() => {
    dispatch(getCategories())
  },[])


  const backHandler = (e) =>{
    navigate(-1)
  }
  const catchFileDataHandler = e => {
			setSelectedFile(e)
		
	}
  const [data,setData] = useState({
    name:'',
    subCategory:'',
    year:'',
    category:'',
    type:'',
    desc:'',
  })
  const handleChange = e => {
		setData({ ...data, [e.target.name]: e.target.value })
	}

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(selectedFile);
    const formData = new FormData();
		formData.append('name',data.name)
		formData.append('subCategory',data.subCategory)
		formData.append('year',data.year)
		formData.append('desc',data.desc)
		formData.append('image',selectedFile)
		formData.append('category',data.category)
		formData.append('type',data.type)

    dispatch(createItem(formData))
    // navigate(-1)
  }

  return <div className="netflix-profile-Content">
      <div className="netflix-profile-Content-title">
          <h2>Add Item</h2>
          <Backspace className="backbtn" onClick={backHandler}/>
      </div>
      <div className="netflix-profile-additem-container">
       <div className="netflix-addForm">
          <form className="netflix-additem-form">
              <div className="formGroup">
                <label for="">Name</label>
                <input type="text" defaultValue={data.name} name="name"   onChange={handleChange}  required
                  placeholder="Enter The Name of the movie"/>
              </div>
              <div className="formGroup">
                <label for="">SubCategory</label>
                <input type="text" defaultValue={data.subCategory} name="subCategory"   onChange={handleChange}  required
                  placeholder="Enter The subCategory of the movie"/>
              </div>
              <div className="formGroup">
                <label for="">Year</label>
                <input type="number" min='1900' defaultValue={data.year} name="year"  onChange={handleChange}
                  required
                  placeholder="Enter The Releasing Year"/>
              </div>

              <div className="formGroup">
                <label for="">Category</label>
                {/* <input type="text" name="category" value=""  onChange={handleChange}/> */}
                <select onChange={handleChange} name="category">
                    <option >Select a Category</option>
                      {
                        categories?.map(item => <option key={item._id} value={item.category} >{item.name}</option>)
                      }
                    </select>
              </div>

              <div className="formGroup">
                <label for="">Movie/Series</label>
                  <select onChange={handleChange} name="type">
                   <option >Select Type</option>
                   <option value='movie' >Movie</option>
                   <option value='series'>Series</option>
                </select>
              </div>

              <div className="formGroup">
                <label for="">Description</label>
                <textarea type="text" name="desc" defaultValue={data.desc} rows={5} onChange={handleChange}     required
                  placeholder="Enter The Description of this film"/> 
              </div>

              <div className="formGroup">
                <label for="">Image</label>
                <ImageUploader onInput={catchFileDataHandler}/>
              </div>

              <div className="additem-form-btn">
                 <button type='submit'   className="submit-btn notLoading-btn" onClick={submitHandler}>Submit</button>
                </div>
          </form>
       </div>
      </div>
  </div>;
};

export default AddItem;
