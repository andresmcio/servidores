const { Router } = require('express');
const { getAll, findOldest } = require('../controllers/employees.controller');
const routes = Router();

routes.get('/api/employees', getAll);
routes.get('/api/employees/oldest', findOldest);

module.exports = routes;