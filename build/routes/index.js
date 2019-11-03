"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var categories_1 = require("./categories");
var properties_1 = require("./properties");
var orders_1 = require("./orders");
var auth_1 = require("./auth");
var reviews_1 = require("./reviews");
var apiRouter = express_1.default.Router();
exports.apiRouter = apiRouter;
apiRouter.use('/auth', auth_1.authRouter);
apiRouter.use('/properties', properties_1.propertyRouter);
apiRouter.use('/categories', categories_1.categoryRouter);
apiRouter.use('/orders', orders_1.orderRouter);
apiRouter.use('/reviews', reviews_1.reviewRouter);
//# sourceMappingURL=index.js.map