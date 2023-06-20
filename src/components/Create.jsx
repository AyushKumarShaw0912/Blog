import React, { useEffect, useState } from 'react'
import {auth,db} from "../firebase"
import {Timestamp, addDoc,collection,serverTimestamp,} from "firebase/firestore"
import '../styles/create.css'
const Create = ({isAuth}) => {
  const  postRef =collection(db,"posts")
  const [postTitle,setPostTitle]=useState("")
  const [postText,setPostText]=useState("")
  const date=new Date()
  console.log(date.getTime())
  const sendPost= async()=>{
    await addDoc(postRef,{
      title:postTitle,
      postText,
      author:{name:auth.currentUser.displayName,id:auth.currentUser.uid},
      time:Date.now()
    })
window.location.pathname="/"
  }
  useEffect(()=>{
    if(!isAuth)
      window.location.pathname="/"
  },[])
  return (
    <div className="container">
      <h1>Create a Blog Post</h1>
      <hr/>
    <div className='box'>
      <div className="title">
        <label htmlFor="postTitle">Title</label>
        <input type="text" id='postTitle'  onChange={(e)=>{setPostTitle(e.target.value)}} placeholder='Enter title here'/>
      </div>
      <div className="post">
      <label htmlFor="postText">Content</label>
  <textarea name="postText" id="postText" cols="30" rows="30" onChange={(e)=>{setPostText(e.target.value)}}  placeholder='Type here....'></textarea>
      </div>
      
      <button className='btn2' onClick={sendPost}>Create Post</button>

    </div>
    </div>
  )
}

export default Create