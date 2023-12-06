const express = require('express');
const bodyParser = require('body-parser')
const session = require('express-session');
const cookieParser = require('cookie-parser');
const db = require('./service/database');
const errorHandler = require('./routes/utils/errorHandler')
const app = express();

const PORT = 3001;
const mainRouter = require('./routes/MainRouter');

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.set('views', __dirname + "/views");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cookieParser());

app.use(session({
    secret: 'secret_key',
    resave: true,
    saveUninitialized: true,
    cookie: {
        expires: 1000 * 60 * 60,
        httpOnly: true,
        path: '/'
    }
}))

app.use("/", mainRouter);

sql1 = "CREATE DATABASE IF NOT EXISTS `shop_node` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;";
sql2 = 'USE `shop_node`';
sql3 = 'CREATE TABLE IF NOT EXISTS `users`(`id` int(10) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT, `username` varchar(50) UNIQUE, `password` varchar(150), `name` varchar(20), `lastname` varchar(40), `adress` varchar(100), `email` varchar(50), `phonenumber` varchar(12)) ENGINE=InnoDB DEFAULT CHARSET=utf8';
sql4 = 'CREATE TABLE IF NOT EXISTS `products`(`id` int(10) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT, `name` varchar(30) NOT NULL, `price` decimal(10,2) NOT NULL, `amount` int(10) NOT NULL, `image` varchar(20) NOT NULL)'
sql5 = 'INSERT INTO `products` (id, name, price, amount, image) VALUES (1, "marchewka", 1.50, 100, "marchewka");'
sql6 = 'INSERT INTO `products` (id, name, price, amount, image) VALUES (2,"pomidor", 2.20, 10, "pomidor");'
sql7 = 'INSERT INTO `products` (id, name, price, amount, image) VALUES (3,"salata", 4.50, 5, "salata");'
sql8 = 'INSERT INTO `products` (id, name, price, amount, image) VALUES (4,"jablko", 1.30, 150, "jablko");'
sql9 = 'INSERT INTO `products` (id, name, price, amount, image) VALUES (5,"gruszka", 1.20, 200, "gruszka");'
sql10 = 'INSERT INTO `products` (id, name, price, amount, image) VALUES (6,"baklazan", 3.50, 20, "baklazan");'
sql11 = 'INSERT INTO `products` (id, name, price, amount, image) VALUES (7,"banan", 2.40, 100, "banan");'
sql12 = 'INSERT INTO `products` (id, name, price, amount, image) VALUES (8,"pomarancza", 3.60, 120, "pomarancza");'
sql13 = 'INSERT INTO `products` (id, name, price, amount, image) VALUES (9,"mandarynka", 1.70, 80, "mandarynka");'
sql14 = 'INSERT INTO `products` (id, name, price, amount, image) VALUES (10,"ziemniak", 1.10, 300, "ziemniak");'
sql15 = 'SELECT * FROM `products`'

const server = app.listen(PORT, (err) =>{
    if(err){
        errorHandler(err);
        return;
    }
    db.query(sql1, (err, data)=>{
        if(err) errorHandler(err);    
    })
    db.query(sql2, (err, data)=>{
        if(err) errorHandler(err);
    })
    db.query(sql3, (err, data)=>{
        if(err) errorHandler(err);
    })
    db.query(sql4, (err, data)=>{
        if(err) errorHandler(err);
    })
    db.query(sql15, (err, data)=>{
        if(err) errorHandler(err);
        if(data.length>0){
            return;
        }else{
            db.query(sql5, (err, data)=>{
                if(err) errorHandler(err);
            })
            db.query(sql6, (err, data)=>{
                if(err) errorHandler(err);
            })
            db.query(sql7, (err, data)=>{
                if(err) errorHandler(err);
            })
            db.query(sql8, (err, data)=>{
                if(err) errorHandler(err);
            })
            db.query(sql9, (err, data)=>{
                if(err) errorHandler(err);
            })
            db.query(sql10, (err, data)=>{
                if(err) errorHandler(err);
            })
            db.query(sql11, (err, data)=>{
                if(err) errorHandler(err);
            })
            db.query(sql12, (err, data)=>{
                if(err) errorHandler(err);
            })
            db.query(sql13, (err, data)=>{
                if(err) errorHandler(err);
            })
            db.query(sql14, (err, data)=>{
                if(err) errorHandler(err);
            })
        }
    })
})