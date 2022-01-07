const express = require('express');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const Auth = require('../controller/auth.controller');
const {
  UserSignupValidator,
  UserLoginValidator,
} = require('../validator/auth.validator');

const { runValidation } = require('../validator/run.validation');

const upload = multer({ storage: multer.memoryStorage() });

// const storage = CloudinaryStorage({
//   cloudinary: cloudinary,
//   folder: 'user-profile-images',
//   allowedFormats: ['jpg', 'png'],
//   transformation: [{ width: 500, height: 500, crop: 'limit' }],
// });

cloudinary.config({
  cloud_name: 'teen-girls-up',
  api_key: '538474768147757',
  api_secret: '072m241QOOY0qlZT-wX1Dyvu_HY',
});

const dpStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'user-profile-images',
    transformation: [{ width: 500, height: 500, crop: 'limit' }],
    // format: ['jpg', 'png'], // supports promises as well
    public_id: (req, file) => 'computed-filename-using-request',
  },
});

const coverStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'user-cover-images',
    transformation: [{ width: 500, height: 500, crop: 'limit' }],
    // format: ['jpg', 'png'], // supports promises as well
    public_id: (req, file) => 'computed-filename-using-request',
  },
});

const contestStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'contest-images',
    transformation: [{ width: 500, height: 500, crop: 'limit' }],

    // format: ['jpg', 'png'], // supports promises as well
    public_id: (req, file) => 'computed-filename-using-request',
  },
});

const dpImgParser = multer({ storage: dpStorage });
const coverImgParser = multer({ storage: coverStorage });
const contestImgParser = multer({ storage: contestStorage });

const router = express.Router();

router.post('/create', UserSignupValidator, runValidation, Auth.Signup);
router.post('/login', UserLoginValidator, runValidation, Auth.Login);

router.post('/vote', Auth.Voter);
router.get('/success', Auth.VoteSuccess);
router.get('/cancel', (req, res) => res.send('You cancelled the transaction'));

router.get('/vote', Auth.GetVotersPage);

// user
router.post('/user/:id', Auth.ReadUser);

router.post('/addContest', Auth.AddContest);
router.post('/addContestant', Auth.AddContestant);

router.get('/getcontest', Auth.GetContest);
router.get('/getContestant', Auth.GetContestant);
router.get('/getAllContestant', Auth.GetAllContestant);

router.post('/getContestantById', Auth.GetContestantById);
router.post('/getSingleContestantById', Auth.GetSingleContestantById);
router.post('/getContestantByuuid', Auth.GetContestantByUUID);

// update password
router.post('/update-password/:id', Auth.updatePassword);

// upload
router.post(
  '/upload/:id',
  dpImgParser.single('profile_pic'),
  Auth.uploadDpToDB
);
router.post(
  '/upload-fullpics/:id',
  coverImgParser.single('full_pic'),
  Auth.uploadFullToDB
);
router.post(
  '/upload-contestpics/:id',
  contestImgParser.single('contest_pic'),
  Auth.uploadContestImg
);

// paypal email
router.post('/paypal/:id', Auth.updatePaypalEmail);

router.post('/deleteContestantById/:userID', Auth.deleteContestantById);
router.post('/deleteUserById', Auth.deleteUserById);

module.exports = router;
