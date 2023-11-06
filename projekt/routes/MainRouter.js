const express = require("express");
const mainRouter = express.Router();

const registrationRouter = require('./subrouters/RegistrationRouter');
const loginRouter = require('./subrouters/LoginRouter');
const logoutRouter = require('./subrouters/LogoutRouter');
const shopRouter = require('./subrouters/ShopRouter');

mainRouter.use("/registration", registrationRouter);
mainRouter.use("/login", loginRouter);
mainRouter.use("/logout", logoutRouter);
mainRouter.use("/shop", shopRouter);

mainRouter.get("/", (req, res) => {
    const user = {
        userName: 
            req.session.userName == undefined
                ? "Proszę się zalogować"
                : req.session.userName,
        lastLogin:
            req.cookies.last_login == undefined
                ? "Brak ostatniego logowania"
                : new Date(new Date(parseInt(req.cookies.last_login))).toLocaleDateString(),

    };
    res.render("./pages/layout/mainPage", {
        userInfo: user,
        pageName: "Strona Główna",
        pageToRender: "main"
    });
})

module.exports = mainRouter;