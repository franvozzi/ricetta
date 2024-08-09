const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Ingredient = sequelize.define('Ingredient', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = Ingredient;