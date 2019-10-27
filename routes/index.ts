import express, { Router } from "express";
import { categoryRouter } from './categories';
import { propertyRouter } from './properties';
import { orderRouter } from './orders';
import { authRouter } from './auth';

const apiRouter: Router = express.Router();

apiRouter.use('/auth', authRouter);
apiRouter.use('/properties', propertyRouter);
apiRouter.use('/categories', categoryRouter);
apiRouter.use('/orders', orderRouter);

export {
    apiRouter
}