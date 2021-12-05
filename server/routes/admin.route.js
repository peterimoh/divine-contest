const express = require('express');
const passport = require('passport');
const router = express.Router();

const adminRoute = (db) => {
  //create admin
  router.get('/', db.createScreen);
  router.post('/create-admin', db.createAdmin)
    

  //admin login
  router.get('/login', db.loginScreen)
  router.post(
    '/login-admin',
    passport.authenticate('admin', {
      successRedirect: '/admin/dashboard',
      failureRedirect: '/admin/login',
      failureFlash: true,
      successFlash: true,
    })
  );

  router.get('/dashboard', db.dashboardScreen);

  return router;
  
}

module.exports = adminRoute;