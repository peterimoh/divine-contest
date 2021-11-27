const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const Auth = require('../model/auth.model');
const config = require('../config/config');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.jwt_secret;

const passportAuth = ( ) => {
passport.use(
  new JwtStrategy(opts, (jwt_payload, cb) => {
    Auth.EmailValidate(jwt_payload.email, (err, result) => {
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

module.exports = passportAuth;
