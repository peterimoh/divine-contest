const Auth = require("../model/auth.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("../config/config");
const Vote = require("./vote.controller");
const Contest = require("./contest.controller");
const paypal = require("paypal-rest-sdk");

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

exports.GetVotersPage = async (req, res) => {
  let userID = parseInt(req.url.slice(-12).split("$")[0].split("?")[1]);
  let contestID = parseInt(req.url.slice(-12).split("$")[1]);

  res.render("voterpage", { userID, contestID });
};

exports.Voter = async (req, res) => {
  let { userID, cid, quantity } = req.body;

  paypal.configure({
    mode: "sandbox", //sandbox or live
    client_id:
      "AQNl1G__spUXHpizpXGWpL-Wm2fjafZKPZ8IGXY9uRMkIOAQhJ_3FPozGEIpUK_C6Mon7ybXFKGCJ5mp",
    client_secret:
      "EHPkg7whJD9eLNQW_Pm4FdxO0SSKi1CHhv8d93_O0fvdBI8Gr6-Qv8mRnt7_TT6DS1upmFxeap90yi2L",
  });

  var create_payment_json = JSON.stringify({
    intent: "sale",
    redirect_urls: {
      return_url: "http://localhost:8080/api/auth/success",
      cancel_url: "http://localhost:8080/api/auth/cancel",
    },
    payer: {
      payment_method: "paypal",
    },

    transactions: [

      {
        amount: {
          total: `${quantity}`,
          currency: "USD",
        },
        description: `${userID}xxx Voters $ payment page xxx${cid}`,
      },

    ],

  });

  paypal.payment.create(create_payment_json, function (error, payment) {
    console.log("payment", payment);
    if (error) {
      req.err = error.response.message;
      return res.json(respUtil.getErrorResponsepayPAl(req));
    } else {
      console.log(payment);

      for (let i = 0; i < payment.links.length; i++) {
        if (payment.links[i].rel === "approval_url") {
          res.redirect(payment.links[i].href);
        }
      }
    }
  });
};

let ans = {
  id: "PAYID-MHDTJJA5H571037UY7078323",
  intent: "sale",
  state: "approved",
  cart: "0FG68036VN442601F",
  payer: {
    payment_method: "paypal",
    status: "VERIFIED",
    payer_info: {
      email: "sb-iwpxs10689322@personal.example.com",
      first_name: "John",
      last_name: "Doe",
      payer_id: "WK3HN3D4KZZMU",
      shipping_address: {
        recipient_name: "John Doe",
        line1: "1 Main St",
        city: "San Jose",
        state: "CA",
        postal_code: "95131",
        country_code: "US",
      },
      country_code: "US",
    },
  },
  transactions: [
    {
      amount: {
        total: "25.00",
        currency: "USD",
        details: {
          subtotal: "25.00",
          shipping: "0.00",
          insurance: "0.00",
          handling_fee: "0.00",
          shipping_discount: "0.00",
          discount: "0.00",
        },
      },
      payee: {
        merchant_id: "7CGJMZP53H85S",
        email: "sb-ltnqn10531804@business.example.com",
      },
      description: "1xxx Voters $ payment page xxx1",
      item_list: {
        shipping_address: {
          recipient_name: "John Doe",
          line1: "1 Main St",
          city: "San Jose",
          state: "CA",
          postal_code: "95131",
          country_code: "US",
        },
      },
      related_resources: [
        {
          sale: {
            id: "71E80266AV919592U",
            state: "completed",
            amount: {
              total: "25.00",
              currency: "USD",
              details: {
                subtotal: "25.00",
                shipping: "0.00",
                insurance: "0.00",
                handling_fee: "0.00",
                shipping_discount: "0.00",
                discount: "0.00",
              },
            },
            payment_mode: "INSTANT_TRANSFER",
            protection_eligibility: "ELIGIBLE",
            protection_eligibility_type:
              "ITEM_NOT_RECEIVED_ELIGIBLE,UNAUTHORIZED_PAYMENT_ELIGIBLE",
            transaction_fee: { value: "1.36", currency: "USD" },
            parent_payment: "PAYID-MHDTJJA5H571037UY7078323",
            create_time: "2021-12-25T15:11:49Z",
            update_time: "2021-12-25T15:11:49Z",
            links: [
              {
                href: "https://api.sandbox.paypal.com/v1/payments/sale/71E80266AV919592U",
                rel: "self",
                method: "GET",
              },
              {
                href: "https://api.sandbox.paypal.com/v1/payments/sale/71E80266AV919592U/refund",
                rel: "refund",
                method: "POST",
              },
              {
                href: "https://api.sandbox.paypal.com/v1/payments/payment/PAYID-MHDTJJA5H571037UY7078323",
                rel: "parent_payment",
                method: "GET",
              },
            ],
          },
        },
      ],
    },
  ],
  failed_transactions: [],
  create_time: "2021-12-25T15:11:31Z",
  update_time: "2021-12-25T15:11:49Z",
  links: [
    {
      href: "https://api.sandbox.paypal.com/v1/payments/payment/PAYID-MHDTJJA5H571037UY7078323",
      rel: "self",
      method: "GET",
    },
  ],
  httpStatusCode: 200,
};

exports.VoteSuccess = async (req, res) => {
  console.log("ReTURE QUERY PARAMS ", req.query)
  const payerId = req.query.PayerID;
  const paymentId = req.query.paymentId;
  const executePayment = {
    payer_id: payerId,
    transactions: [
      {
        amount: {
          total: "5",
          currency: "USD",
        },
      },
    ],
  };
  paypal.payment.execute(paymentId, executePayment, function (error, payment) {
    if (error) {
      console.log("Success error ", error);
      req.err = error.response.message;
      // return res.json(respUtil.getErrorResponsepayPAl(req));
      return res.send("ERROR OCCURED TRY AGAIN");
    } else {
      console.log(JSON.stringify(payment));
      req.i18nKey = "transactionSuccess";
      return res.send("SUUCESSFULL PAYMENT");
      //  return res.json(respUtil.successResponse(req));
    }
  });
};
// const create_payment_json = {

//   intent: "Test",

//   payer: {
//     payment_method: "paypal",
//   },

//   redirect_urls: {
//     return_url: "http://localhost:8080/success",
//     cancel_url: "http://localhost:8080/cancel",
//   },
//   transactions: [
//     {
//       item_list: {
//         items: [
//           {
//             name: "Redhock Bar Soap",
//             sku: "001",
//             price: "25",
//             currency: "USD",
//             quantity: 1,
//           },
//         ],
//       },
//       amount: {
//         currency: "USD",
//         total: "25",
//       },
//       description: "Washing Bar soap",
//     },
//   ],
// };

// paypal.payment.create(create_payment_json, function (error, payment) {
//   if (error) {
//     console.log(error)
//     res.redirect("back")
//   } else {
//     for (let i = 0; i < payment.links.length; i++) {
//       if (payment.links[i].rel === "approval_url") {
//         res.redirect(payment.links[i].href);
//       }
//     }
//   }
// })

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
