var express = require('express');

import { Router } from "express";

import { login, signUp, edit } from "./controllers/auth";

var authRouter: Router = express.Router();

authRouter.post('/login', login);
authRouter.post('/signup', signUp);
authRouter.put('/:id', edit);

export {
    authRouter
}
