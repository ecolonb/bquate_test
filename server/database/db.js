const mysql = require('mysql');
const { promisify } = require('util');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root9091',
    database: 'bquate_test_musica'
});

pool.getConnection((err, connection) => {
    if (err) {
        return console.error('Database error: ', err)
    }
    if (connection) {
        console.log('Databse connection OK: ');
        return connection.release();
    }
});
// Convert callbacks to promises functions
pool.query = promisify(pool.query);

module.exports = pool;