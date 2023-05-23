const { readFileSync } = require('fs');
const { resolve } = require('path');

module.exports = {
    getAll: (req, res) => {
        let data = readFileSync(resolve(__dirname, '../database/data/employees.json'));
        const employees = JSON.parse(data);
        return res.json(employees);
    }
};