const express = require('express');
const loginRouter = express.Router();
const db = require('../../service/database');
const loginModel = require('../../models/login');

const userInfo = {
    userName: "Proszę się zalogować"
}

loginRouter.get('/', (req, res) => {
    res.render('./layout/mainPage', {
        pageToRender: "login",
        userInfo: userInfo,
        pageName: "Logowanie"
    });
});

loginRouter.post('/auth', (req, res) => {
    loginModel(req, res);
})
module.exports = loginRouter;
