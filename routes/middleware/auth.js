const jsonwebtoken = require('jsonwebtoken');

const { createResponse } = require('../controllers/create-response');

const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jsonwebtoken.verify(token, process.env.APP_SECRET);
    const userId = decodedToken.userId;

    const {userId: bodyId} = req.body;
    if (bodyId && bodyId == userId) {
      next();
    } else {
      throw new Error("Invalid user ID.");
    }
  } catch(e) {
    res.status(401).json(createResponse(
      'fail',
      'Invalid request'
    ));
  }
};

module.exports = {
  auth
}
