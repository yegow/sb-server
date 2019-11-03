"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var property_1 = require("./controllers/property");
var auth = require('./middleware/auth').auth;
var propertyRouter = express.Router();
exports.propertyRouter = propertyRouter;
propertyRouter.get('/', property_1.getAll);
propertyRouter.get('/:id', property_1.getOne);
propertyRouter.post('/', auth, property_1.add);
propertyRouter.put('/:id', auth, property_1.edit);
//# sourceMappingURL=properties.js.map