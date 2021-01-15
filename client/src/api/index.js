import axios from 'axios'

const url = 'https://resume-with-blog.herokuapp.com';

export const fetchPosts = () => axios.get(`${url}/posts`) 
export const createPost = (newPost) => axios.post(`${url}/posts`, newPost ) 
export const updatePost = (_id, updatedPost) => axios.patch(`${url}/posts/${_id}`, updatedPost) 
export const deletePost = (_id) => axios.delete(`${url}/posts/${_id}`) 
export const likePost = (_id) => axios.patch(`${url}/posts/${_id}/likePost`) 