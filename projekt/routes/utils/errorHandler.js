function errorHandler(err){
    console.log('Uwaga błąd!');
    throw err;
}

module.exports = errorHandler;