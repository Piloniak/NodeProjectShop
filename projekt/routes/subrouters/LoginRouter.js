const express = require('express');
const loginRouter = express.Router();
const db = require('../../service/database');
const loginModel = require('../../models/login');

loginRouter.get('/', (req, res) => {
    res.render('login');
});

loginRouter.post('/auth', (req, res) => {
    loginModel(req, res);
})
module.exports = loginRouter;
