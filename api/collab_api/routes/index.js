var express = require('express');
var router = express.Router();
var path = require('path');
var debug = require('debug')('collab-api:index.js');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/signup', function(req, res) {
  res.render('signup');
});

module.exports = router;
