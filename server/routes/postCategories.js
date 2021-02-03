import express from 'express';
import auth from '../middleware/auth.js'
import { getCategories, createCategory } from '../controllers/postCategories.js'

const router = express.Router()

router.get('/', getCategories);
router.post('/create', auth, createCategory);

export default router;