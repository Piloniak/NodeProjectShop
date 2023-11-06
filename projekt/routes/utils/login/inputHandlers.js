function inputHandler1(request, response, login){
    request.session.logged_in = true;
    request.session.login = login;
    response.cookie("last_login", Date.now(), { maxAge: 900000 });
    res.redirect("/");

    response.render('shop', {
        logged_in: request.session.logged_in,
        login: request.session.login
    });
}

function inputHandler2(response){
    response.render('login', {msg: "Błędna nazwa użytkownika i/lub hasło"});
}
module.exports = {inputHandler1, inputHandler2};