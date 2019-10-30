var express = require('express');

import { Router } from "express";

import { add, getOne, getAll, edit } from "./controllers/category";
const { auth } = require('./middleware/auth');

var categoryRouter: Router = express.Router();

categoryRouter.get('/', getAll);
categoryRouter.get('/:id', getOne);
categoryRouter.post('/', auth, add);
categoryRouter.put('/:id', auth, edit);

export {
    categoryRouter
}
