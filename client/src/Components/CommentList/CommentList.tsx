import React, { FC,useState,useEffect} from 'react'
import Axios from 'axios'

interface Props  {
    postId:string
}

const CommentList:React.FC<Props> = ({postId}) => {
    
    const [comments,setComments] = useState([])
    
    useEffect(() =>{
    
        const GetComments = async () =>{
            const responce = await Axios.get(`http://localhost:5001/posts/${postId}/comments`)
            console.log(responce.data);
                        
            setComments(responce.data)
        }
        GetComments()
    },[])
  
  const CommentsList = comments.map((p:{comment:string,id:number}) =>{
     return <li key={p.id}>{p.comment}</li>
  })
  
    return (
        <ul>
            {CommentsList}
        </ul>
  )
}

export default CommentList