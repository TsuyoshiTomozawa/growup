'use strict';
const loader = require('./sequelize-loader');
const Sequelize = loader.Sequelize;

const Values = loader.database.define('values', {
  valuesID: {
    type: Sequelize.UUID,
    primaryKey: true,
    allowNull: false
  },
  Goal: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  memo: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  createdBy: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  updatedAt: {
    type: Sequelize.DATE,
    allowNull: false
  }
}, {
    freezeTableName: true,
    timestamps: false,
    indexes: [
      {
        fields: ['createdBy']
      }
    ]
  });

module.exports = Values;
