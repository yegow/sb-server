import { Request, Response, NextFunction } from "express";

const jsonwebtoken = require('jsonwebtoken');

const { createResponse } = require('../controllers/create-response');

const auth = (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(' ')[1];
      const decodedToken = jsonwebtoken.verify(token, process.env.APP_SECRET);
      const userId = decodedToken.userId;
      const {userId: bodyId} = req.body as { userId: number };
      if (bodyId && bodyId == userId) {
        next();
      } else {
        throw new Error("Invalid user ID.");
      }
    } else {
      res.status(401).json(createResponse(
        'fail',
        'Unauthorized request'
      ))
    }
  } catch(e) {
    res.status(401).json(createResponse(
      'fail',
      'Unauthorized request'
    ));
  }
};

module.exports = {
  auth
}
