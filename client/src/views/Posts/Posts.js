import React from 'react'
import moment from 'moment'
import { useSelector } from 'react-redux'
import './posts.scss'

export const Posts = ({posts, setCurrentId, deletePost, likePost, dispatch, filter}) => {
    const filteredPosts = filter ? posts.filter(post => post.category && post.category._id === filter) : posts;
    return (
        <div className="posts">
            { filteredPosts.map((post) => <Post 
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

    const { _id, creator, category, title, message, tags, selectedFile, createdAt, likes  } = post
    const user = useSelector((state) => state.auth)
    const isOwner = post?.creator?._id === user?.authData?.result._id;
    return (
        <div className="post posts__item">
            <div className="post__date_container">
                <img className="post__image" src={`http://localhost:5000/uploads/${selectedFile}`}  alt="post_img"/>
                <div className="post__date">{moment(createdAt).fromNow()}</div>
            </div>
            <div className="post__title">{title}</div>
            <div className="post__message">{message}</div>
            { category && <div className="post__category">Category: {category?.name}</div> }
            { creator && <div className="post__creator">Creator: {creator?.email}</div> }
            <div className="post__meta">{tags.map((tag) => `#${tag}`)}</div>
            {isOwner &&<button onClick={() => {setCurrentId(_id)}}>Update</button>}
            {isOwner && <button onClick={() => {dispatch(deletePost(post._id))}}>Delete</button> }
            <button onClick={() => {dispatch(likePost(post._id))}}>Like {likes.length}</button>
        </div>
    )
}
