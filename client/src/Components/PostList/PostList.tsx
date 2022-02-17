import React,{ useState,useEffect } from 'react';
import Axios from 'axios'
import CommentCreate from '../CommentCreate/CommentCreate';

export default function PostList(){

    
   const [posts,setPosts] = useState({})

    useEffect(() =>{

    const FetchPosts = async () =>{
            const responce = await Axios.get('http://localhost:5000/posts')
            setPosts(responce.data)
    }
    FetchPosts()

    },[])

    const Values = Object.values(posts).map((p:any,index:number) =>{
        return( 
        <div style={{width:'30%',marginBottom:'20px'}} key={index} className='card'>
            <div className='card-body'>
                <h3>{p.title}</h3>
                <CommentCreate></CommentCreate>
            </div>
        </div> 
        )
    })
    console.log(Values);

  return (
    <div>
        PostList
        {Values}
    </div>
  )
}
