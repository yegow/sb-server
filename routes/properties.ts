var express = require('express');

import { Router } from "express";

import { add, getOne, getAll, edit } from "./controllers/property";
const { auth } = require('./middleware/auth');

var propertyRouter: Router = express.Router();

propertyRouter.get('/:id', getOne);
propertyRouter.get('/', getAll);
propertyRouter.post('/', auth, add);
propertyRouter.put('/:id', auth, edit);

export {
    propertyRouter
};
