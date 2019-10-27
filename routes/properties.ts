var express = require('express');

import { Router } from "express";

import { add, getOne, getAll, edit } from "./controllers/property";

var propertyRouter: Router = express.Router();

propertyRouter.get('/', getAll);
propertyRouter.get('/:id', getOne);
propertyRouter.post('/', add);
propertyRouter.put('/:id', edit);

export {
    propertyRouter
};
