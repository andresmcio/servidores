const express = require('express');
const {resolve} = require('path');
const { port, callback } = require('./modules/port');
const app = express();

app.listen(port, callback(port));

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(require('./routes/employees.routes'));