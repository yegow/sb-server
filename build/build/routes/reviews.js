"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var review_1 = require("./controllers/review");
var auth = require('./middleware/auth').auth;
var reviewRouter = express.Router();
exports.reviewRouter = reviewRouter;
reviewRouter.get('/', review_1.getAll);
reviewRouter.get('/:id', review_1.getOne);
reviewRouter.post('/', auth, review_1.add);
reviewRouter.put('/:id', auth, review_1.edit);
reviewRouter.delete('/:id', auth, review_1.destroy);
//# sourceMappingURL=reviews.js.map