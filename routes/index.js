const express = require('express');

//Inicializo el router
const router = express.Router()

//Rutas
module.exports = function(){
    router.get('/', (req,res) =>{
        res.send('HomePage')
    })

    router.get('/crear-cuenta', (req,res) =>{
        res.send('Crear cuenta')
    })

    return router;
}