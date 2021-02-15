import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    tags: [String],
    selectedFile: String,
    likes: {
        type: [String],
        default: [],
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "PostCategory",
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const PostMessage = mongoose.model('PostMessage', postSchema)

export default PostMessage;

