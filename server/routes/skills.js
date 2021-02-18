import express from 'express';
import { getSkills, create } from '../controllers/skills.controller.js'

const router = express.Router()

router.get('/', getSkills);
router.post('/create', create);

export default router;