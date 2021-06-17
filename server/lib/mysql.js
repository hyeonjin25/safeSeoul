var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '7479',
    database : 'db_schema'
});

module.exports = connection;