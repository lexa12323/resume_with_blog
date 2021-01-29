import PostMessage from '../models/postMessage.js'
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/user.js'


export const signin = async (req, res) => {
    const {email, password} = req.body
    try {
        
        const existingUser = await User.findOne({email})

        if (!existingUser){
            return res.status(401).json({message: 'User doesnt exists'})
        }

        const isPaswordCorrent = await bcrypt.compare(password, existingUser.password)

        if (!isPaswordCorrent){
            return res.status(401).json({message: 'User password incorrect'})
        }

        const token = jwt.sign({email:existingUser.email, password: existingUser.password, id:existingUser._id }, 'secret', { expiresIn: '1h'})
        res.status(200).json({result: existingUser, token})
    } catch (error) {
        res.status(500).json(error)
    }
}

export const signup = async (req, res) => {
    const {email, password} = req.body
    try {
        
        const existingUser = await User.findOne({email})

        if (existingUser){
            return res.status(401).json({message: 'User already exists'})
        }

        const hashedPAssword = await bcrypt.hash(password, 12)

        const result = await User.create({email, password: hashedPAssword})

        const token = jwt.sign({email:result.email, password: result.password, id:result._id }, 'secret', { expiresIn: '1h'})

        res.status(200).json({result: result, token})
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}