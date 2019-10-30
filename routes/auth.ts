var express = require('express');

import { Router } from "express";

import { login, signUp, edit } from "./controllers/auth";
const { auth } = require('./middleware/auth');

var authRouter: Router = express.Router();

authRouter.post('/login', login);
authRouter.post('/signup', signUp);
authRouter.put('/:id', auth, edit);

export {
    authRouter
}
