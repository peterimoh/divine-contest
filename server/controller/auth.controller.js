const Auth = require("../model/auth.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("../config/config");
const Vote = require("./vote.controller");
const Contest = require("./contest.controller");
const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox", //sandbox or live
  client_id: "####yourclientid######",
  client_secret: "####yourclientsecret#####",
});

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
    role: req.body.role || "user",
  };

  await Auth.SelectById("user", "email", email, async (err, user) => {
    if (err) return res.status(400).json({ error: "Server Error!" });
    if (!Object.entries(user).length == 0) {
      return res.status(400).json({ error: "User already Exist!" });
    } else {
      await Auth.Insert("user", userObj, (err, output) => {
        console.log(err);
        if (err)
          return res
            .status(500)
            .json({ error: "Server Error, Try again Later!" });
        return res.status(200).json({ msg: `OK`, data: output });
      });
    }
  });
};

exports.Login = async (req, res) => {
  const { email, password } = req.body;
  await Auth.SelectById("user", "email", email, (err, result) => {
    if (err)
      return res.status(400).json({ error: "Server Error, Try again later" });

    if (result) {
      if (result.length) {
        validatePassword(password, result[0].password).then((isMatch) => {
          if (isMatch) {
            const payload = {
              id: result[0].id,
              uuid: result[0].uuid,
              name: result[0].first_name + " " + result[0].last_name,
            };
            // console.log(req.user);
            jwt.sign(
              payload,
              config.jwt_secret,
              { expiresIn: "24h" },
              (err, token) => {
                res.json({
                  success: true,
                  token: "Bearer " + token,
                });
              }
            );
          } else {
            return res.status(400).json({ error: "Incorrect Password" });
          }
        });
      } else {
        return res.status(400).json({ error: "User does not exist" });
      }
    }
  });
};

exports.ReadUser = async (req, res) => {
  const { id } = req.params;

  await Auth.SelectById("user", "id", id, (err, result) => {
    if (err)
      return res.status(400).json({ error: "Server Error, Try again later" });

    if (result) {
      if (result.length) {
        return res.status(200).json({ msg: "OK", data: result });
      } else {
        return res.status(400).json({ error: "User does not exist" });
      }
    }
  });
};

exports.uploadDpToDB = (req, res) => {
  const { id } = req.params;
  console.log("user id ", id);
  const dp = req.file.buffer.toString("base64");
  Auth.UpdateById("user", "profile_pic", "id", dp, id, (err, output) => {
    if (err)
      return res.status(500).json({ error: "Server Error, Try again Later!" });
    return res.status(200).json({ msg: "OK", data: output });
  });
};

exports.uploadFullToDB = (req, res) => {
  const { id } = req.params;
  const full = req.file.buffer.toString("base64");

  Auth.UpdateById("user", "full_pic", "id", full, id, (err, output) => {
    console.log(err);
    if (err)
      return res.status(500).json({ error: "Server Error, Try again Later!" });
    return res.status(200).json({ msg: "OK", data: output });
  });
};

exports.Voter = async (req, res) => {
  
  const create_payment_json = {
    intent: "Vote",
    payer: {
      payment_method: "paypal",
    },
    redirect_urls: {
      return_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
    },
    transactions: [
      {
        item_list: {
          items: [
            {
              name: "Redhock Bar Soap",
              sku: "001",
              price: "25.00",
              currency: "USD",
              quantity: 1,
            },
          ],
        },
        amount: {
          currency: "USD",
          total: "25.00",
        },
        description: "Washing Bar soap",
      },
    ],
  };

  paypal.payment.create(create_payment_json, function (error, payment) {
    if (error) {
      throw error;
    } else {
      for (let i = 0; i < payment.links.length; i++) {
        if (payment.links[i].rel === "approval_url") {
          res.redirect(payment.links[i].href);
        }
      }
    }
  });
};

exports.AddContest = async (req, res) =>
  new Contest(res).Create("contest", req.body);

exports.AddContestant = async (req, res) =>
  new Contest(res).CreateValidData("contestant_table", req.body);

exports.GetContest = async (req, res) => new Contest(res).Select("contest");

exports.GetContestantById = async (req, res) =>
  new Contest(res).SelectByInnerJoin("contestant_table", req.body.user_id);

exports.GetSingleContestantById = async (req, res) =>
  new Contest(res).MultipleSelectInnerJoin(
    "contestant_table",
    "user_id",
    "contest_id",
    req.body
  );

exports.deleteContestantById = async (req, res) =>
  new Contest(res).DeleteById("contestant_table", req.body.id);

exports.deleteUserById = async (req, res) =>
  new Contest(res).DeleteById("user", req.body.id);

exports.deleteContestById = async (req, res) =>
  new Contest(res).DeleteById("contest", req.body.id);

exports.GetContestant = async (req, res) =>
  Contest(res).Select("contestant_table");
