import express from 'express';
import { logIn, signUp,verifyUser } from '../controllers/Auth.js';
const router = express.Router();
router.post('/signup',signUp);
router.post('/login',logIn);
router.get('/verify',verifyUser);
export default router;