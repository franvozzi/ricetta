const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const RecipeIngredient = sequelize.define('RecipeIngredient', {
  quantity: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = RecipeIngredient;
