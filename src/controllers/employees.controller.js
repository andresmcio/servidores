const { readFileSync } = require('fs');
const { resolve } = require('path');

module.exports = {
    getAll: (req, res) => {
        let data = readFileSync(resolve(__dirname, '../database/data/employees.json'));
        const employees = JSON.parse(data);
        let page = parseInt(req.query.page);

        if(page) {
            const limit = 2;
            let start = (page - 1) * limit;
            let end = ((page - 1) * limit) + 1;
            let result = employees.slice(start, end);

            return res.json(result);
        }

        return res.json(employees);
    }
};