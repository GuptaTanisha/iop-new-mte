import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import User from '../models/user.js';
import { createAdmins, signin, signup } from '../controllers/users.js';
const userRouter = express.Router();

userRouter.get('/seed',createAdmins);

userRouter.post('/signin', signin);

userRouter.post('/register', signup);

export default userRouter;