const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'reactamba',
});

connection.connect((err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log('Contectado a la bd');
  }
});

module.exports = connection;
