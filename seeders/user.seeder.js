'use strict';

const params = require('../config/params.json');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        username: 'ram',
        birthdate:"22/4/2001",
        email: 'ram@admin.com',
        gender: 'male',
        moblie:'5523648925',
        city: 'surat',
        password: params.user.first.password,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'sita',
        birthdate:'28/06/2004',
        email: 'sita@admin.com',
        gender: 'female',
        moblie:'8849300935',
        city: 'surat',
        password: params.user.second.password,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
}