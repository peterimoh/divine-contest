require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const fs = require('fs');
const os = require('os');
//db
require('./server/db/db.config');

//routes
const authRoute = require('./server/routes/auth-route');

const app = express();

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//routing
app.use('/api/auth', authRoute);

module.exports = app;
