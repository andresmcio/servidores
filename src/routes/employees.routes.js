const { Router } = require('express');
const { getAll, findOldest, create, findByName } = require('../controllers/employees.controller');
const routes = Router();
const validateEmployee = require('../middlewares/validEmployee');

routes.get('/api/employees', getAll);
routes.get('/api/employees/oldest', findOldest);
routes.get('/api/employees/:name', findByName);
routes.post('/api/employees', validateEmployee, create);

module.exports = routes;