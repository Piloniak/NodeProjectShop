const express = require('express');
const db = require('./../../service/database');
const CardRouter = express.Router();

CardRouter.post('/', (req, res) => {
    const index = req.body.elementFromList
    db.query(
        'SELECT * FROM products',
        (err, data) => {
            let product = data[index];
            let cartProducts = [];
            if (req.session.products != undefined) {
                cartProducts = JSON.parse(req.session.products)
                const filtered = cartProducts.filter(e => e.productName === product.productName)

                if (filtered.length > 0) {
                    console.log("filtered length >0")
                    res.send("filtered length >0");
                } else {

                    cartProducts.push(product);
                    console.log(cartProducts);
                    req.session.products = JSON.stringify(cartProducts)
                    console.log(req.session.products)
                    res.send('ok');
                    // dodaja sie tylko 2 produkty
                }

                // console.log(req.session.products);
            } else {
                cartProducts = JSON.stringify([product])
                console.log(cartProducts)
                req.session.products = cartProducts
                res.send('ok');
            }

        }
    )

    // dodac do sesji
})
module.exports = CardRouter;