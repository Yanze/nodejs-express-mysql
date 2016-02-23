var express = require('express');
var mysql = require('mysql');

var app = express();

var connection = mysql.createConnection({
  host: 'localhost',
  port: 8889,
  user: 'root',
  password: 'root',
  database: 'whatsfordinner'
});

connection.connect();


connection.query('SELECT * FROM user', function(err, rows, fields){
  if (!err)
   console.log('The solution is: ', rows);
 else
   console.log('Error while performing Query.');
});


app.listen(8000, function(){

});
