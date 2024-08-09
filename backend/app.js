const express = require('express');
const app = express();
const recipeRoutes = require('./routes/recipeRoutes');
require('dotenv').config();

app.use(express.json());
app.use('/api', recipeRoutes);

module.exports = app;
