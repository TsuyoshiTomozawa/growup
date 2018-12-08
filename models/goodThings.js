
'use strict';
const loader = require('./sequelize-loader');
const Sequelize = loader.Sequelize;

const GoodThings = loader.database.define('goodThings', {
  goodThingsID: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  context: {
    type: Sequelize.TEXT,
    allowNull:true 
  },
  valuesId: {
    type: Sequelize.UUID,
    allowNull: false
  }
}, {
    freezeTableName: true,
    timestamps: false,
  });

module.exports = GoodThings;
