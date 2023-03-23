const Sequelize = require('sequelize')
const sequelize = require('../database/connecting')

const User = sequelize.define('users', {
  username: {
    type: Sequelize.STRING,
    allownull: true,
  },
  birthdate: {
    type: Sequelize.STRING,
    allowNull:true
  },
  email: {
    type:Sequelize.STRING,
    allownull: true,
  },
  gender:{
    type:Sequelize.STRING,
    allownull: true,
  },
  moblie:{
    type:Sequelize.STRING,
    allownull: true,
  },
  city:{
    type:Sequelize.STRING,
    allownull: true,
  },
  password:{
    type:Sequelize.STRING,
    allownull: true,
  },
  createdAt:Sequelize.DATE,
  updatedAt:Sequelize.DATE
},{
    timestamps: true,
})

module.exports = User
