var express = require('express');

import { Router } from "express";

import { add, getOne, getAll, edit, destroy } from "./controllers/review";

var reviewRouter: Router = express.Router();

reviewRouter.get('/', getAll);
reviewRouter.get('/:id', getOne);
reviewRouter.post('/', add);
reviewRouter.put('/:id', edit)
reviewRouter.delete('/:id', destroy);
export {
    reviewRouter
};
