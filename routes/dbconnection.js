const sql = require("mssql");
const config = {
    user: 'webuser',
    password: 'MIaCN1S)@UR9',
    server: 'NovoSrv01\\SQLEXPRESS', 
    database: 'vicflix' 
};
const poolPromise =new sql.ConnectionPool(config)
    .connect()
     .then (pool =>{
        console.log("connected")
            return pool
        }).catch(err => console.log("failed to connect", err));


// connect to your database
// sql.connect(config, function (err) {

//     if (err) console.log(err);

//     // create Request object
//     var request = new sql.Request();
       
//     // query to the database and get the records
//     request.query('select * from cat_1_level_1 where cat_id = 1', function (err, recordset) {
        
//         if (err) console.log(err)

//         // send records as a response
       
//         console.log(recordset)
//     });
// });
    
        //     console.log("connected")
        //     return pool1
        // })
        // .catch(err => console.log("failed to connect", err));

// Attempt to catch disconnects 
// pool.on('connection', function (connection) {
//     console.log('DB Connection established');

//     connection.on('error', function (err) {
//         console.error(new Date(), 'MySQL error', err.code);
//     });

//     connection.on('close', function (err) {
//         console.error(new Date(), 'MySQL close', err);
//     });

// });
console.log("connection", poolPromise)
  module.exports = {
                    poolPromise:poolPromise,
                    sql:sql
                };
