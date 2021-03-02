import axios from 'axios'
import { apiInterceptors, apiInterceptorsAsync } from './setHeaders'

const API = axios.create({baseUrl: "http://localhost:5000"});
apiInterceptors(API);
apiInterceptorsAsync(API);

export const fetchPosts = () => API.get(`/api/posts`) 
export const createPost = (newPost) => API.post(`/api/posts`, newPost ) 
export const updatePost = (_id, updatedPost) => API.patch(`/api/posts/${_id}`, updatedPost) 
export const deletePost = (_id) => API.delete(`/api/posts/${_id}`) 
export const likePost = (_id) => API.patch(`/api/posts/${_id}/likePost`)


export const fetchCategories = () => API.get(`/api/posts/categories`)

export const signin = (formData) => API.post(`/api/user/signin`, formData)
export const signup = (formData) => API.post(`/api/user/signup`, formData)
export const refreshToken = (body) => API.post(`/api/auth/refresh_token`, body);

export const fetchSkills = () => API.get(`/api/skills`) 