var express = require('express');

import { Router } from "express";

import { add, getOne, getAll, edit } from "./controllers/property";
const { auth } = require('./middleware/auth');

var propertyRouter: Router = express.Router();

propertyRouter.get('/', getAll);
propertyRouter.get('/:id', getOne);
propertyRouter.post('/', auth, add);
propertyRouter.put('/:id', auth, edit);

export {
    propertyRouter
};
