import React from 'react'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import './post.scss'

import {deletePost, likePost} from '../../../actions/posts' 

export const Post = ({children, post, setCurrentId}) => {
    const { _id, creator, title, message, tags, selectedFile, createdAt, likeCount  } = post
    const dispatch = useDispatch()
    return (
        <div>
            { selectedFile && <img src={`http://localhost:5000/uploads/${selectedFile}`} alt={title}/> }
            {  moment(createdAt).fromNow() }
            
            {tags.map((tag) => `#${tag}`)}

            { message }  
            <button onClick={() => {setCurrentId(_id)}}>Update</button>
            <button onClick={() => {dispatch(deletePost(post._id))}}>Delete</button>
            <button onClick={() => {dispatch(likePost(post._id))}}>Like {likeCount}</button>
        </div>
    )
}
