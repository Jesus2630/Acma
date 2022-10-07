const Sequelize = require('sequelize');


module.exports = new Sequelize('Acma', 'postgres','4192738991',{
    host: '127.0.0.1',
    port: '5433',
    dialect: 'postgres',
    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    logging: false
}) 