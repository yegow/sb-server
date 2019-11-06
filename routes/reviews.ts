var express = require('express');

import { Router } from "express";

import { add, getOne, getAll, edit, destroy } from "./controllers/review";
const { auth } = require('./middleware/auth');

var reviewRouter: Router = express.Router();

reviewRouter.get('/:id', getOne);
reviewRouter.get('/', getAll);
reviewRouter.post('/', auth, add);
reviewRouter.put('/:id', auth, edit)
reviewRouter.delete('/:id', auth, destroy);
export {
    reviewRouter
};
