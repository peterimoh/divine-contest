const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const Auth = require('../model/auth.model')
const config = require('../config/config')

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = config.jwt_secret


const passport = ( ) => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, cb) => {
     
    })
  );
};

module.exports = passport