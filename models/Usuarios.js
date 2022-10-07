const sequelize = require('sequelize');
const db = require('../config/db');
const bcrypt = require('bcrypt-nodejs')

const Usuarios = db.define('usuarios', {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: sequelize.STRING(60),
    imagen: sequelize.STRING(60),
    email: {
        type: sequelize.STRING(30),
        allowNull: false,
        validate: {
            isEmail: {
                msg: 'Agrega un correo válido'
            }
        },
        unique: {
            args: true,
            msg: 'Usuario ya registrado'
        }
    },
    password: {
        type: sequelize.STRING(60),
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'La contraseña no puede ir vacía'
            }
        }
    },
    activo: {
        type: sequelize.INTEGER(0),
        defaultValue: 0
    },
    tokenPassword: sequelize.STRING,
    expiraToken: sequelize.DATE
}, {
    hooks : {
        beforeCreate(usuario){
            usuario.password = bcrypt.hashSync(usuario.password, bcrypt.genSaltSync(10), null);
        }
    }
})

//Metodo para comparar los password


Usuarios.prototype.validarPassword = function(password) {
    return bcrypt.compareSync(password, this.password)
}

module.exports = Usuarios;