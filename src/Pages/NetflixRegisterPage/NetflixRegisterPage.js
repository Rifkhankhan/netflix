import React, { useEffect, useReducer, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './NetflixRegisterPage.css'
import LoginLoadingModel from '../../Components/LoginLoadingModel/LoginLoadingModel'
import { useDispatch, useSelector } from 'react-redux'
import { logUp } from '../../Actions/NetflixAuthAction'

const NetflixRegisterPage = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const isAuthenticated = useSelector(
		state => state.netflixAuth.isAuthenticated
	)
	const isLoading = useSelector(state => state.authUi.isLoading)

	const [data, setData] = useState({
		email: '',
		password: '',
		age: null,
		name: ''
	})

	const [nameValidation, setNameValidation] = useState(false)
	const [ageValidation, setAgeValidation] = useState(false)
	const [emailValidation, setEmailValidation] = useState(false)
	const [passwordValidation, setPasswordValidation] = useState(false)

	const [emailTouched, setEmailTouched] = useState(false)
	const [nameTouched, setNameTouched] = useState(false)
	const [ageTouched, setAgeTouched] = useState(false)
	const [passwordTouched, setPasswordTouched] = useState(false)

	const nameValid = !nameValidation && nameTouched
	const ageValid = !ageValidation && ageTouched
	const emailValid = !emailValidation && emailTouched
	const passwordValid = !passwordValidation && passwordTouched

	const [formValid, setFormValid] = useState(false)

	const handler = e => {
		setData({ ...data, [e.target.name]: e.target.value })

		if (e.target.name === 'email' && e.target.value.includes('@')) {
			setEmailTouched(true)
			setEmailValidation(true)
		} else if (e.target.name === 'email' && !e.target.value.includes('@')) {
			setEmailTouched(true)
			setEmailValidation(false)
		}

		if (e.target.name === 'password' && e.target.value.trim().length >= 8) {
			setPasswordTouched(true)
			setPasswordValidation(true)
		} else if (
			e.target.name === 'password' &&
			!e.target.value.trim().length < 8
		) {
			setPasswordTouched(true)
			setPasswordValidation(false)
		}

		if (e.target.name === 'name' && e.target.value.trim().length > 0) {
			setNameTouched(true)
			setNameValidation(true)
		} else if (e.target.name === 'name' && !e.target.value.trim().length > 0) {
			setNameTouched(true)
			setNameValidation(false)
		}

		if (e.target.name === 'age' && parseInt(e.target.value) >= 10) {
			setAgeTouched(true)
			setAgeValidation(true)
		} else if (e.target.name === 'age' && parseInt(e.target.value) < 10) {
			setAgeTouched(true)
			setAgeValidation(false)
		}
	}

	useEffect(() => {}, [isLoading])

  
	useEffect(() => {
		setFormValid(
			emailValidation && passwordValidation && ageValidation && nameValidation
		)
	}, [emailValidation, passwordValidation, ageValidation, nameValidation])



	const submitHandler = e => {
		e.preventDefault()
		setEmailTouched(true)
		setNameTouched(true)
		setAgeTouched(true)
		setPasswordTouched(true)
		dispatch(logUp(data))

		if (isAuthenticated) {
			console.log('logged in')
			navigate('/netflix/profile')
		}
	}

	return (
		<div className="netflix-login-page-container">
			<div className="netflix-login-page-container-leftSide"> </div>
			<div className="netflix-login-page-container-rightSide">
				<h2>Home Delivery</h2>
				{!isLoading && (
					<form onSubmit={submitHandler} className="netflix-login-page-form">
						<div className="form-group">
							<input
								type="text"
								placeholder="Enter Your Name"
								name="name"
								defaultValue={data.name}
								onChange={handler}
								required
							/>
							{nameValid && (
								<p className="input-feedback">Please Enter Your Name</p>
							)}
						</div>
						<div className="form-group">
							<input
								type="number"
								min="10"
								placeholder="Enter Your Age"
								name="age"
								defaultValue={data.age}
								onChange={handler}
								required
							/>
							{ageValid && (
								<p className="input-feedback">Please Enter Your Age</p>
							)}
						</div>
						<div className="form-group">
							<input
								type="email"
								placeholder="Enter Email"
								name="email"
								defaultValue={data.email}
								onChange={handler}
								required
							/>
							{emailValid && (
								<p className="input-feedback">Please Enter Valid Email</p>
							)}
						</div>

						<div className="form-group">
							<input
								type="password"
								placeholder="Enter Password"
								name="password"
								value={data.password}
								onChange={handler}
							/>
							{passwordValid && (
								<p className="input-feedback">Please Enter Valid Password</p>
							)}
						</div>

						{isLoading ? (
							<button type="submit" disabled={!formValid}>
								Logging
							</button>
						) : (
							<button type="submit" disabled={!formValid}>
								Register
							</button>
						)}
						{/* <button type="submit" disabled={!formValid}>Submit</button> */}
					</form>
				)}
				<p
					style={{
						fontFamily: 'sans-serif',
						fontSize: '17px',
						marginLeft: '15%',
						marginTop: '0.5rem'
					}}>
					Already have an account?{' '}
					<Link
						to="/netflix/login"
						style={{ color: 'red', textDecoration: 'none' }}>
						Login!
					</Link>
				</p>
				{isLoading && <LoginLoadingModel />}
			</div>
		</div>
	)
}

export default NetflixRegisterPage
