console.log('THE LAMBDA')

var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : process.env.AURORADB_INSTANCE_ADDRESS,
  user     : 'admin',
  password : 'password',
  port     : process.env.AURORADB_INSTANCE_PORT
});

exports.handler = (event, context, callback) => {
  console.log('EXPORTS HANDLER')
  connection.query('show tables', function (error, results, fields) {
      if (error) {
          connection.destroy();
          throw error;
      } else {
  console.log('CONNECTED')

          // connected!
          console.log(results);
          callback(error, results);
          connection.end(function (err) { callback(err, results);});
      }
  });
};
