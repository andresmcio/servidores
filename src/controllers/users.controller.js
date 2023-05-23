const jwt = require('jsonwebtoken');
const User = require('../database/models/user.model');
const bcrypt = require('bcrypt');

module.exports = {
    create: (req, res, next) => {
        User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            bio: req.body.bio,
        })
        .then((user) => {
            res.status(201).json(user);
        }
        )
        .catch(next);
    },
    login: (req, res, next) => {
        User.findOne({ email: req.body.email })
        .then((user) => {
            if(user){
                user.checkPassword(req.body.password)
                .then((match) => {
                    if(match){
                        const secret = "Holi";
                        const token = jwt.sign({ sub: user.id, exp: Date.now() + 1800 }, secret);
                        res.status(200).json({ token });
                    } else {
                        res.status(401).json({ message: 'Invalid credentials' });
                    }
                })
                .catch(next);
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        })
        .catch(next);
    }     
};