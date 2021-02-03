import React from 'react'
import moment from 'moment'
import { useSelector } from 'react-redux'
import './posts.scss'

export const Posts = ({posts, setCurrentId, deletePost, likePost, dispatch}) => {
    return (
        <div className="posts">
            { posts.map((post) => <Post 
                key={post._id} 
                post={post} 
                setCurrentId={setCurrentId}
                deletePost={deletePost}
                likePost={likePost}
                dispatch={dispatch}
                >
                    {post.message}
                </Post>) 
            }
        </div>
    )
}

export const Post = ({ post, setCurrentId, dispatch, deletePost, likePost }) => {

    const { _id, creator, title, message, tags, selectedFile, createdAt, likes  } = post
    const user = useSelector((state) => state.auth)
    const isOwner = post.creator === user?.authData?.result._id;
    return (
        <div className="post posts__item">
            <div className="post__date_container">
                <img className="post__image" src={`http://localhost:5000/uploads/${selectedFile}`}  alt="post_img"/>
                <div className="post__date">{moment(createdAt).fromNow()}</div>
            </div>
            <div className="post__title">{title}</div>
            <div className="post__message">{message}</div>
            <div className="post__meta">{tags.map((tag) => `#${tag}`)}</div>
            {isOwner &&<button onClick={() => {setCurrentId(_id)}}>Update</button>}
            {isOwner && <button onClick={() => {dispatch(deletePost(post._id))}}>Delete</button> }
            <button onClick={() => {dispatch(likePost(post._id))}}>Like {likes.length}</button>
        </div>
    )
}
