const sql = require('../db/db.config');

exports.EmailValidate = (email, result) => {
  return sql.query(
    `SELECT * FROM user WHERE email = '${email}'`,
    (err, output) => {
      if (err) return result(err, null);
      return result(null, output);
    }
  );
};
