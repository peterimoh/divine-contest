const express = require('express')
const Auth = require('../controller/auth.controller')
// const {UserSignupValidator, UserLoginValidator} = require('../validator/auth.validator')

const router = express.Router()

router.get('/create',  Auth.Signup)


module.exports = router