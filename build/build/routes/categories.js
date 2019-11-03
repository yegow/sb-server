"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var category_1 = require("./controllers/category");
var auth = require('./middleware/auth').auth;
var categoryRouter = express.Router();
exports.categoryRouter = categoryRouter;
categoryRouter.get('/', category_1.getAll);
categoryRouter.get('/:id', category_1.getOne);
categoryRouter.post('/', auth, category_1.add);
categoryRouter.put('/:id', auth, category_1.edit);
//# sourceMappingURL=categories.js.map