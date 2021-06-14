const sql = require("mssql");
const config = require('config')
const db = { 
    user: config.get('user'),
    password: config.get('password'),
    server: config.get('server'),
    database: config.get('database')
};
const poolPromise =new sql.ConnectionPool(db)
    .connect()
     .then (pool =>{
        console.log("connected")
            return pool
        }).catch(err => console.log("failed to connect", err));


console.log("connection", poolPromise)
  module.exports = {
                    poolPromise:poolPromise,
                    sql:sql
                };
