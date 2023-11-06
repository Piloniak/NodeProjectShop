const express = require('express');
const logoutRouter = express.Router();

logoutRouter.get('/', (req, res)=>{
    req.session.destroy();
    res.send("Wylogowano");
});

module.exports = logoutRouter;