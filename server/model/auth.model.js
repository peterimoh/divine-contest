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

exports.SelectAdmin = (table, result) => {
  sql.query(`SELECT * FROM ${table} WHERE role = ?`, ['admin'], (err, output) => {
    if (err) return result(err, null);
    return result(null, output);
  });
}

exports.SelectUsers = (table, result) => {
  sql.query(`SELECT * FROM ${table} WHERE role = ?`, ['user'], (err, output) => {
    if (err) return result(err, null);
    return result(null, output);
  });
}

exports.Insert = (table, userObj, result) => {
  sql.query(`INSERT INTO ${table} SET ?`, [userObj], (err, output) => {
    if (err) return result(err, null);
    return result(null, output);
  });
}

exports.Select = (table, result) => {
  sql.query(`SELECT * FROM ${table}`, (err, output) => {
    if (err) return result(err, null);
    return result(null, output);
  });
}