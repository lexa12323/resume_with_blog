import PostMessage from '../models/postMessage.js'
import mongoose from 'mongoose'

export const getPosts = async (req, res) => {
    
    try {
        const postMessages = await PostMessage.find()
        console.log(postMessages)
        res.status(200).json(postMessages)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const createPost = async (req, res) => {
    
    const { body } = req;
    const newPost = new PostMessage(body)

    try {
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

export const updatePost = async (req, res) => {
    
    const { params, body } = req;
    const { id: _id } = params;
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).json({message: 'Id not found'})
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, body, {new: true})
    res.status(200).json(updatedPost)
    //const newPost = new PostMessage(body)

    try {
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}