"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken = require('jsonwebtoken');
var createResponse = require('../controllers/create-response').createResponse;
var auth = function (req, res, next) {
    try {
        if (req.headers.authorization) {
            var token = req.headers.authorization.split(' ')[1];
            var decodedToken = jsonwebtoken.verify(token, process.env.APP_SECRET);
            var userId = decodedToken.userId;
            var bodyId = req.body.userId;
            if (bodyId && bodyId == userId) {
                next();
            }
            else {
                throw new Error("Invalid user ID.");
            }
        }
        else {
            res.status(401).json(createResponse('fail', 'Unauthorized request'));
        }
    }
    catch (e) {
        res.status(401).json(createResponse('fail', 'Unauthorized request'));
    }
};
module.exports = {
    auth: auth
};
//# sourceMappingURL=auth.js.map