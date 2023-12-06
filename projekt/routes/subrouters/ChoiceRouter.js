const express = require('express');
const ChoiceRouter = express.Router();

ChoiceRouter.get('/', (req, res)=>{
    if (req.session.logged_in) {
        res.render('./layout/choice', {
            basket: JSON.parse(req.session.products),
            userInfo: req.session.userInfo,
            pageName: "Dostawa"
        })
    } else {
        res.redirect('/login');
    }
});
module.exports = ChoiceRouter;