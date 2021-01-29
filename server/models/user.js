import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    id: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const PostMessage = mongoose.model('User', userSchema)

export default PostMessage;