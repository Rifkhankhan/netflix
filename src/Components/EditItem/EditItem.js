import React, { useEffect, useState } from 'react'
import './EditItem.css'
import { Backspace } from '@material-ui/icons'
import ImageUploader from '../ImageUploader/ImageUploader'
import { useNavigate, useParams } from 'react-router-dom'
import items from '../../Movies'
import EditImageUploader from '../EditImageUploader/EditImageUploader'
import { getCategories, getItems, editItem } from '../../Actions/MovieAction'
import { useDispatch, useSelector } from 'react-redux'

const EditItem = () => {
	const navigate = useNavigate()
	const {id} = useParams()
	const [selectedFile, setSelectedFile] = useState()
	const dispatch = useDispatch()
	const categories = useSelector(state => state.netflixAuth.category)
	
	const items = useSelector(state => state.netflixAuth.items)
	const item = items.find(item => item._id === id)
	const [data, setData] = useState()
	const [image, setImage] = useState(item?.image)
	
	useEffect(()=> {
	  dispatch(getItems())
	},[dispatch])

    useEffect(() => {
		dispatch(getCategories())
	  },[])

	  useEffect(() => {
		setData(item)
	  },[item])

	const backHandler = e => {
	    navigate(-1)
	}

	const handleChange = e => {
		setData({ ...data, [e.target.name]: e.target.value })
	}

	const catchFileDataHandler = e => {
		setSelectedFile(e)
	}

	useEffect(() => {
		console.log(data);
		setImage(data?.image)
	}, [data])

	const submitHandler = (e) => {
		e.preventDefault()
		console.log(data);
		const formData = new FormData();
			formData.append('name',data.name)
			formData.append('subCategory',data.subCategory)
			formData.append('year',data.year)
			formData.append('desc',data.desc)
			formData.append('image',selectedFile ? selectedFile : item.image)
			formData.append('category',data.category)
			formData.append('type',data.type)
	
		dispatch(editItem(item._id,formData))
		navigate('/netflix/profile')
	  }
	return (
		<div className="netflix-profile-Content">
			<div className="netflix-profile-Content-title">
				<h2>Edit Item</h2>
				<Backspace className="backbtn" onClick={backHandler} />
			</div>
			<div className="netflix-profile-additem-container">
				<div className="netflix-addForm">
					<form className="netflix-additem-form" onSubmit={submitHandler}>
						<div className="formGroup">
							<label for="">Name</label>
							<input
								type="text"
								defaultValue={data?.name}
								name="name"
								onChange={handleChange}
								required
								placeholder="Enter The Name of the movie"
							/>
						</div>

						<div className="formGroup">
							<label for="">Year</label>
							<input
								type="number"
								min="1900"
								defaultValue={data?.year}
								name="year"
								onChange={handleChange}
								required
								placeholder="Enter The Releasing Year"
							/>
						</div>

						<div className="formGroup">
							<label for="">Category</label>
							{/* <input type="text" name="category" value=""  onChange={handleChange}/> */}
							<select onChange={handleChange} value={data?.category} name='category'>
								{categories?.map(category => (
									<option key={category._id} value={category.name} >
										{category.name}
									</option>
								))}
							</select>
						</div>
						<div className="formGroup">
							<label for="">SubCategory</label>
							<input type="text" name="subCategory" defaultValue={data?.subCategory}  onChange={handleChange}/>
						</div>
						<div className="formGroup">
							<label for="">Movie/Series</label>
							<select onChange={handleChange} value={data?.type}>
								<option value="movie" key='Movie'>Movie</option>
								<option value="series" key='Series'>Series</option>
							</select>
						</div>

						<div className="formGroup">
							<label for="">Description</label>
							<textarea
								type="text"
								name="desc"
								defaultValue={data?.desc}
								rows={5}
								onChange={handleChange}
								required
								placeholder="Enter The Description of this film"
							/>
						</div>

						<div className="formGroup">
							<label for="">Image</label>
							<EditImageUploader 	
								onInput={catchFileDataHandler}
								value={selectedFile}
								image={image}
							/>
						</div>

						<div className="additem-form-btn">
							<button type="submit" className="submit-btn notLoading-btn">
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default EditItem
