import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'

import { Page } from  '../../views/Page/Page'
import { Layout } from '../../views/Layout/Layout'
import { useSelector } from 'react-redux'
import { Posts } from '../../views/Posts/Posts'
import { Form } from '../Form/Form'
import { getPosts, deletePost, likePost } from '../../actions/posts'
import { getCategories } from '../../actions/postCategory'

const PostsContainer = () => {
    const [currentId, setCurrentId] = useState(null)
    const dispatch = useDispatch()

    const title = 'Blog';
    const subtitle = 'News & Update';
    const description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.';

    const posts = useSelector((state) => state.posts)
    const user = useSelector((state) => state.auth)
    const categories = useSelector((state) => state.postCategories)

    useEffect(() => {
        dispatch(getPosts())
        !categories.loaded && !categories.loading && dispatch(getCategories())
    }, [currentId, dispatch])

    return(
        <Layout>
            <Page title={title} subtitle={subtitle} description={description} darken>
                <Posts 
                    setCurrentId={setCurrentId} 
                    posts={posts} 
                    deletePost={deletePost} 
                    likePost={likePost} 
                    dispatch={dispatch}
                />
                {user.authData && categories.loaded && <Form currentId={currentId} categories={categories.list} setCurrentId={setCurrentId}/> }
            </Page>
        </Layout>
    )
}

export default PostsContainer