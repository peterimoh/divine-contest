const Auth = require('../../model/auth.model');
const bcrypt = require('bcryptjs');
const config = require('../../config/config');

//encrypt password
async function hashPassword(password) {
  return await bcrypt.hash(password, 10);
}

//compare encrpted password with password entered by user
async function validatePassword(password, hashedPassword) {
  return await bcrypt.compare(password, hashedPassword);
}

//register
exports.createScreen = (req, res) => {
  res.render('admin-create', {
    error: req.flash('error'),
    msg: req.flash('msg'),
  });
};

exports.createAdmin = (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  Auth.SelectById('user', 'email', email, (err, result) => {
    // console.log(err)
    // console.log(result, 'result')
    if (err) {
      console.log(err);
      req.flash('error', 'Internal Server Error');
      res.redirect('back');
    } else if (result.length > 0) {
      console.log(result);
      req.flash('error', 'User Already Exist');
      res.redirect('back');
    } else {
      hashPassword(password).then((hashedPassword) => {
        const adminObj = {
          email,
          password: hashedPassword,
          role: 'admin',
          first_name: 'super user',
          last_name: 'admin',
          uuid: 1,
          date_of_birth: 'nil',
          mobile: 'nil',
          street: 'nil',
          postal_code: 0,
          region: 'nil',
          country: 'nil',
        };
        Auth.Insert('user', adminObj, (err, output) => {
          if (err) {
            console.log(err);
            req.flash('error', 'Database Error!');
            res.redirect('back');
          } else {
            req.flash('msg', 'Admin Created Successfully');
            res.redirect('back');
          }
        });
      });
    }
  });
};

// login admin
exports.loginScreen = (req, res) => {
  res.render('admin-login', { error: req.flash('error') });
};

//dashboard
exports.dashboardScreen = (req, res) => {
  Auth.SelectById('user', 'role', 'user', async (err, users) => {
    if (err) {
      console.log(err);
      req.flash('error', 'Internal Server Error');
      res.redirect('back');
    }
    if (users)
      await Auth.Select('contestant_table', async (err, contestants) => {
        if (err) {
          console.log(err);
          req.flash('error', 'Internal Server Error');
          res.redirect('back');
        }
        if (contestants)
          await Auth.Select('contest', async (err, contest) => {
            if (err) {
              console.log(err);
              req.flash('error', 'Internal Server Error');
              res.redirect('back');
            }
            if (contest) {
              res.render('dashboard', {
                users,
                contestants,
                contest,
                error: req.flash('error'),
                msg: req.flash('msg'),
              });
            }
          });
      });
  });
};

// ===============users  ===========================
exports.ReadUsers = async (req, res) => {
  Auth.SelectById('user', 'role', 'user', (err, users) => {
    if (err) {
      console.log(err);
      req.flash('error', 'Internal Server Error');
      res.redirect('back');
    }
    if (users)
      res.render('user', {
        users,
        error: req.flash('error'),
        msg: req.flash('msg'),
      });
  });
};

exports.DeleteUser = async (req, res) => {
  const { id } = req.params;
  Auth.DeleteById('user', 'id', id, (err, output) => {
    if (err) {
      console.log(err);
      req.flash('error', 'Internal Server Error');
      res.redirect('back');
    } else {
      req.flash('msg', 'User Deleted Successfully');
      res.redirect('back');
    }
  });
};

// ===============contestants  ===========================
exports.ReadContestants = async (req, res) => {
  Auth.FetchAllDetails('contestant_table', (err, contestants) => {
    if (err) {
      console.log(err);
      req.flash('error', 'Internal Server Error');
      res.redirect('back');
    }
    // console.log(contestants);
    return res.render('contestant', {
      contestants,
      error: req.flash('error'),
      msg: req.flash('msg'),
    });
  });
};

//=========== contest ============================
exports.ReadContest = async (req, res) => {
  Auth.Select('contest', (err, contest) => {
    if (err) {
      console.log(err);
      req.flash('error', 'Internal Server Error');
      res.redirect('back');
    }
    if (contest)
      res.render('contest', {
        contest,
        error: req.flash('error'),
        msg: req.flash('msg'),
      });
  });
};

exports.CreateContest = async (req, res) => {
  const { contest_title, description, start_time, end_time, prize } = req.body;
  const contestObj = {
    title: contest_title,
    description,
    create_time: new Date(),
    start_time,
    end_time,
    prize,
  };
  Auth.Insert('contest', contestObj, (err, output) => {
    if (err) {
      console.log(err);
      req.flash('error', 'Internal Server Error');
      res.redirect('back');
    } else {
      req.flash('msg', 'Contest Created Successfully');
      res.redirect('back');
    }
  });
};
