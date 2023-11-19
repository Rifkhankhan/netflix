import React, { useEffect, useState } from 'react'
import './AddCategory.css'
import { Delete } from '@material-ui/icons'

import { useDispatch, useSelector } from 'react-redux'
import { createCategory, deleteCategory, getCategories } from '../../Actions/MovieAction'

const AddCategory = () => {

	const categories = useSelector(state => state.netflixAuth.category)
	console.log(categories)
	const dispatch = useDispatch()



	const [name, setName] = useState('')
	const handleChange = e => {
		setName(e.target.value)
	}


	useEffect(() => {
	  dispatch(getCategories())
	},[])
  
	const submitHandler = (e) => {
		e.preventDefault()
		dispatch(createCategory(name))
		setName('')
		// navigate(-1)
	  }

	  const deleteCategoryHandler = (id) => {
		dispatch(deleteCategory(id))
	  }
	return (
		<div className="netflix-profile-Content">
			<div className="netflix-profile-Content-title">
				<h2>Add Category</h2>
				{/* <Backspace className="backbtn" onClick={backHandler} /> */}
			</div>
			<div className="netflix-profile-category-container">
				<div className="netflix-category-addForm">
					<form className="netflix-category-form" onSubmit={submitHandler}>
						<div className="formGroup">
							<label for="">Category</label>
							<input
								type="text"
								defaultValue={name}
								name="name"
								onChange={handleChange}
								required
								placeholder="Enter a Category Name"
							/>
						</div>

						<div className="category-form-btn">
							<button type="submit" className="addCet-btn">
								Submit
							</button>
						</div>
					</form>
				</div>
				<div className='netflix-category-list'>
					<ul>
						{categories.map(category => <li className='netflix-category-list-item'><span>{category.name}</span> <Delete className='netflix-category-list-item-delete-icon' onClick={() => deleteCategoryHandler(category._id)} /></li>)}
					</ul>
				</div>
			</div>


		</div>
	)
}

export default AddCategory
