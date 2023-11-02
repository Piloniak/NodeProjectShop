const mysql = require('mysql');
const errorHandler = require('../routes/utils/errorHandler');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
});

connection.connect((err)=>{
    if(err){
        errorHandler(err);
    }
});