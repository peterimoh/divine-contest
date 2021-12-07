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
  `CREATE TABLE IF NOT EXISTS user(id INT(11) NOT NULL AUTO_INCREMENT, first_name TEXT(1000) NOT NULL, last_name TEXT(1000) NOT NULL, email VARCHAR(255) NOT NULL, password TEXT(1000) NOT NULL, uuid INT(11) NOT NULL, date_of_birth TEXT(1000) NOT NULL, mobile VARCHAR(255) NOT NULL, street VARCHAR(255) NOT NULL, postal_code INT(11) NOT NULL, region TEXT(1000) NOT NULL, country TEXT(1000) NOT NULL, paypal VARCHAR(255) DEFAULT NULL,  profile_pic BLOB(1000) NULL, full_pic BLOB(1000) NULL, contest_pic BLOB(1000) NULL, role TEXT(1000) DEFAULT 'user' NOT NULL, PRIMARY KEY(id))`,
  (err, result) => {
    if (err) return console.log(err);
  }
);

con.query(
  `CREATE TABLE IF NOT EXISTS contest(id INT(11) NOT NULL AUTO_INCREMENT, title TEXT(1000) NOT NULL, description TEXT(1000) NOT NULL, prize TEXT(1000) NOT NULL, create_time date NOT NULL, start_time date NOT NULL, end_time date NOT NULL, others TEXT(1000)  NULL, PRIMARY KEY(id))`,
  (err, result) => {
    if (err) return console.log(err);
  }
);

con.query(
  `CREATE TABLE IF NOT EXISTS contestant_table(id INT(11) NOT NULL AUTO_INCREMENT, user_id INT(11) NOT NULL, vote_count INT(11) NULL DEFAULT(0), create_time date NOT NULL, contest_id INT(11)  NOT NULL, PRIMARY KEY(id), FOREIGN KEY(user_id) REFERENCES user(id) ON DELETE CASCADE ON UPDATE CASCADE, FOREIGN KEY(contest_id) REFERENCES contest(id) ON DELETE CASCADE ON UPDATE CASCADE)`,
  (err, result) => {
    if (err) return console.log(err);
  }
);

module.exports = con;
