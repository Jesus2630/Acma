const express = require('express');
const homeControllers = require('../controllers/homeControllers')
const usuariosControllers = require('../controllers/usuariosControllers')


//Inicializo el router
const router = express.Router()

//Rutas
module.exports = function(){
    router.get('/', homeControllers.home)

    router.get('/crear-cuenta', usuariosControllers.formCrearCuenta)

    return router;
}