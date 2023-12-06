const productsModel = require("../../../models/products");


function userDontExistHandler(response, login){
    const message = `Użytkownik: ${login} został zarejestrowany`;
    const user = {
        userName: "Proszę się zalogować"
    }
    const products = productsModel();    
    
    response.render('./layout/mainPage', {msg: message, pageToRender: 'login', pageName: "Logowanie", userInfo: user, products: products});
}
module.exports = userDontExistHandler;