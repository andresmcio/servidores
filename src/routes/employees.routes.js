const { Router } = require('express');
const { getAll } = require('../controllers/employees.controller');
const routes = Router();

routes.get('/api/employees', getAll);

module.exports = routes;