const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('donnee_telemedcine', 'rootbabs', 'Medcine11@Admin.', {
  host: '192.168.1.9',
  dialect: 'mysql',
});

module.exports = sequelize;
