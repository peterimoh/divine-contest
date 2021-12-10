const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const bcrypt = require('bcryptjs');
const Auth = require('../model/auth.model');
const config = require('../config/config');

<<<<<<< HEAD
//compare encrpted password with password entered by user
async function validatePassword(password, hashedPassword) {
  return await bcrypt.compare(password, hashedPassword);
}

// const opts = {};
// opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
// opts.secretOrKey = config.jwt_secret;

// module.exports = (passport) => {
//   passport.use(
//     new JwtStrategy(opts, (jwt_payload, cb) => {
//       Auth.EmailValidate(jwt_payload.email, (err, result) => {
//         if (err) return console.log(err);
//         if (result) {
//           return cb(null, result);
//         } else {
//           return cb(null, false);
//         }
//       });
//     })
//   );
// };
// passport.serializeUser((jwt_payload, done) => {
//   done(null, jwt_payload.id);
// });

// passport.deserializeUser((jwt_payload, done) => {
//   Auth.EmailValidate(jwt_payload.email, (err, result) => {
//     if (err) return console.log(err);
//     if (result) {
//       done(null, result);
//     } else {
//       done(null, false);
//     }
//   });
// });

module.exports = (passport) => {
  passport.use(
    'admin',
    new LocalStrategy((username, password, done) => {
      let adminObj = { email: username, password: password };

      Auth.SelectAdmin('user', async (err, result) => {
        if (err) {
          console.log(err);
          done(err);
        }
        // console.log(result)
        let admin = result.filter((admin) => admin.email === adminObj.email);

        if (admin.length > 0) {
          if (admin[0].email === adminObj.email) {
            if (await validatePassword(adminObj.password, admin[0].password)) {
              return done(
                null,
                { admin_id: admin[0].id },
                { message: 'Logged In Successfully' }
              );
            } else {
              return done(null, false, { message: 'Incorrect Password' });
            }
          }
        } else {
          return done(null, err, {
            message: 'Admin with that email does not exist',
          });
        }
      });
    })
  );
=======
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
>>>>>>> vote
};

passport.serializeUser(function (admin_id, done) {
  done(null, admin_id);
});
passport.deserializeUser(function (admin_id, done) {
  done(null, admin_id);
});
