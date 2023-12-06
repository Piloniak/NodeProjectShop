const errorHandler = require('../routes/utils/errorHandler');
const db = require('../service/database');

function productsModel(){
    const sql = 'SELECT * FROM products';
    let products = [];
    db.query(sql, (err, data)=>{
        if(err){
            errorHandler(err);
        }
        if(data.length>0){
            console.log("prodcut model")
            console.log(data)
            console.log(data[0]);
            for(let i=0;i<data.length;i++){
                products[i] = data[i];
            }
            console.log("products array");
            console.log(products);
            return products;
        }
    })
    return;
}

module.exports = productsModel;