import React, { useState, useEffect } from 'react'
import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux'
import styles from './form.module.css' 
import { createPost, updatePost } from '../../actions/posts'

export const Form = ({currentId, setCurrentId}) => {
    const defaultPostData = {
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    }
    const [postData, setPostData] = useState(defaultPostData)

    const post = useSelector((state) => currentId ? state.posts.find((p)=> p._id ===currentId) : null)

    useEffect(() => {
        if(post) setPostData(post)
    }, [post]) 

    const dispatch = useDispatch()

    const clear = () => {
        setCurrentId(null)
        setPostData(defaultPostData)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentId){
            dispatch(updatePost(currentId, postData))
        } else {
            dispatch(createPost(postData))
            
        }
        clear()
    }
    
    return (
        <div>
            <p className={styles.posts}>Form</p>
            <p> {!currentId ? 'Creating' : 'Updating' }</p>
            <form onSubmit={handleSubmit}>
                <input 
                    name = "title"
                    value={postData.title}
                    onChange = {(e) => setPostData({ ...postData, title: e.target.value})}
                />
                <input 
                    name = "message"
                    value={postData.message}
                    onChange = {(e) => setPostData({ ...postData, message: e.target.value})}
                />
                <input 
                    name = "tags"
                    value={postData.tags}
                    onChange = {(e) => setPostData({ ...postData, tags: e.target.value.split(',')})}
                />
                <FileBase 
                    type="file"
                    multiple={false}
                    onDone={({base64}) => setPostData({ ...postData, selectedFile: base64})}
                />
                <button>Сохранить</button>
                <button type="button" onClick={() => clear()}>Clear</button>
            </form>
            
        </div>
    )
}