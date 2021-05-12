  
const porta = 3000;
const express = require('./configs/express');
const app = express();
app.listen(porta, () => console.log(`teste-compasso-rest-api inicializada. \nAcessar: http://localhost:${porta}`));

module.exports = app;