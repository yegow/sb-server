var express = require('express');

import { Router } from "express";

import { add, getOne, getAll, destroy } from "./controllers/order";

var orderRouter: Router = express.Router();

orderRouter.get('/', getAll);
orderRouter.get('/:id', getOne);
orderRouter.post('/', add);
orderRouter.delete('/:id', destroy);

export {
    orderRouter
}
