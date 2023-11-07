const express = require('express');
const bodyParser = require('body-parser')
const session = require('express-session');
const cookieParser = require('cookie-parser');
const db = require('./service/database');
const errorHandler = require('./routes/utils/errorHandler')
const app = express();

const PORT = 3002;
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

const shopItems = [
    {
        "id": 1,
        "name": "marchewka",
        "price": 1.50,
        "amount": 100
    },
    {
        "id": 2,
        "name": "pomidor",
        "price": 2.20,
        "amount": 10
    },
    {
        "id": 3,
        "name": "sałata",
        "price": 4.50,
        "amount": 5
    },
    {
        "id": 4,
        "name": "jabłko",
        "price": 1.30,
        "amount": 150
    },
    {
        "id": 5,
        "name": "gruszka",
        "price": 1.20,
        "amount": 200
    },
    {
        "id": 6,
        "name": "bakłażan",
        "price": 3.50,
        "amount": 20
    },
    {
        "id": 7,
        "name": "banan",
        "price": 2.40,
        "amount": 100
    },
    {
        "id": 8,
        "name": "pomarańcza",
        "price": 3.60,
        "amount": 120
    },
    {
        "id": 9,
        "name": "mandarynka",
        "price": 1.70,
        "amount": 80
    },
    {
        "id": 10,
        "name": "ziemniak",
        "price": 1.10,
        "amount": 300
    }
]


sql1 = "CREATE DATABASE IF NOT EXISTS `users` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;";
sql2 = 'USE `users`';
sql3 = 'CREATE TABLE IF NOT EXISTS `users`(`id` int(10) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT, `username` varchar(50) UNIQUE, `password` varchar(150), `name` varchar(20), `lastname` varchar(40), `adress` varchar(100), `email` varchar(50), `phonenumber` varchar(12)) ENGINE=InnoDB DEFAULT CHARSET=utf8';

const server = app.listen(PORT, (err) =>{
    console.log(shopItems);
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
})