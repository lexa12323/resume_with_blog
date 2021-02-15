import express from 'express';
import { signin, signup, generateRefreshToken } from '../controllers/user.js'

const router = express.Router()

router.post('/signin', signin);
router.post('/signup', signup);
router.post('/refresh_token', generateRefreshToken);

export default router;