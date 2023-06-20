import React, { useEffect, useState } from 'react'
import '../styles/home.css'
import {auth,db} from "../firebase"
import {getDocs,collection,deleteDoc,doc,} from 'firebase/firestore'
import { MdOutlineDelete } from "react-icons/md";
import TimeAgo from 'timeago-react';
import {formatDistanceToNow} from 'date-fns'
import Actions from './Actions';

const Home = ({isAuth}) => {
  const [postList,setPostList]=useState([])
  const[loading,setIsLoading]=useState(true)
 
  const listRef=collection(db,"posts")
 
  const deletePost=async(id)=>{
    const postDoc=doc(db,"posts",id)
    await deleteDoc(postDoc)
  }

  
  useEffect(()=>{
    const getPosts= async()=>{
      const data=await getDocs(listRef)
      setPostList(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
      setIsLoading(false)
    }
    getPosts();
      },[deletePost]);

  return (
    <>
     <div className='app'>
          <h1>Blogverse 😃😃</h1>
        </div>
        {!loading?(
        <div className="blogs">
    {postList.map((post,key)=>{
      return(

        <div className="blog">
          <div className="blog_title">{post.title}
            {isAuth&&post.author.id===auth.currentUser.uid&&(<div ><MdOutlineDelete className='delIcon' onClick={()=>{deletePost(post.id)}}/></div>)}
          </div>
          <div className="blog_content"> {post.postText}</div>
          <div className="blog_details">
            <div className="details">
            Posted by :@ {post.author.name}  <span className='time'> {formatDistanceToNow(post.time?post.time:"")} ago
       </span>
            </div>
          { <Actions post={post} isAuth={isAuth}/> }
          </div>
        </div>
 
      )
    }
    )}
         </div>):
         <div className="loader"></div>}
           
    </>
  )
}

export default Home
// Posted by:@ {post.author.name}  const update=doc(db,"posts",id)
 // updateDoc(update,NoOfLikes)