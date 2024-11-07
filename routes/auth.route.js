import express from 'express';
import { login, logout, signup } from "../controllers/auth.controller.js";
import { authMiddleware } from '../middlware/auth.js'; 

const route = express.Router();

route.post('/register', signup);
route.post('/login', login);
route.post('/logout', authMiddleware, logout); 

export default route;
