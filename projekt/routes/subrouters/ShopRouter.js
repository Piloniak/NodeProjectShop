const express = require("express");
const session = require("express-session");
const productsModel = require('../../models/products');
const productsArray = require('../../public/data/products.json')

const shopRouter = express.Router();

shopRouter.get("/", (req, res) => {
    const products = productsArray;
    if(req.session.logged_in==undefined||req.session.logged_in == false){
        res.redirect('/')
    }else{
        res.render("./layout/shop", {
            shopItems: products,
            pageName: "Sklep",
            userInfo: req.session.userInfo,
            req: req
        })
    }
})

module.exports = shopRouter;