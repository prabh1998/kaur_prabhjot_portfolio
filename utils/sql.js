const config = require('../config');
const sql = require('mysql');


const connect = sql.createConnection({
    host: config.host,
    password: config.password,
    user: config.user,
    port: config.port,
    database: config.database
});

module.exports = connect;
