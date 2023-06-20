import React from 'react'
import "../styles/login.css"
import { RxAvatar } from "react-icons/rx";
import {auth,provider} from "../firebase"
import {signInWithPopup} from "firebase/auth"

const Login = ({setIsAuth}) => {

  const loginuser= async ()=>{
    try{
    const result = await signInWithPopup(auth,provider)
    setIsAuth(true)
    localStorage.setItem("isAuth",true)
    window.location.pathname="/"
    }catch(err){
      console.error(err)
    }

  }

  return (
    <div className='loginPage'>
      <div className="avatar">
<RxAvatar className='icons' />
       </div>

       <div className="sign">
   <h2> Sign up using your Google account</h2>
       </div>
       <button className='btn' onClick={loginuser}>
  Sign in
       </button>
    </div>
  )
}

export default Login