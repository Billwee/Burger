// Import MySQL connection.
var connection = require('../config/connection.js');

// Object for all our SQL statement functions.
var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = 'SELECT * FROM ' + tableInput + ';';
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function(val, cb) {
    var queryString = `INSERT INTO burgers (burger_name, devoured) VALUES ('${val}', false)`;

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  updateOne: function(condition, cb) {
    var queryString = `UPDATE burgers SET devoured = true WHERE id = ${condition}`;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

module.exports = orm;
