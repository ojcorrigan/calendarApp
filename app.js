const ENV = process.env.NODE_ENV || 'development';
require('dotenv').config({ path: `${__dirname}/.env.${ENV}` });

const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./db/connection');

connectDB();
app.use(cors());

module.exports = app;
