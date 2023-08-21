import express from 'express';
import { logIn, signUp } from '../controllers/Auth.js';
import {postContribute} from '../controllers/Contribute.js';
const router = express.Router();
router.post('/signup',signUp);
router.post('/login',logIn);
router.post('/',postContribute);
export default router;