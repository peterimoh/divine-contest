const Auth = require('../model/auth.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config/config');
const Vote = require('./vote.controller');
const Contest = require('./contest.controller');
const paypal = require('paypal-rest-sdk');
const sql = require('../db/db.config');

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

  await Auth.SelectById('user', 'email', email, async (err, user) => {
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

exports.Login = async (req, res) => {
  const { email, password } = req.body;
  await Auth.SelectById('user', 'email', email, (err, result) => {
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

exports.ReadUser = async (req, res) => {
  const { id } = req.params;

  await Auth.SelectById('user', 'id', id, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ error: 'Server Error, Try again later' });
    }

    if (result) {
      if (result.length) {
        return res.status(200).json({ msg: 'OK', data: result });
      } else {
        return res.status(400).json({ error: 'User does not exist' });
      }
    }
  });
};

exports.uploadDpToDB = (req, res) => {
  const { id } = req.params;
  console.log('user id ', id);
  const dp = req.file.buffer.toString('base64');
  Auth.UpdateById('user', 'profile_pic', 'id', dp, id, (err, output) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: 'Server Error, Try again Later!' });
    }
    return res.status(200).json({ msg: 'OK', data: output });
  });
};

exports.uploadFullToDB = (req, res) => {
  const { id } = req.params;
  const full = req.file.buffer.toString('base64');

  Auth.UpdateById('user', 'full_pic', 'id', full, id, (err, output) => {
    console.log(err);
    if (err) {
      console.log(err);
      return res.status(500).json({ error: 'Server Error, Try again Later!' });
    }
    return res.status(200).json({ msg: 'OK', data: output });
  });
};

exports.uploadContestImg = async (req, res) => {
  const { id } = req.params;
  const contest_img = req.file.buffer.toString('base64');

  await Auth.UpdateById(
    'user',
    'contest_pic',
    'id',
    contest_img,
    id,
    (err, output) => {
      console.log(err);
      if (err) {
        console.log(err);
        return res
          .status(500)
          .json({ error: 'Server Error, Try again Later!' });
      }
      return res.status(200).json({ msg: 'OK', data: output });
    }
  );
};

exports.updatePaypalEmail = async (req, res) => {
  const { id } = req.params;
  const { paypal_email } = req.body;
  await Auth.UpdateById(
    'user',
    'paypal',
    'id',
    paypal_email,
    id,
    (err, output) => {
      if (err) {
        console.log(err);
        return res
          .status(500)
          .json({ error: 'Server Error, Try again Later!' });
      }
      return res.status(200).json({ msg: 'Success! Updated Successfully' });
    }
  );
};

exports.updateProfile = async (req, res) => {
  const { id } = req.params;
  const {
    first_name,
    last_name,
    email,
    dob,
    mobile,
    street,
    postal_code,
    region,
    country,
  } = req.body;
  const userObj = {
    first_name,
    last_name,
    email,
    date_of_birth: dob,
    mobile,
    street,
    postal_code,
    region,
    country,
  };

  await Auth.UpdateById('user', userObj, 'id', id, (err, output) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: 'Server Error, Try again Later!' });
    }
    return res.status(200).json({ msg: 'OK', data: output });
  });
};

