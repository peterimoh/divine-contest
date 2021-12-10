const sql = require('../db/db.config');

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

exports.SelectById = (tableName, column, data, result) => {
  return sql.query(
    `SELECT * FROM ${tableName} WHERE ${column} = ?`, [data],
    (err, output) => {
      if (err) return result(err, null);
      return result(null, output);
    }
  );
};

exports.DeleteById = (tableName, column, data, result) => {
  return sql.query(
    `SELECT * FROM ${tableName} WHERE ${column} = ?`, [data],
    (err, output) => {
      if (err) return result(err, null);
      return result(null, output);
    }
  );
};