const express = require('express');
const expressEjsLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const routes  = require('./routes');
require('dotenv').config();

const db = require('./config/db');
require('./models/Usuarios');
db.sync().then(() => console.log('DB Conectada')).catch((error) => console.log(error))


//Creo aplicación
const app = express()

//BodyParse
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true})) 

//Ejs
app.use(expressEjsLayouts);
app.set('view engine', 'ejs');

//Estaticos
app.use(express.static('public'))

//Habilito CookieParser
app.use(cookieParser());

//Creo la session
app.use(session({
    secret: process.env.SECRETO,   
    key: process.env.KEY,
    resave: false,
    saveUninitialized: false
}))

//Agrego Mensajes Flash
app.use(flash())

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