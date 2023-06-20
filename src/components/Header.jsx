import React from 'react'
import "../styles/header.css";
import {Link} from "react-router-dom"
import {signOut} from "firebase/auth"
import {auth} from "../firebase"
import { MdLogout } from "react-icons/md";
const Header = ({isAuth,setIsAuth}) => {
    const signoutuser=()=>{
        return(
signOut(auth).then(()=>{
    setIsAuth(false)
    localStorage.clear()
    window.location.pathname="/login"
}
)
        )
    }
  return (
    <>
    <nav className='nav'>
        <Link  className='link' to="/">Home</Link>
{isAuth?(<>
    <Link  className='link' to="/create">Create Post</Link>
    <MdLogout onClick={signoutuser} className='icon login'/>

</>
       
        
        ):(<>
        <div className='login'>
        <Link  className='link' to="/login">Sign in</Link>
    
        </div>
        </>)
        
        }
    </nav>
    </>
  )
}

export default Header