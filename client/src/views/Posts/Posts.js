import React from 'react'
import './posts.scss'

export const Posts = ({posts, setCurrentId}) => {
    return (
        <div class="posts">
            { posts.map((post) => <Post key={post._id} post={post} setCurrentId={setCurrentId}>{post.message}</Post>) }
        </div>
    )
}

export const Post = ({ post }) => {
    const { _id, creator, title, message, tags, selectedFile, createdAt, likeCount  } = post
    return (
        <div className="post posts__item">
            <div className="post__date_container">
                <img className="post__image" src="https://themes.themeregion.com/geek/wp-content/uploads/2017/04/2-2.jpg"  alt="post_img"/>
                <div className="post__date">{createdAt}</div>
            </div>
            <div className="post__title">{title}</div>
            <div className="post__meta">{tags.map((tag) => `#${tag}`)}</div>
        </div>
    )
}
