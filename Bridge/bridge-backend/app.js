const express = require('express');
const tokenRoutes = require('./routes/tokenRoutes');
const quoteRoutes = require('./routes/quoteRoutes');

const app = express();
app.use(express.json());

app.use('/tokens', tokenRoutes);
app.use('/quotes', quoteRoutes);

module.exports = app;