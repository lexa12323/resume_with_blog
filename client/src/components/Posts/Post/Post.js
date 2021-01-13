import React from 'react'
import moment from 'moment'
import './post.scss'

export const Post = ({children, post, setCurrentId}) => {
    const { _id, creator, title, message, tags, selectedFile, createdAt, likeCount  } = post
    return (
        <div>
            { selectedFile && <img src={selectedFile} alt={title}/> }
            {  moment(createdAt).fromNow() }
            
            {tags.map((tag) => `#${tag}`)}

            { message }  
            <button onClick={() => {setCurrentId(_id)}}>Update</button>
            <button onClick={() => {}}>{likeCount}</button>
            <button onClick={() => {}}>Delete</button>
        </div>
    )
}
