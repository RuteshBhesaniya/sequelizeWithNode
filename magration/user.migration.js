const { QueryInterface } = require("sequelize");

module.exports = {
    up: (QueryInterface,Sequelize) =>{
        return QueryInterface.createTable('users', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull:false
            },
            username:{
                type: Sequelize.STRING (50),
            },
            birthdate:{
                type:Sequelize.STRING (30),
            },
            email:{
                type:Sequelize.STRING (50),
            },
            password:{
                type:Sequelize.STRING (50),
            },
            gender:{
                type:Sequelize.STRING (10),
            },
            moblie:{
                type:Sequelize.STRING (10),
            },
            city:{
                type:Sequelize.STRING (50),
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
    }
}