import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './form.module.css' 
import { createPost, updatePost } from '../../actions/posts'

export const Form = ({currentId, setCurrentId, categories}) => {

    const defaultPostData = {
        title: '',
        message: '',
        tags: '',
        selectedFile: '',
        category: categories[0]._id,
    }
    
    const [postData, setPostData] = useState(defaultPostData)
    const fileRef = useRef(null)
    const post = useSelector((state) => currentId ? state.posts.find((p)=> p._id ===currentId) : null)

    useEffect(() => {
        if(post) setPostData(post)
    }, [post])

    const dispatch = useDispatch()

    const clear = () => {
        setCurrentId(null)
        setPostData(defaultPostData)
        fileRef.current.value = null
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.entries(postData).map(([key, value]) => formData.append(key, value))
        
        if (currentId){
            dispatch(updatePost(currentId, formData))
        } else {
            dispatch(createPost(formData))
            
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
                <select 
                    name="category" 
                    onChange = {(e) => setPostData({ ...postData, category: e.target.value})}
                    value={postData.category}
                >
                        {categories.map((item) => <option key={item._id} value={item._id}>{item.name}</option>)}
                </select>
                <input type="file" ref={fileRef} name="selectedFile" onChange = {(e) => setPostData({ ...postData, selectedFile: e.target.files[0]})} />
                
                <button>Сохранить</button>
                <button type="button" onClick={() => clear()}>Clear</button>
            </form>
            
        </div>
    )
}