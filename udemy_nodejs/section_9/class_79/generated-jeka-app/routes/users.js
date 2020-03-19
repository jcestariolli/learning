// Works with any routes that matches /users

var express = require('express');
// Creates a router to be exported in app.js
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
