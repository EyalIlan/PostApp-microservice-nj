import  Axios  from 'axios';
import React, {useState ,FormEvent} from 'react';


const CommentCreate:React.FC<{postId:number}> = ({postId}) => {
  
    const [comment,SetComment] = useState('')
    
    const SubmitedForm = async (e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        console.log('In form');
        // posts/:id/comments
        const responce = await Axios.post(`http://localhost:5001/posts/${postId}/comments`,{comment})
        console.log(responce);
        
        SetComment('')
    }


    return (
    <div className='d-flex justify-content-around flex-column'>
        <form action='' onSubmit={SubmitedForm} className='form-group'>
            <label htmlFor="comment">
                <p>comment</p>
            </label>
            <input className="form-control"  onChange={(e) => SetComment(e.target.value)} />
            <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
    </div>
  )
}

export default CommentCreate
