const db = require('../service/database');
const errorHandler = require('../routes/utils/errorHandler');
const userExistHandler = require('../routes/utils/registration/userExistHandler');
const userDontExistHandler = require('../routes/utils/registration/userDontExistHandler');
const bcrypt = require('bcrypt');

function registrationModel(req, res){
    const user = {
        login: req.body.login,
        password: req.body.password,
        name: req.body.name,
        lastname: req.body.lastname,
        zipcode: req.body.zipcode,
        city: req.body.city,
        street: req.body.street,
        homenumber: req.body.homenumber,
        email: req.body.email,
        phonenumber: req.body.phonenumber
    }
    checkInputs(res, user)
}

function checkInputs(response, user){
    const sql = `SELECT * FROM users WHERE login = ?`;
    db.query(sql, user.login, (err, data)=>{
        if(data.length > 0){
            userExistHandler(user.login, response);
        } else {
            addingUser(response, user.login, user.password, user.name, user.lastname, 
                user.zipcode, user.city, user.street, user.homenumber, user.email, user.phonenumber);
        }
    })
}

function addingUser(response, login, password, name, lastname, zipcode, city, street,  
        homenumber, email, phonenumber){
    const sql = 'INSERT INTO users SET ?';
    password = bcrypt.hashSync(password, 10);
    db.query(
        sql,
        {login, password, name, lastname, zipcode, city, street, homenumber, email, phonenumber},
        (err) => {
            if(err){
                errorHandler(err);
            }
            userDontExistHandler(response, login);
        }
    )
}

module.exports = registrationModel;