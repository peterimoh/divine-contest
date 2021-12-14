const express = require('express');
const multer  = require('multer');
const Auth = require('../controller/auth.controller');
const { UserSignupValidator, UserLoginValidator,} = require('../validator/auth.validator');

const { runValidation } = require('../validator/run.validation');

const upload = multer({ storage: multer.memoryStorage() });

const router = express.Router();

router.post('/create', UserSignupValidator, runValidation, Auth.Signup);
router.post('/login', UserLoginValidator, runValidation, Auth.Login);

router.post('/vote', Auth.Voter);

router.get('/vote', Auth.Voter);

// user
router.post('/user/:id', Auth.ReadUser);

router.post('/addContest', Auth.AddContest);
router.post('/addContestant', Auth.AddContestant);

router.get('/getcontest', Auth.GetContest);
router.get('/getContestant', Auth.GetContestant);
router.post('/getContestantById', Auth.GetContestantById);
router.post('/getSingleContestantById', Auth.GetSingleContestantById);

// upload
router.post('/upload/:id', upload.single('profile_pic'), Auth.uploadDpToDB);
router.post('/upload-fullpics/:id', upload.single('full_pic'), Auth.uploadFullToDB);

router.post('/deleteContestantById', Auth.deleteContestantById);
router.post('/deleteUserById', Auth.deleteUserById);











module.exports = router;
