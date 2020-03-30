// Import the ORM to create functions that will interact with the database.
var orm = require('../config/orm.js');

//Database functions for calling the ORM functions
var burger = {
  selectAll: function(cb) {
    orm.selectAll('burgers', function(res) {
      cb(res);
    });
  },
  insertOne: function(val, cb) {
    orm.insertOne(val, function(res) {
      cb(res);
    });
  },
  updateOne: function(condition, cb) {
    orm.updateOne(condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;
