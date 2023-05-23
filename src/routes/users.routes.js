const { Router } = require('express');
const { create, login } = require('../controllers/users.controller');
const routes = Router();

routes.post('/api/users', create);
routes.post('/api/login', login);

module.exports = routes;