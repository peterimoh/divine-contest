const Auth = require('../model/auth.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config/config');
const Vote = require('./vote.controller');
const Contest = require('./contest.controller');

//encrypt password
async function hashPassword(password) {
  return await bcrypt.hash(password, 10);
}

//compare encrpted password with password entered by user
async function validatePassword(password, hashedPassword) {
  return await bcrypt.compare(password, hashedPassword);
}

exports.Signup = async (req, res, next) => {
  // @route POST api/auth/create
  // @desc Register user
  // @access Public

  //generate random uuID for users
  const generateID = Math.floor(100000 + Math.random() * 900000);

  const {
    first_name,
    last_name,
    email,
    dob,
    password,
    mobile,
    street,
    postal_code,
    region,
    country,
  } = req.body;
  const hashedPassword = await hashPassword(password);
  const userObj = {
    first_name,
    last_name,
    email,
    password: hashedPassword,
    uuid: generateID,
    date_of_birth: dob,
    mobile,
    street,
    postal_code,
    region,
    country,
    role: req.body.role || 'user',
  };

  await Auth.SelectById("user", "email", email, async (err, user) => {
    if (err) return res.status(400).json({ error: 'Server Error!' });
    if (!Object.entries(user).length == 0) {
      return res.status(400).json({ error: 'User already Exist!' });
    } else {
      await Auth.Insert('user', userObj, (err, output) => {
        console.log(err);
        if (err)
          return res
            .status(500)
            .json({ error: 'Server Error, Try again Later!' });
        return res.status(200).json({ msg: `OK`, data: output });
      });
    }
  });
};

exports.Login = (req, res) => {
  const { email, password } = req.body;
  await Auth.SelectById("user", "email", email, (err, result) => {
    if (err)
      return res.status(400).json({ error: 'Server Error, Try again later' });

    if (result) {
      if (result.length) {
        validatePassword(password, result[0].password).then((isMatch) => {
          if (isMatch) {
            const payload = {
              id: result[0].id,
              uuid: result[0].uuid,
              name: result[0].first_name + ' ' + result[0].last_name,
            };
            // console.log(req.user);
            jwt.sign(
              payload,
              config.jwt_secret,
              { expiresIn: '24h' },
              (err, token) => {
                res.json({
                  success: true,
                  token: 'Bearer ' + token,
                });
              }
            );
          } else {
            return res.status(400).json({ error: 'Incorrect Password' });
          }
        });
      } else {
        return res.status(400).json({ error: 'User does not exist' });
      }
    }
  });
};

exports.Voter = async (req, res) => {
  var obj = req.body.response;
  var amount = parseInt(obj.amount);
  var transID = obj.transaction_id;
  let contestantID = obj.meta.contestantID;
  let numberOfVote = obj.meta.numberOfVote;

  new Vote(res, contestantID, numberOfVote, amount, transID).ValidatePayment(
    req
  );
};

exports.AddContest = async (req, res) =>
  new Contest(res).Create('contest', req.body);

exports.AddContestant = async (req, res) =>
  new Contest(res).Create('contestant_table', req.body);

exports.GetContest = async (req, res) => new Contest(res).Select('contest');
exports.GetContestantById = async(req, res) => new Contest(res).SelectById("contestant_table", req.body.id);

exports.deleteContestantById = async(req, res) => new Contest(res).DeleteById("contestant_table", req.body.id);

exports.deleteUserById = async(req, res) => new Contest(res).DeleteById("user", req.body.id);


exports.GetContestant = async (req, res) =>
  new Contest(res).Select('contestant_table');
