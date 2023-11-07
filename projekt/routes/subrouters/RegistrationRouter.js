const express = require('express');
const registrationModel = require('../../models/registration');

const registrationRouter = express.Router();

const userInfo = {
    userName: "Proszę się zalogować"
}

registrationRouter.get('/', (req, res) =>{
    res.render('./layout/mainPage', {
        pageName: "Rejestracja",
        pageToRender: "register",
        msg: "",
        userInfo: userInfo
    });
});

registrationRouter.post('/auth', (req, res) =>{
    registrationModel(req, res);
});

module.exports = registrationRouter;