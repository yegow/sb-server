"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var order_1 = require("./controllers/order");
var auth = require('./middleware/auth').auth;
var orderRouter = express.Router();
exports.orderRouter = orderRouter;
orderRouter.get('/', order_1.getAll);
orderRouter.get('/:id', order_1.getOne);
orderRouter.post('/', auth, order_1.add);
orderRouter.delete('/:id', auth, order_1.destroy);
//# sourceMappingURL=orders.js.map