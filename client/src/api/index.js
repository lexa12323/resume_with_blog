import axios from 'axios'

const url = 'http://localhost:5000';

export const fetchPosts = () => axios.get(`${url}/posts`) 
export const createPost = (newPost) => axios.post(`${url}/posts`, newPost ) 
export const updatePost = (_id, updatedPost) => axios.patch(`${url}/posts/${_id}`, updatedPost) 