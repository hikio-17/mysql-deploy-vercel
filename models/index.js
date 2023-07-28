const Sequelize = require('sequelize');

const sequelize = new Sequelize('b91htbzstsl2uwzuo2yn', 'ulfz5xnd74k7gjo4', 'gXX4Fl7KPMr32jYhNRXt', {
  host: 'b91htbzstsl2uwzuo2yn-mysql.services.clever-cloud.com',
  dialect: 'mysql'
});

sequelize.authenticate()
  .then(() => console.log('Connection to database has been established successfully.'))
  .catch(error => console.error('Unable to connect to the database:', error));


  module.exports = sequelize;