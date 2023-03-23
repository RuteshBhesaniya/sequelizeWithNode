const Sequelize= require("sequelize");
const sequelize = require("../database/connecting")

const user = sequelize.define('districe',{
    name:{
        type:Sequelize.STRING,
        allowNull:true
    },
    statename:{
        type:Sequelize.STRING,
        allowNull:true
    },
    people:{
        type:Sequelize.INTEGER,
        allowNull:true
    },
    createdAt:Sequelize.DATE,
    updatedAt:Sequelize.DATE
})

module.exports = user