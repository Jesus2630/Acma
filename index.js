const express = require('express');
const routes  = require('./routes')
require('dotenv').config();


//Creo aplicación
const app = express()


//Middleware

//Routes
app.use('/', routes());



//Levanto servidor
const port = process.env.port;
app.listen(port, () =>{
    console.log(`Servidor iniciado en el puerto ${port}`)
})