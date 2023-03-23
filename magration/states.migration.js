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
                type:Sequelize.STRING (50),
            },
            country:{
                type:Sequelize.STRING (30),
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
    down:(QueryInterface,Sequelize)=>{
        return QueryInterface.dropTable('users')
    }
}