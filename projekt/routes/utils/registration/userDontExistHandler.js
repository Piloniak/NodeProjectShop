function userDontExistHandler(response, login){
    const message = `Użytkownik: ${login} został zarejestrowany`;
    const user = {
        userName: "Proszę się zalogować"
    }
    const products = [
        {
            "id": 1,
            "name": "marchewka",
            "price": 1.50,
            "amount": 100
        },
        {
            "id": 2,
            "name": "pomidor",
            "price": 2.20,
            "amount": 10
        },
        {
            "id": 3,
            "name": "sałata",
            "price": 4.50,
            "amount": 5
        },
        {
            "id": 4,
            "name": "jabłko",
            "price": 1.30,
            "amount": 150
        },
        {
            "id": 5,
            "name": "gruszka",
            "price": 1.20,
            "amount": 200
        },
        {
            "id": 6,
            "name": "bakłażan",
            "price": 3.50,
            "amount": 20
        },
        {
            "id": 7,
            "name": "banan",
            "price": 2.40,
            "amount": 100
        },
        {
            "id": 8,
            "name": "pomarańcza",
            "price": 3.60,
            "amount": 120
        },
        {
            "id": 9,
            "name": "mandarynka",
            "price": 1.70,
            "amount": 80
        },
        {
            "id": 10,
            "name": "ziemniak",
            "price": 1.10,
            "amount": 300
        }
    ]
    
    response.render('./layout/mainPage', {msg: message, pageToRender: 'login', pageName: "Logowanie", userInfo: user, products: products});
}
module.exports = userDontExistHandler;