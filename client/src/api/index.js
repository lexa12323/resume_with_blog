import axios from 'axios'
import { apiInterceptors, apiInterceptorsAsync } from './setHeaders'

const API = axios.create({baseUrl: "http://localhost:5000"});
apiInterceptors(API);
apiInterceptorsAsync(API);

export const fetchPosts = () => API.get(`/posts`) 
export const createPost = (newPost) => API.post(`/posts`, newPost ) 
export const updatePost = (_id, updatedPost) => API.patch(`/posts/${_id}`, updatedPost) 
export const deletePost = (_id) => API.delete(`/posts/${_id}`) 
export const likePost = (_id) => API.patch(`/posts/${_id}/likePost`)


export const fetchCategories = () => API.get(`/posts/categories`)

export const signin = (formData) => API.post(`/user/signin`, formData)
export const signup = (formData) => API.post(`/user/signup`, formData)
export const refreshToken = (body) => API.post(`/auth/refresh_token`, body);