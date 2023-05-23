const isValidEmployee = require('../validations/employee.validations');

function validateEmployee(req, res, next) {
    const employee = req.body;
  
    // Validar el formato del empleado
    if (!isValidEmployee(employee)) {
      return res.status(400).json({ code: 'bad_request' });
    }
  
    next();
  }

module.exports = validateEmployee;