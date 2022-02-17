import  Axios  from 'axios';
import React, {useState ,FormEvent} from 'react';


const CommentCreate:React.FC<{postId:number}> = ({postId}) => {
  
    const [comment,SetComment] = useState('')
    
    const SubmitedForm = async (e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        const responce = await Axios.post(`http://localhost:5001//posts/${postId}/comments`,comment)
        console.log(responce);
        
        SetComment('')
    }


    return (
    <div>
        <form action='' onSubmit={SubmitedForm} className='form-group'>
            <label htmlFor="comment">
                comment
            </label>
            <input type="form-control" name='comment' onChange={(e) => SetComment(e.target.value)} />
        </form>
        <button type='submit' className='btn btn-primary'></button>
    </div>
  )
}

export default CommentCreate
