'use strict';
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  'postgres://postgres:postgres@localhost/habit',
  { logging: true });

module.exports = {
  database: sequelize,
  Sequelize: Sequelize
};
