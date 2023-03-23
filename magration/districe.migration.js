const { QueryInterface } = require("sequelize");

module.exports = {
    up:(QueryInterface,Sequelize) =>{
        return QueryInterface.createTable('users', {
            id:{
                type:Sequelize.INTEGER,
                primaryKey:true,
                autoIncrement:true,
                allowNull:false
            },
            name:{
                type:Sequelize.STRING(30),
            },
            statename:{
                type:Sequelize.STRING(30),
            },
            people:{
                type:Sequelize.INTEGER,
            },
            createdAt:{
                type:Sequelize.DATE,
                allowNull:false,
            },
            updatedAt:{
                type:Sequelize.DATE,
                allowNull:false,
            }
        })
    },
    down:(QueryInterface,Sequelize) =>{
        return QueryInterface.dropTable('users')
    }
}