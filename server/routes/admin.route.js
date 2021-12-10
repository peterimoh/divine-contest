const express = require('express');
const passport = require('passport');
const { adminMiddleWare } = require('../helper/isAdmin');
const router = express.Router();

const adminRoute = (db) => {
  //create admin
  router.get('/register', db.createScreen);
  router.post('/create-admin', db.createAdmin);

  //admin login
  router.get('/', db.loginScreen);
  router.post(
    '/login-admin',
    passport.authenticate('admin', {
      successRedirect: '/admin/dashboard',  
      failureRedirect: '/admin',
      failureFlash: true,
      successFlash: true,
    })
  );

  // user
  router.get('/dashboard', adminMiddleWare(), db.dashboardScreen);
  router.get('/user', adminMiddleWare(), db.ReadUsers);
  router.get('/user/:id', adminMiddleWare(), db.DeleteUser);

  //contestant
  router.get('/contestant', adminMiddleWare(), db.ReadContestants);


  //contest
  router.get('/contest', adminMiddleWare(), db.ReadContest);
  router.post('/create-contest', adminMiddleWare(), db.CreateContest);

  return router;
};

module.exports = adminRoute;
