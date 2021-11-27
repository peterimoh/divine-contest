const Auth = require('../model/auth.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

//encrypt password
async function hashPassword(password) {
  return await bcrypt.hash(password, 10);
}

//compare encrpted password with password entered by user
async function validatePassword(password, hashedPassword) {
  return await bcrypt.compare(password, hashedPassword);
}

// @route POST api/auth/create
// @desc Register user
// @access Public

exports.Signup = async (req, res, next) => {
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
  };

  await Auth.EmailValidate(email, async (err, user) => {
    if (err) return res.status(400).json({ msg: 'Server Error!' });
    if (!Object.entries(user).length == 0) {
      return res.status(400).json({ nsg: 'User already Exist!' });
    } else {
      await Auth.InsertUser(userObj, (err, output))
    }
  });
};
