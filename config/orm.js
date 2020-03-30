// Import MySQL connection.
var connection = require('../config/connection.js');

// Object for all our SQL statement functions.
var orm = {
  // Pulls all data from the table and outputs it in a call back function
  selectAll: function(tableInput, cb) {
    var queryString = 'SELECT * FROM ' + tableInput + ';';
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // Adds a burger to the burgers table with the user entered name as the argument
  insertOne: function(val, cb) {
    var queryString = `INSERT INTO burgers (burger_name, devoured) VALUES ('${val}', false)`;

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  // Updates the devoured boolean for the selected burger
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
