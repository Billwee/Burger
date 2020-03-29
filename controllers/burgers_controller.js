var express = require('express');

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require('../models/burger.js');

// Create all our routes and set up logic within those routes where required.

//Showing all burgers when page loads
router.get('/', function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    // console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

//Adding a burger
router.post('/api/burgers', function(req, res) {
  burger.insertOne(req.body.burger_name, function(result) {
    // Send back the ID of the new quote
    console.log(req.body);
    res.json({ burger_name: result });
  });
});

//Eating a burger
router.put('/api/burgers/:name', function(req, res) {
  burger.updateOne(req.params.name, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
