const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'amazon'
});

connection.connect((err) => {
    console.log(err);
});

module.exports = connection;