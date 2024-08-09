const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'aws-0-sa-east-1.pooler.supabase.com', // Cambia si es necesario
  port: 6543, // Puerto por defecto para PostgreSQL
  username: 'postgres.tfkjjtyucvprmhxeuezy', // Obtén estos datos desde el panel de Supabase
  password: 'PrimeraBase==2024', // Obtén estos datos desde el panel de Supabase
  database: 'postgres', // Nombre de tu base de datos
  logging: false, // Desactiva los logs de SQL
});

module.exports = sequelize;
