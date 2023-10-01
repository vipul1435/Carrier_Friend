import express from 'express';
import { logIn, logout, signUp,verifyUser } from '../controllers/Auth.js';
const router = express.Router();
router.post('/signup',signUp);
router.post('/login',logIn);
router.get('/verify',verifyUser);
router.get('/logout',logout);
export default router;