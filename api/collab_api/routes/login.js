var express = require('express');
var router = express.Router();
var passport = require('passport');

router.post('/', passport.authenticate('local-login', {
  successRedirect : '/profile', // redirect to the secure profile section
  failureRedirect : '/login', // redirect back to the signup page if there is an error
  failureFlash : true // allow flash messages
}));

router.get('/', function(req, res) {
  res.render('login', { message: req.flash('error') } );

});

module.exports = router;
