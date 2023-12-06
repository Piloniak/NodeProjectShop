const express = require('express');
const productsModel = require('../../models/products');
const BasketRouter = express.Router();

BasketRouter.post('/', (req, res) =>{
    const products = productsModel();

    const productId = req.body.chosenProduct;
})