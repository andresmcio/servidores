const { readFileSync } = require('fs');
const { resolve } = require('path');

module.exports = {
    getAll: (req, res) => {
        let data = readFileSync(resolve(__dirname, '../database/data/employees.json'));
        const employees = JSON.parse(data);
        let page = parseInt(req.query.page);
        const isUser = req.query.user === 'true';
        const badges = req.query.badges;

        let filteredEmployees = employees;

        if (isUser) {
            filteredEmployees = employees.filter(employee => employee.privileges === 'user');
        }

        if (badges) {
            filteredEmployees = filteredEmployees.filter(employee => employee.badges.includes(badges));
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
    create: (req, res) => {
        const newEmployee = req.body;
        let data = readFileSync(resolve(__dirname, '../database/data/employees.json'));
        const employees = JSON.parse(data);

        employees.push(newEmployee);

        return res.status(201).json(newEmployee);
    },
    findByName: (req, res) => {
        const name = req.params.name;
        let data = readFileSync(resolve(__dirname, '../database/data/employees.json'));
        const employees = JSON.parse(data);

        const employee = employees.find(emp => emp.name.toLowerCase() === name.toLowerCase());

        if (!employee) {
            return res.status(404).json({ code: 'not_found' });
        }

        return res.json(employee);
    }
};