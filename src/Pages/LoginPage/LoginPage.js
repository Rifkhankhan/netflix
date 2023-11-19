import React, { useEffect, useReducer, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './LoginPage.css'
import LoginLoadingModel from '../../Components/LoginLoadingModel/LoginLoadingModel'
import { useDispatch, useSelector } from "react-redux";
import {logIn} from '../../Actions/NetflixAuthAction'


const LoginPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isAuthenticated = useSelector(state => state.netflixAuth.isAuthenticated)
    const isLoading = useSelector(state => state.authUi.isLoading)

    const [data,setData] = useState({email:'',password:''})
    const [emailValidation,setEmailValidation] = useState(false)  
    const [passwordValidation,setPasswordValidation] = useState(false)  

    const [emailTouched,setEmailTouched] = useState(false)
    const [passwordTouched,setPasswordTouched] = useState(false)

    const emailValid = !emailValidation && emailTouched
    const passwordValid = !passwordValidation && passwordTouched

    const [formValid,setFormValid] = useState(false)

    const handler = (e) => {
    		setData({ ...data, [e.target.name]: e.target.value })

        if(e.target.name === 'email' && e.target.value.includes('@')) {
          setEmailTouched(true)
          setEmailValidation(true)
        }
        else if(e.target.name === 'email' && !e.target.value.includes('@')) {
          setEmailTouched(true)
          setEmailValidation(false)
        }

        if(e.target.name === 'password' && e.target.value.length >= 8) {
          setPasswordTouched(true)
          setPasswordValidation(true)
        }
        else if(e.target.name === 'password' && !e.target.value.length < 8) {
          setPasswordTouched(true)
          setPasswordValidation(false)
        }
    }

    useEffect(() => {
      
    },[isLoading])

    useEffect(() => {
      setFormValid(
        emailValidation && passwordValidation 
      )
    }, [emailValidation, passwordValidation])
  

	useEffect(() => {
    if(isAuthenticated) {
      navigate('/netflix')
    }
	  },[isAuthenticated])


    const submitHandler = (e) => {
      e.preventDefault()
      setEmailTouched(true)
      setPasswordTouched(true)
      dispatch(logIn(data))

      if(isAuthenticated) {
        console.log('logged in');
        navigate('/netflix/profile')
      }
    }



  return <div className="netflix-login-page-container">
    <div className="netflix-login-page-container-leftSide"> </div>
    <div className="netflix-login-page-container-rightSide">
        <h2>Home Delivery</h2>
      {!isLoading && <form onSubmit={submitHandler} className="netflix-login-page-form">
        
            <div className="form-group">
                <input type='email' placeholder="Enter Email" name='email' defaultValue={data.email}  onChange={handler} required />
                {emailValid &&  <p className="input-feedback">Please Enter Valid Email</p>}
            </div>

            <div className="form-group">
                <input type='password' placeholder="Enter Password" name="password" value={data.password}  onChange={handler} />
                {passwordValid && <p className="input-feedback">Please Enter Valid Password</p>}
            </div>
            <Link style={{fontFamily:'sans-serif',fontSize:'17px',marginLeft:'15%',marginBottom:'.5rem',color:'red',textDecoration:'none'}}>Forgot Password</Link>


            {isLoading ? <button type="submit" disabled={!formValid}>Logging</button> : <button type="submit" disabled={!formValid}>Login</button>}
            {/* <button type="submit" disabled={!formValid}>Submit</button> */}
            </form>}
            <p style={{fontFamily:'sans-serif',fontSize:'17px',marginLeft:'15%',marginTop:'0.5rem'}}>Don't have an account? <Link to='/netflix/register' style={{color:'red',textDecoration:'none'}}>Sign Up!</Link></p>
        {isLoading && <LoginLoadingModel />}
    </div>
</div>
};

export default LoginPage;
