import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import { Posts } from './Posts'
import { Form } from '../Form/Form'
import { getPosts } from '../../actions/posts'

const PostsContainer = () => {
    const [currentId, setCurrentId] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())
    }, [currentId, dispatch])

    return(
        <div>
            <h1>Posts</h1>
            <Posts setCurrentId={setCurrentId}/>
            <Form currentId={currentId} setCurrentId={setCurrentId}/>
        </div>
    )
}

export default PostsContainer