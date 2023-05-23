const { readFileSync } = require('fs');
const { resolve } = require('path');

module.exports = {
    getAll: (req, res) => {
        let data = readFileSync(resolve(__dirname, '../database/data/employees.json'));
        const employees = JSON.parse(data);
        let page = parseInt(req.query.page);
        const isUser = req.query.user === 'true';

        let filteredEmployees = employees;

        if (isUser) {
            filteredEmployees = employees.filter(employee => employee.privileges === 'user');
        }

        if(page) {
            const limit = 2;
            let start = (page - 1) * limit;
            let end = ((page - 1) * limit) + 1;
            let result = employees.slice(start, end);

            return res.json(result);
        }

        return res.json(filteredEmployees);
    },
    findOldest: (req, res) => {
        let data = readFileSync(resolve(__dirname, '../database/data/employees.json'));
        const employees = JSON.parse(data);
        const oldestEmployees = employees.filter(employee => employee.age === Math.max(...employees.map(emp => emp.age)));
            return res.json(oldestEmployees[0]);
        },
};