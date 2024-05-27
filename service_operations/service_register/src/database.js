const { promisify } = require('util');
const { getDatabase } = require('./keys');

const mysql = require('mysql2');
const dbObject = getDatabase();
const pool = mysql.createPool(dbObject);

const conexion = (err, conn) => {   
    console.log(`CONNECTION  ${dbObject.host}, ENV: ${process.env.NODE_ENV}`);    
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.log('DATABASE CONECCTION WAS CLOSED');
        } else if (err.code === 'ER_CON_COUNT_ERROR') {
            console.log('DATABASE CONECCTION WAS TO MANY CONENECTIONS');
        } else if (err.code === 'ECONNERFUSED') {
            console.log('DATABASE CONECCTION WAS REFUSED');
        } else {            
            console.log('ERROR CONNECTION', err);
        }
    } else if (conn) {
        conn.release();
        console.log('DB is connected');
    }
    return;
};

pool.getConnection(conexion);
pool.query = promisify(pool.query);
module.exports = {pool, conexion};
