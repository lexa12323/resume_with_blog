import React, {useEffect, useState} from 'react'
import './app.css'
import { useDispatch } from 'react-redux'
import { Posts } from './components/Posts/Posts'
import { Form } from './components/Form/Form'
import { getPosts } from './actions/posts'
import { Layout } from './views/Layout/Layout'

const App = () => {
    const [currentId, setCurrentId] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())
    }, [currentId, dispatch])

    return(
        <Layout>

            <h1>App</h1>
            <Posts setCurrentId={setCurrentId}/>
            <Form currentId={currentId} setCurrentId={setCurrentId}/>
        </Layout>
    )
}

export default App
