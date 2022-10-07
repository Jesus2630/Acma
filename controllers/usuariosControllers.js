const Usuarios = require('../models/Usuarios')

exports.formCrearCuenta =  (req,res) =>{
    res.render('crear-cuenta', {
        nombrePagina: 'Crea tu cuenta'
    })
}

exports.crearCuenta =  async(req,res) =>{
    const usuario = req.body;

    const nuevoUsuario = await Usuarios.create(usuario);

    //Todo : Flash Message y Redirección 
    console.log('Usuario creado', nuevoUsuario)
}