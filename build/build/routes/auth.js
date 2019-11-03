"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var auth_1 = require("./controllers/auth");
var auth = require('./middleware/auth').auth;
var authRouter = express.Router();
exports.authRouter = authRouter;
authRouter.post('/login', auth_1.login);
authRouter.post('/signup', auth_1.signUp);
authRouter.put('/:id', auth, auth_1.edit);
//# sourceMappingURL=auth.js.map