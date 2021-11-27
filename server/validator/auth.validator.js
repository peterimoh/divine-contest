const { check } = require('express-validator');

exports.UserSignupValidator = [
  check('first_name').not().isEmpty().withMessage('First Name is required'),
  check('last_name').not().isEmpty().withMessage('Last Name cannot be Empty'),
  check('email').isEmail().withMessage('Enter a valid E-mail address'),
  // check('dob').not().withMessage('Date of Birth is  required'),
  check('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),
  check('mobile')
    .not()
    .isEmpty()
    .withMessage('Mobile Number is required'),
  check('street').not().isEmpty().withMessage('Street is required'),
  check('postal_code')
    .not()
    .isEmpty()
    .withMessage('Postal Code is required'),
  check('region').not().isEmpty().withMessage('Region is required'),
  check('country').not().isEmpty().withMessage('Country is required'),
];

exports.UserLoginValidator = [
  check('email').isEmail().withMessage('Enter a valid E-mail address'),
  check('password').not().isEmpty().withMessage('Password is required'),
];
