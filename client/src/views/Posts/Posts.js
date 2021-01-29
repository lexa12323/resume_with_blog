import React from 'react'
import moment from 'moment'
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

    const user= JSON.parse(localStorage.getItem('profile'))
    const isOwner = post.creator === user?.result._id;
    return (
        <div className="post posts__item">
            <div className="post__date_container">
                <img className="post__image" src="https://themes.themeregion.com/geek/wp-content/uploads/2017/04/2-2.jpg"  alt="post_img"/>
                <div className="post__date">{moment(createdAt).fromNow()}</div>
            </div>
            <div className="post__title">{title}</div>
            <div className="post__crator">{creator}</div>
            <div className="post__meta">{tags.map((tag) => `#${tag}`)}</div>
            {isOwner &&<button onClick={() => {setCurrentId(_id)}}>Update</button>}
            {isOwner && <button onClick={() => {dispatch(deletePost(post._id))}}>Delete</button> }
            <button onClick={() => {dispatch(likePost(post._id))}}>Like {likes.length}</button>
        </div>
    )
}
