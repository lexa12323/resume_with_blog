import express from 'express';
import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js'
import auth from '../middleware/auth.js'
import { uploadSingleFile } from '../middleware/multer.js'

const router = express.Router()

router.get('/', auth, getPosts);
router.post('/', [auth, uploadSingleFile], createPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', likePost);

export default router;