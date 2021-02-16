import PostMessage from '../models/postMessage.js'
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/user.js'
import Token from '../models/token.js'

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
        //delete existingUser.password

        let accessToken = await existingUser.createAccessToken();
        let refreshToken = await existingUser.createRefreshToken();

        

        res.status(200).json({result: existingUser, token: accessToken, refreshToken})
    } catch (error) {
        console.log(error)
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

        const user = await User.create({email, password})

        let accessToken = await user.createAccessToken();
        let refreshToken = await user.createRefreshToken();

        res.status(200).json({result: user, token: accessToken, refreshToken})
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}

export const generateRefreshToken = async (req, res) => {
    try {
        //get refreshToken
        const { refreshToken } = req.body;
        //send error if no refreshToken is sent
        if (!refreshToken) {
            return res.status(403).json({ error: "Access denied,token missing!" });
        } else {
            //query for the token to check if it is valid:
            const tokenDoc = await Token.findOne({ token: refreshToken });
            //send error if no token found:
            if (!tokenDoc) {
                return res.status(404).json({ error: "Token not found!" });
            } else {
                //extract payload from refresh token and generate a new access token and send it
                const payload = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

                const existingUser = await User.findOne({_id: payload._id})

                let accessToken = await existingUser.createAccessToken();
                let newRefreshToken = await existingUser.createRefreshToken();

                await Token.deleteOne({ token: refreshToken });

                await new Token({ token: newRefreshToken }).save();
                //const newRefreshToken = await user.createRefreshToken();
                return res.status(200).json({ accessToken, refreshToken: newRefreshToken });
            }
        }
    } catch (error) {
        console.error({error});
        if (error.name === 'TokenExpiredError'){
            return res.status(401).json({ error: "Refresh Token expired" });
        }
        return res.status(500).json({ error: "Internal Server Error!" });
    }
};