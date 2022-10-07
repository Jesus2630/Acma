const express = require('express');
const expressEjsLayouts = require('express-ejs-layouts');
const ejslayout = require('express-ejs-layouts')
const routes  = require('./routes');
require('dotenv').config();

const db = require('./config/db');
db.sync().then(() => console.log('DB Conectada')).catch((error) => console.log(error))


//Creo aplicación
const app = express()

//Ejs
app.use(expressEjsLayouts);
app.set('view engine', 'ejs');

//Estaticos
app.use(express.static('public'))

//Middlewares
app.use((req,res,next) =>{
    const fecha = new Date();
    res.locals.year = fecha.getFullYear ();

    next()
})


//Rutas
app.use('/', routes());


//Levanto servidor
const port = process.env.port;
app.listen(port, () =>{
    console.log(`Servidor iniciado en el puerto ${port}`)
})