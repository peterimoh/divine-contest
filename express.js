require('dotenv').config();
const express = require('express');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const config = require('./server/config/config');
const MYSQLSTORE = require('express-mysql-session')(session);
const options = {
  host: config.db_host,
  user: config.db_user,
  password: config.db_password,
  database: config.db_name,
};
const sessionStore = new MYSQLSTORE(options);
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
app.use(express.static('public'));
app.use(morgan('dev'));
app.set('view engine', 'ejs'); // set up ejs for templating
app.use(passport.initialize()); // Passport middleware
require('./server/config/passport')(passport); // Passport config
app.use(flash()); // Flash messages
app.use(passport.session()); // Persistent login sessions
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//routing
app.use('/api/auth', authRoute);

module.exports = app;
