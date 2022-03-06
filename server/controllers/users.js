import mongoose from 'mongoose';
import User from '../models/user.js';
import bcrypt from 'bcryptjs';
import data from '../data.js';
import { generateToken } from '../utils.js';

export const createAdmins = async (req,res) => {
const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
}
export const signin = async (req,res) => {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
          if (bcrypt.compareSync(req.body.password, user.password)) {
            res.send({
              _id: user._id,
              name: user.name,
              email: user.email,
              isAdmin: user.isAdmin,
              token: generateToken(user),
            });
            return;
          }
        }
        res.status(401).send({ message: 'Invalid email or password' });
}

export const signup = async (req,res) => {
    const newUser = new User({ name: req.body.name,
        email: req.body.email,password: bcrypt.hashSync(req.body.password,8)
       });
       await newUser.save();
       res.send({
           _id: newUser._id,
           name: newUser.name,
           email: newUser.email,
           isAdmin: newUser.isAdmin,
           token: generateToken(newUser),
         });
     if (user) {
       if (bcrypt.compareSync(req.body.password, user.password)) {
         res.send({
           _id: user._id,
           name: user.name,
           email: user.email,
           isAdmin: user.isAdmin,
           token: generateToken(user),
         });
         res.status(200).send({ message: 'Registered' });
         return;
       }
     }
     res.status(401).send({ message: 'Invalid email or password' });
}