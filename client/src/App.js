import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import { Posts } from './components/Posts/Posts'
import { Form } from './components/Form/Form'
import { getPosts } from './actions/posts'

const App = () => {
    const [currentId, setCurrentId] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())
    }, [currentId, dispatch])

    return(
        <div>
            <h1>App</h1>
            <Posts setCurrentId={setCurrentId}/>
            <Form currentId={currentId} setCurrentId={setCurrentId}/>
        </div>
    )
}

export default App
