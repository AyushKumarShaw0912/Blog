import { collection, deleteDoc, doc, onSnapshot, setDoc } from 'firebase/firestore'
import React from 'react'
import { useEffect } from 'react'
import {auth,db} from "../firebase"
import { useState } from 'react'
import { FaHeart } from "react-icons/fa";
import { BsHeart } from "react-icons/bs";

const Actions = ({post,isAuth}) => {
    const [likes,setLikes]=useState([])
    const[liked,setLiked]=useState(false)
    const likePost=async()=>{
        if(liked){
          await deleteDoc(doc(db,"posts",post.id,"likes",auth.currentUser.uid))
        }
        else{
          await setDoc(doc(db,"posts",post.id,"likes",auth.currentUser.uid),{
            userId:auth.currentUser.uid,
          })
        }
      }
       useEffect(()=>{
          const unSub=onSnapshot(collection(db,"posts",post.id,"likes"),
          (snapshot)=>setLikes(snapshot.docs)
          );
          return ()=>{
            unSub()
          }
        },[post.id])
        useEffect(()=>{
            setLiked(likes.findIndex((like)=>like.id===auth.currentUser?.uid)!==-1)
            },[likes])
  return (
    <>   
{liked?(
      <div className="like">
    
            <FaHeart className='fav' onClick={(e)=>{likePost()}} />{likes.length}
            </div>):(<div className="like">
                <BsHeart onClick={(e)=>{likePost()}} />{likes.length}
            </div>)}

    
    </>
  )
}

export default Actions