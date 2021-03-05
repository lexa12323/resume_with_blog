import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'

import { Page } from  '../../views/Page/Page'
import { Layout } from '../../views/Layout/Layout'
import { useSelector } from 'react-redux'
import { Posts } from '../../views/Posts/Posts'
import { Filter } from '../../views/posts/Filter/Filter'
import { Form } from '../Form/Form'
import { getPosts, deletePost, likePost } from '../../actions/posts'
import { getCategories } from '../../actions/postCategory'

const PostsContainer = () => {
    const [currentId, setCurrentId] = useState(null)
    const [filter, setFilter] = useState(null)
    const dispatch = useDispatch()

    const title = 'Blog';
    const subtitle = 'News & Update';
    const description = '';

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
                <Filter categories={categories.list} onChange={setFilter}/>
                <Posts 
                    setCurrentId={setCurrentId} 
                    posts={posts} 
                    deletePost={(id) => dispatch(deletePost(id))} 
                    likePost={(id) => dispatch(likePost(id))} 
                    filter={filter}
                />
                {user.authData && categories.loaded && <Form currentId={currentId} categories={categories.list} setCurrentId={setCurrentId}/> }
            </Page>
        </Layout>
    )
}

export default PostsContainer