function userExistHandler(response, login){
    const message = `Użytkownik ${login} juz istnieje`;
    response.render('registration', {msg: message});
}

module.exports = userExistHandler;