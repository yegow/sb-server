var express = require('express');

import { Router } from "express";

import { add, getOne, getAll, edit } from "./controllers/category";

var categoryRouter: Router = express.Router();

categoryRouter.get('/', getAll);
categoryRouter.get('/:id', getOne);
categoryRouter.post('/', add);
categoryRouter.put('/:id', edit);

export {
    categoryRouter
}
