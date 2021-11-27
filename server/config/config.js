const config = {
    port: process.env.PORT,
    db_host: process.env.DBHOST,
    db_user: process.env.DBUSER,
    db_password: process.env.DBPASS,
    db_name: process.env.DBNAME,
    jwt_secret: process.env.JWTSECRET,
}

module.exports =  config