import PostMessage from '../models/postMessage.js'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'

export const getPosts = async (req, res) => {
    
    try {
        const postMessages = await PostMessage.find().sort({'createdAt': -1}).populate('category').populate('creator', 'email')
        res.status(200).json(postMessages)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const createPost = async (req, res) => {
    
    const { body, file } = req;

    let creatorPayload;

    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer'){
        const creatorToken = req.headers.authorization.split(' ')[1];
        creatorPayload = jwt.verify(creatorToken, process.env.ACCESS_TOKEN_SECRET);
    }
    const { tags } = body
    const tagsArray = tags.split(', ')

    const newPost = new PostMessage({...body, tags: tagsArray,  creator: creatorPayload._id, selectedFile: file?.filename})

    try {
        await newPost.save()
        const postData = await newPost.populate('category').populate('creator', 'email').execPopulate()
        res.status(201).json(postData)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

export const updatePost = async (req, res) => {
    
    const { params, body } = req;
    const { id: _id } = params;
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).json({message: 'Id not found'})
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, { ...body, _id  }, {new: true})
    res.status(200).json(updatedPost)

    try {
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

export const deletePost = async (req, res) => {
    const { params, body } = req;
    const { id } = params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({message: 'Id not found'})
    await PostMessage.findByIdAndRemove(id)
    res.status(200).json({id, message: 'post delete success'})
}


export const likePost = async (req, res) => {
    
    const { params, body, headers } = req;
    const { devicefingerprint } = headers
    const { id } = params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({message: 'Id not found'})
    if (!devicefingerprint) return res.status(404).json({message: 'no devicefingerprint'})
    const post = await PostMessage.findById(id)

    const index = post.likes.findIndex((id) => id === String(devicefingerprint))

    if (index === -1){
        post.likes.push(devicefingerprint)
    } else {
        post.likes = post.likes.filter((id) => id !== String(devicefingerprint))
    }
    
    const updatedPost = await PostMessage.findByIdAndUpdate(id, post, {new: true}).populate('category').populate('creator', 'email')

    res.json(updatedPost)
}