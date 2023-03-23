const Sequelize = require('sequelize');
const sequelize = require('../database/connecting')

const user = sequelize.define('states',{
    name:{
        type:Sequelize.STRING,
        allowNull:true
    },
    country:{
        type:Sequelize.STRING,
        allowNull:true
    },
    createdAt:Sequelize.DATE,
    updatedAt:Sequelize.DATE
})

module.exports = user