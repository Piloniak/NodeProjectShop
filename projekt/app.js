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
app.set('views', __driname + "/views");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

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

sql1 = "CREATE DATABASE IF NOT EXISTS `users` DEFAULT CHARACTER SET utf8 COLLATE uft8_general_ci";
sql2 = 'USE `users`';
sql3 = 'CREATE TABLE IF NOT EXISTS `users`(`id` int(10) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT `username` varchar(50) UNIQUE `password` varchar(150) `name` varchar(20) `lastname` varchar(40) `adress` varchar(100) `email` varchar(50) `phonenumber` varchar(12) ) ENGINE=InnoDB DEFAULT CHARSET=utf8';

const server = app.listen(PORT, (err) =>{
    if(err){
        errorHandler(err);
        return;
    }
    db.query(sql1, (err, data)=>{
        errorHandler(err);
    })
    db.query(sql2, (err, data)=>{
        errorHandler(err);
    })
    db.query(sql3, (err, data)=>{
        errorHandler(err);
    })
})