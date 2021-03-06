require('dotenv').config();
const express = require('express');
const passport = require('passport');
const multer = require('multer');
const path = require('path');
const flash = require('connect-flash');
const session = require('express-session');
const MYSQLSTORE = require('express-mysql-session')(session);
const config = require('./server/config/config');
const options = {
  host: config.db_host,
  user: config.db_user,
  password: config.db_password,
  database: config.db_name,
};
const sessionStore = new MYSQLSTORE(options);
const cors = require('cors');
const morgan = require('morgan');
const adminRoute = require('./server/routes/admin.route');
const Admin = require('./server/admin/controller/admin.controller');

//db
require('./server/db/db.config');

//routes
const authRoute = require('./server/routes/auth-route');

const app = express();

// const upload = multer({ storage: multer.memoryStorage() });

//middlewares

app.use(express.static(path.join(__dirname, './server/public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(flash()); // Flash messages
require('./server/config/passport')(passport); // Passport config
app.use(
  session({
    secret: 'keyboardawfawefaefeaw',
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
  })
);
app.use(passport.initialize()); // Passport middleware
app.use(passport.session()); // Persistent login sessions
app.use(cors());
app.set('views', path.join(__dirname, './server/views')); // set up ejs for templating
app.set('view engine', 'ejs');

//routing
app.use('/api/auth', authRoute);
app.use('/admin', adminRoute(Admin));

module.exports = app;
