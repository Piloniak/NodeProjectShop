const db = require('../service/database');
const errorHandler = require('../routes/utils/errorHandler');
const { inputHandler1, inputHandler2 } = require('../routes/utils/login/inputHandlers');

function loginModel(request, response){
    const login = request.body.login;
    const password = request.body.password;
    checkInputs(request, response, login, password);
}

function checkInputs(request, response, login, password){
    const sql = 'SELECT * FROM users WHERE login =? AND password = ?';

    db.query(
        sql,
        [login, password],
        (err, data) => {
            if(err){
                errorHandler(err);
            }

            if(data.length > 0){
                inputHandler1(request, response, login, password)
            } else {
                inputHandler2(response)
            }
        }
    )
}

module.exports = loginModel;