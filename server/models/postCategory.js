import mongoose from 'mongoose';

const categorySchema = mongoose.Schema({
    name: String,
})

const PostCategory = mongoose.model('PostCategory', categorySchema)

export default PostCategory;