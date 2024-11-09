import express from 'express';
import { getUserById, login, logout, signup, verifyEmail } from "../controllers/auth.controller.js";
import { authMiddleware } from '../middlware/auth.js'; 

const route = express.Router();
route.post('/register', signup);
route.post('/login', login);
route.post('/logout', authMiddleware, logout);
route.get('/verify-email', verifyEmail);
route.get('/user/:userId', getUserById);
export default route;
