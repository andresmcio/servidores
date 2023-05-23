const jwt = require('jsonwebtoken');
const user = require('../database/models/user.model');

function authenticateToken(req, res, next) {
  try {
    const token = req.headers.authorization.split('Bearer ')[1];
    const { sub } = jwt.verify(token, 'Holi');

    if (sub){
        user.findById(sub)
        .populate('posts')
        .then((user) => {
            if(user){
                req.user = user;
                next();
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        })
        .catch(next);
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (err) {
    if (err instanceof jwt.TokenExpiredError) {
        res.status(401).json({ message: 'Token expired' });
    } else if (err instanceof jwt.JsonWebTokenError) {
        res.status(401).json({ message: 'Invalid token' });
    } else if (err instanceof TypeError) {
        res.status(401).json({ message: 'Missing Token' });
    }

    res.status(401).json({ message: 'Unauthorized' });
  }
}

module.exports = authenticateToken;