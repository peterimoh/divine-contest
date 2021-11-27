const sql = require('mysql');
const config = require('../config/config');

const con = sql.createConnection({
  host: config.db_host,
  user: config.db_user,
  password: config.db_password,
  database: config.db_name,
});

con.connect(function (err) {
  if (err) throw err;
  console.log(
    `================  DB CONNECTED SUCCESSFULLY!=========================`
  );
});

con.query(
  `CREATE TABLE IF NOT EXISTS user(id INT(11) NOT NULL AUTO_INCREMENT, first_name TEXT(1000) NOT NULL, last_name TEXT(1000) NOT NULL, email VARCHAR(255) NOT NULL, password TEXT(1000) NOT NULL, uuid TEXT(1000) NOT NULL, date_of_birth DATE NOT NULL, mobile TEXT(1000) NOT NULL, street VARCHAR(255) NOT NULL, postal_code INT(11) NOT NULL, region TEXT(1000) NOT NULL, country TEXT(1000) NOT NULL,  profile_pic BLOB(1000) NULL, full_pic BLOB(1000) NULL, role TEXT(1000) DEFAULT 'user' NOT NULL, PRIMARY KEY(id))`,
  (err, result) => {
    if (err) return console.log(err);
  }
);

module.exports = con;