exports.updatePassword = async (req, res) => {
  const { id } = req.params;
  const { password, newPassword, confirmPassword } = req.body;

  await Auth.SelectById('user', 'id', id, async (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: 'Server Error, Try again Later!' });
    }
    if (result) {
      if (result.length) {
        validatePassword(password, result[0].password).then(async (isMatch) => {
          if (isMatch) {
            if (newPassword === confirmPassword) {
              const newPasswordHash = await hashPassword(newPassword);
              Auth.UpdateById(
                'user',
                'password',
                'id',
                newPasswordHash,
                id,
                (err, output) => {
                  if (err) {
                    console.log(err);
                    return res
                      .status(500)
                      .json({ error: 'Server Error, Try again Later!' });
                  }
                  return res.status(200).json({ msg: 'OK! Password Updated' });
                }
              );
            } else {
              return res.status(400).json({ error: 'Password does not match' });
            }
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

exports.GetVotersPage = async (req, res) => {
  let userID = parseInt(req.url.slice(-12).split('$')[0].split('?')[1]);
  let contestID = parseInt(req.url.slice(-12).split('$')[1]);

  res.render('voterpage', { userID, contestID });
};

exports.Voter = async (req, res) => {
  // console.log(req.body);
  let { userID, cid, quantity } = req.body;

  if (!req.body) return res.send({ msg: 'Invalid data' });
  if (isNaN(parseInt(quantity)) == true)
    return res.send({ msg: 'Amount should be between $1 to $5 ' });
  sql.query(
    'update contestant_table set vote_state = ? where user_id = ? and contest_id = ?',
    [quantity, userID, cid],
    async (errs, feedback) => {
      if (errs) return res.send({ msg: 'Network Error, try again' });

      paypal.configure({
        mode: 'sandbox', //sandbox or live
        client_id:
          'AQNl1G__spUXHpizpXGWpL-Wm2fjafZKPZ8IGXY9uRMkIOAQhJ_3FPozGEIpUK_C6Mon7ybXFKGCJ5mp',
        client_secret:
          'EHPkg7whJD9eLNQW_Pm4FdxO0SSKi1CHhv8d93_O0fvdBI8Gr6-Qv8mRnt7_TT6DS1upmFxeap90yi2L',
      });

      var create_payment_json = JSON.stringify({
        intent: 'sale',
        redirect_urls: {
          return_url: 'http://localhost:8080/api/auth/success',
          cancel_url: 'http://localhost:8080/api/auth/cancel',
        },
        payer: {
          payment_method: 'paypal',
        },

        transactions: [
          {
            amount: {
              total: `${quantity}`,
              currency: 'USD',
            },
            description: `${userID}xxx Voters $ ${cid}payment page xxx`,
          },
        ],
      });

      paypal.payment.create(create_payment_json, function (error, payment) {
        // console.log('payment', payment);
        if (error) {
          req.err = error.response.message;
          return res.json(respUtil.getErrorResponsepayPAl(req));
        } else {
          // console.log(payment);

          for (let i = 0; i < payment.links.length; i++) {
            if (payment.links[i].rel === 'approval_url') {
              res.redirect(payment.links[i].href);
            }
          }
        }
      });
    }
  );
};

exports.VoteSuccess = async (req, res) => {
  // console.log('ReTURE QUERY PARAMS ', req.query);

  let userID;
  let cid;

  const payerId = req.query.PayerID;
  const paymentId = req.query.paymentId;
  const executePayment = {
    payer_id: payerId,
    transactions: [
      {
        amount: {
          total: '5',
          currency: 'USD',
        },
      },
    ],
  };

  paypal.payment.execute(paymentId, executePayment, function (error, payment) {
    if (error) {
      console.log('Success error ', error);
      req.err = error.response.message;
      // return res.json(respUtil.getErrorResponsepayPAl(req));
      return res.send('ERROR OCCURED TRY AGAIN');
    } else {
      // console.log(JSON.stringify(payment));
      req.i18nKey = 'transactionSuccess';
      userID = parseInt(payment.transactions[0].description.split('$')[0]);
      cid = parseInt(payment.transactions[0].description.split('$')[1]);

      sql.query(
        'select vote_state from contestant_table where user_id = ? and contest_id = ?',
        [userID, cid],
        (no, yes) => {
          if (no)
            return res.send('Network Error, but your payment was successful ');
          else {
            var vote_state = 0;
            for (var obj of yes) {
              vote_state = obj.vote_state;
            }

            sql.query(
              `update contestant_table set vote_count = vote_count + ${vote_state} where user_id = ? and contest_id = ?`,
              [userID, cid],
              (err, ponds) => {
                if (err) console.log(err), res.send('AN ERROR OCCURE');
                else {
                  return res.render('voteSuccess');
                }
              }
            );
          }
        }
      );
    }
  });
};
exports.contactForm = async (req, res) => {
  const { name, email, message } = req.body;
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: ' ',
      pass: ' ',
    },
  });

  const mailOptions = {
    from: ' ',
    to: ' ',
    subject: 'Contact Form',
    html: `<h1>Contact Form</h1>
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Message: ${message}</p>`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Email sent: ' + info.response);
    }
  });
};

exports.AddContest = async (req, res) =>
  new Contest(res).Create('contest', req.body);

exports.AddContestant = async (req, res) =>
  new Contest(res).CreateValidData('contestant_table', req.body);

exports.GetContest = async (req, res) => new Contest(res).Select('contest');
exports.GetContestant = async (req, res) =>
  new Contest(res).Select('contestant_table');

exports.GetAllContestant = async (req, res) =>
  new Contest(res).SelectSingleInnerJoin('contestant_table');

exports.GetContestantById = async (req, res) =>
  new Contest(res).SelectByInnerJoin('contestant_table', req.body.user_id);

exports.GetContestantByUUID = async (req, res) =>
  new Contest(res).SelectByUUID('contestant_table', req.body.uuid);

exports.GetSingleContestantById = async (req, res) => {
  console.log(req.body)
  console.log('params===', req.params)
  new Contest(res).MultipleSelectInnerJoin(
    'contestant_table',
    'user_id',
    'contest_id',
    req.body
  );
}

exports.deleteContestantById = async (req, res) =>
  new Contest(res, req).DeleteContestentById(
    'contestant_table',
    req.params.userID
  );

exports.deleteUserById = async (req, res) =>
  new Contest(res).DeleteById('user', req.body.id);

exports.deleteContestById = async (req, res) =>
  new Contest(res).DeleteById('contest', req.body.id);
