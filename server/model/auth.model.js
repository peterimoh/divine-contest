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

exports.InnerJoin = (tableName, column, data, result) => {
  return sql.query(
    `SELECT *, user.uuid, contest.id as cid FROM ${tableName} INNER JOIN contest ON(${tableName}.contest_id = contest.id) INNER JOIN user ON(${tableName}.user_id = user.id) WHERE ${tableName}.${column} = ?`, [data],
    (err, output) => {
      if (err) return result(err, null);
      return result(null, output);
    }
  );
};

exports.MultiplySelect = (tableName, column1, column2, data, result) => {
  return sql.query(
    `SELECT * FROM ${tableName} WHERE ${column1} = ? AND ${column2} = ?`, [data[column1], data[column2]],
    (err, output) => {
      if (err) return result(err, null);
      return result(null, output);
    }
  );
};

exports.MultipleSelectInnerJoin = (tableName, column1, column2, data, result) => {
  return sql.query(
    `SELECT * FROM ${tableName} INNER JOIN contest ON(${tableName}.contest_id = contest.id) INNER JOIN user ON(${tableName}.user_id = user.id) WHERE ${column1} = ? AND ${column2} = ?`, [data[column1], data[column2]],
    (err, output) => {
      if (err) return result(err, null);
      return result(null, output);
    }
  );
};


exports.UpdateById = (tableName, column, id, data, idValue, result) => {
  return sql.query(
    `UPDATE ${tableName} SET ${column} = ? WHERE ${id} = ?`, [data, idValue],
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