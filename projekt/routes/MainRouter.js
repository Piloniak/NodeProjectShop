const express = require("express");
const mainRouter = express.Router();

const registrationRouter = require('./subrouters/RegistrationRouter');
const loginRouter = require('./subrouters/LoginRouter');
const logoutRouter = require('./subrouters/LogoutRouter');
const shopRouter = require('./subrouters/ShopRouter');
const productsArray = require('../public/data/products.json')
const cardRouter = require('./subrouters/CardRouter');
const basketRouter = require('./subrouters/BasketRouter');
const choiceRouter = require('./subrouters/ChoiceRouter')

mainRouter.use("/registration", registrationRouter);
mainRouter.use("/login", loginRouter);
mainRouter.use("/logout", logoutRouter);
mainRouter.use("/shop", shopRouter);
mainRouter.use("/card", cardRouter);
mainRouter.use("/basket", basketRouter);
mainRouter.use("/choice", choiceRouter);


mainRouter.get("/", (req, res) => {
    const products = productsArray;
    const user = {
        userName: 
            req.session.userInfo == undefined
                ? "Proszę się zalogować"
                : req.session.userInfo.userName,
        lastLogin:
            req.cookies.last_login == undefined
                ? "Brak ostatniego logowania"
                : new Date(new Date(parseInt(req.cookies.last_login))).toLocaleDateString(),

    };
    if(req.session.logged_in==undefined){
        req.session.logged_in = false;
    }
    res.render("./layout/mainPage", {
        userInfo: user,
        pageName: "Strona Główna",
        pageToRender: "main",
        products: products
    });
})

module.exports = mainRouter;