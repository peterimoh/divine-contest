const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const bcrypt = require('bcryptjs');
const Auth = require('../model/auth.model');
const config = require('../config/config');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.jwt_secret;

const passportAuth = ( ) => {
passport.use(
  new JwtStrategy(opts, (jwt_payload, cb) => {
    Auth.SelectById("user", "email", jwt_payload.email, (err, result) => {
      if (err) return console.log(err);
      if (result) {
        return cb(null, result);
      } else {
        return cb(null, false);
      }
    });
  })
);
};

passport.serializeUser(function (admin_id, done) {
  done(null, admin_id);
});
passport.deserializeUser(function (admin_id, done) {
  done(null, admin_id);
});
