const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    'successfull',
    'root',
    '',
    {
        dialect:"mysql",
        host:"localhost"
    }
)

module.exports = sequelize