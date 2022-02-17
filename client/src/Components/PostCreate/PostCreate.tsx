import React,{ useState} from 'react';
import Axios from 'axios';

export default function PostCreate() {
  
    const [post,SetPost] = useState('')

    const SubmitedForm = async (e:React.FormEvent) =>{
        e.preventDefault()
        const responce = await Axios.post('http://localhost:5000/posts',{post})
        console.log(responce);
        SetPost('')
    }

    return (
    <div>
        <form action="post" onSubmit={SubmitedForm}>
            <div className="form-group">
                <label htmlFor="">
                    Post
                </label>
                <input className='form-control' onChange={(e) =>{SetPost(e.target.value)}}/>
            </div>
            <button type='submit' className='btn btn-primary'>Submit</button>
            {post}
        </form>
    </div>
  )
}
