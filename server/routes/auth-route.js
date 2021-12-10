const express = require('express');
const Auth = require('../controller/auth.controller');
const {
  UserSignupValidator,
  UserLoginValidator,
} = require('../validator/auth.validator');
const { runValidation } = require('../validator/run.validation');

const router = express.Router();

router.post('/create', UserSignupValidator, runValidation, Auth.Signup);
router.post('/login', UserLoginValidator, runValidation, Auth.Login);

router.post('/vote', Auth.Voter);

router.post('/addContest', Auth.AddContest);
router.post('/addContestant', Auth.AddContestant);

router.get('/getContest', Auth.GetContest);
router.get('/getContestant', Auth.GetContestant);
router.post('/getContestantById', Auth.GetContestantById);

router.post('/deleteContestantById', Auth.deleteContestantById);
router.post('/deleteUserById', Auth.deleteUserById);




module.exports = router;
