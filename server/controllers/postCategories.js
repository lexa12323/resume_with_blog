import PostCategory from '../models/postCategory.js'

export const getCategories = async (req, res) => {
    
    try {
        const postCategories = await PostCategory.find()
        res.status(200).json(postCategories)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const createCategory = async (req, res) => {
    
    const { body } = req;
    const newCategory = new PostCategory({...body})

    try {
        await newCategory.save()
        res.status(201).json(newCategory)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}