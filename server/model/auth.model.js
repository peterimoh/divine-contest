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

exports.InsertUser = (userObj, result) => {
  return sql.query(`INSERT INTO user(first_name, last_name, email, password, uuid, date_of_birth, mobile, street, postal_code, region, country) VALUES(?,?,?,?,?,?,?,?,?,?,?)`, [userObj], async (err, output) => {
    if (err) return result(err, null)
    return result(null, result)
  })
}