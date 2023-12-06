const express = require('express');
const productsModel = require('../../models/products');
const BasketRouter = express.Router();

BasketRouter.get('/', (req, res) =>{
    if(req.session.logged_in){
        res.render('./layout/basket', {
            basket: JSON.parse(req.session.products),
            userInfo: req.session.userInfo,
            pageName: "Koszyk"
        });
    }else{
        res.redirect('/login');
    }
});

module.exports = BasketRouter;