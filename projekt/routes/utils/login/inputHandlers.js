const productsArray = require('../../../public/data/products.json')

function inputHandler1(request, response, login){
   const products = productsArray;

    request.session.logged_in = true;
    const user = {
        userName: login
    }
    request.session.userInfo = user;
    response.cookie("last_login", Date.now(), { maxAge: 900000 });

    response.render('./layout/shop', {
        logged_in: request.session.logged_in,
        userInfo: request.session.userInfo,
        pageName: "Sklep",
        pageToRender: "shop",
        shopItems:  products,
        req: request,
     });
}

function inputHandler2(response){
    const user = {
        userName: "Proszę się zalogować błąd"
    }
    response.render('./layout/mainPage', {msg: "Błędna nazwa użytkownika i/lub hasło", pageToRender: "login", userInfo: user, pageName: "Logowanie"});
}
module.exports = {inputHandler1, inputHandler2};