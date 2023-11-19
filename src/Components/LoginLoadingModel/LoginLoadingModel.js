import React, {useState, useEffect} from 'react';
import { RotatingLines } from 'react-loader-spinner';
import './LoginLoadingModel.css';


function LoginLoadingModel() {

  return (
    <div className="LoginLoadingModel-modal-style">
      <div className="LoginLoadingModel-background"> 
      <RotatingLines
					className="text-center"
					strokeColor="grey"
					strokeWidth="5"
					animationDuration="1"
					width="96"
					visible={true}
				/>
      </div>
    </div>
  )
}

export default LoginLoadingModel