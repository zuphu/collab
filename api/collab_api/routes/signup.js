var express = require('express');
var router = express.Router();
var path = require('path');
var debug = require('debug')('collab-api:index.js');
var passport = require('passport');

router.get('/', function(req, res) {
  res.render('signup');
});

// process the signup form
router.post('/', passport.authenticate('local-signup', {
  successRedirect : '/profile', // redirect to the secure profile section
  failureRedirect : '/signup', // redirect back to the signup page if there is an error
  failureFlash : true // allow flash messages
}));

module.exports = router;
