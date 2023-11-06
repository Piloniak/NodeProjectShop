const db = require('../service/database');
const errorHandler = require('../routes/utils/errorHandler');
const { inputHandler1, inputHandler2 } = require('../routes/utils/login/inputHandlers');
const bcrypt = require('bcrypt');

function loginModel(request, response){
    const login = request.body.login;
    const password = request.body.password;
    checkInputs(request, response, login, password);
}

function checkInputs(request, response, login, password){
    const sql = 'SELECT * FROM users WHERE login =?';

    db.query(
        sql,
        login,
        (err, data) => {
            if(err){
                errorHandler(err);
            }
            
            if(data.length > 0){
                const isPasswordCorrect = bcrypt.compareSync(password, data[0].password);
                if(isPasswordCorrect){
                    inputHandler1(request, response, login, password);
                }else{
                    inputHandler2(response)
                }
                
            } else {
                inputHandler2(response)
            }
        }
    )
}

module.exports = loginModel;