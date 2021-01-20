import React from 'react'
import { useSelector } from 'react-redux'
import { Post } from './Post/Post'
import styles from  './posts.module.css'
import './posts.scss'

export const Posts = ({setCurrentId}) => {
    const posts = useSelector((state) => state.posts)
    return (
        <div>
            <p className={styles.posts}>Posts</p>
            <p className="posts__wrapper">Posts</p>
            { posts.map((post) => <Post key={post._id} post={post} setCurrentId={setCurrentId}>{post.message}</Post>) }
        </div>
    )
}
