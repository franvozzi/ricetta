const app = require('./app');
const sequelize = require('./config/db');
const PORT = process.env.PORT || 5000;

// Autenticación y sincronización de Sequelize
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
