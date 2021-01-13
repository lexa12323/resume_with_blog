import React, { useState } from 'react'
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux'
import styles from './form.module.css' 
import { createPost } from '../../actions/posts'

export const Form = () => {

    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    })

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPost(postData))
    }
    
    return (
        <div>
            <p className={styles.posts}>Form</p>
            <form onSubmit={handleSubmit}>
                <input 
                    name = "creator"
                    value={postData.creator}
                    onChange = {(e) => setPostData({ ...postData, creator: e.target.value})}
                />
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
                    onChange = {(e) => setPostData({ ...postData, tags: e.target.value})}
                />
                <FileBase 
                    type="file"
                    multiple={false}
                    onDone={({base64}) => setPostData({ ...postData, selectedFile: base64})}
                />
                <button>Сохранить</button>
            </form>
            
        </div>
    )
}