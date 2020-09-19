const express = require('express');
const Calculadora = require('../controllers/Calculadora')

const routes = express.Router();

routes.get('/', Calculadora.main);
routes.post('/somar', Calculadora.somar);
routes.post('/subtrair', Calculadora.subtrair);
routes.post('/dividir', Calculadora.dividir);
routes.post('/multiplicar', Calculadora.multiplicar);
routes.post('/raizquadrada', Calculadora.raizquadrada);
routes.post('/potencia', Calculadora.potencia);
routes.post('/mediaaritmetica', Calculadora.mediaaritmetica);
routes.post('/mediaharmonica', Calculadora.mediaharmonica);
routes.post('/moda', Calculadora.moda);

module.exports = routes;