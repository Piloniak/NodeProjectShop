function userDontExistHandler(response, login){
    const message = `Użytkownik: ${login} został zarejestrowany`;
    response.render('mainPage', {msg: message});
}
module.exports = userDontExistHandler;