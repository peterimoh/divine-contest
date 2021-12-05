const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const bcrypt = require('bcryptjs');
const Auth = require('../model/auth.model');
const config = require('../config/config');

//compare encrpted password with password entered by user
async function validatePassword(password, hashedPassword) {
  return await bcrypt.compare(password, hashedPassword);
}

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.jwt_secret;

module.exports = (passport) => {
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
passport.serializeUser((jwt_payload, done) => {
  done(null, jwt_payload.id);
});

passport.deserializeUser((jwt_payload, done) => {
  Auth.EmailValidate(jwt_payload.email, (err, result) => {
    if (err) return console.log(err);
    if (result) {
      done(null, result);
    } else {
      done(null, false);
    }
  });
});

passport.use(
  'admin',
  new LocalStrategy((username, password, done) => {
    let adminObj = { email: username, password: password };
    console.log(adminObj);
    Auth.SelectAdmin('user', async (err, result) => {
      if (err) return console.log(err);
      if (result.length > 0) {
        await Auth.EmailValidate(adminObj.email, async(err, output) => {
          if (err) {
            console.log(err);
            done(err);
          }
          if (output.length !== 0) {
            if (await validatePassword(adminObj.password, output[0].password)) {
             return done(
               null,
               { admin_id: output[0].id },
               { message: 'Successful login' }
             );
            } else {
              done(null, false, { message: 'Incorrect Password' });
            }
          }
        });
      }
    });
  })
);

passport.serializeUser(function (admin_id, done) {
  done(null, admin_id);
});
passport.deserializeUser(function (admin_id, done) {
  done(null, admin_id);
});
