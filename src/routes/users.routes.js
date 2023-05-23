const { Router } = require('express');
const { create, login, activate } = require('../controllers/users.controller');
const routes = Router();

routes.post('/api/users', create);
routes.post('/api/login', login);
routes.get('/api/users/:id/activate', activate);

module.exports = routes;