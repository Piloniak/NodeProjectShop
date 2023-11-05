const db = require('../service/database')

function registrationModel(req, res){
    const user = {
        login: req.body.login,
        password: req.body.password,
        name: req.body.name,
        lastname: req.body.lastname,
        zipcode: req.body.zipcode,
        city: req.body.city,
        homenumber: req.body.homenumber,
        email: req.body.email,
        phonenumber: req.body.phonenumber
    }
}