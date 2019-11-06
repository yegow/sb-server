var express = require('express');

import { Router } from "express";

import { add, getOne, getAll, edit } from "./controllers/category";
const { auth } = require('./middleware/auth');

var categoryRouter: Router = express.Router();

categoryRouter.get('/:id', getOne);
categoryRouter.get('/', getAll);
categoryRouter.post('/', auth, add);
categoryRouter.put('/:id', auth, edit);

export {
    categoryRouter
}
