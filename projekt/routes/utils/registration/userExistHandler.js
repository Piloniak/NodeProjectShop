function userExistHandler(response, login){
    const message = `Użytkownik ${login} juz istnieje`;
    const user = {
        userName: "Proszę się zalogować"
    }
    response.render('./layout/mainPage', {msg: message, pageToRender: "register", userInfo: user, pageName: "Rejestracja"});
}

module.exports = userExistHandler;