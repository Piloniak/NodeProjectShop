const express = require('express');
const registrationModel = require('../models/registration');

const registrationRouter = express.Router();

registrationRouter.get('/', (req, res) =>{
    res.render('./pages/layout/mainPage', {
        pageName: "Rejestracja",
        pageToRender: "register",
        message: "",
    });
});

registrationRouter.post('/auth', (req, res) =>{
    registrationModel(req, res);
});

module.exports = registrationRouter;