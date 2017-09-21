var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
router.get('/auth/facebook',
  passport.authenticate('facebook', {
    scope : 'email'
  })
);

// handle the callback after facebook has authenticated the user
router.get('/auth/facebook/callback',
  passport.authenticate('facebook', {
      successRedirect : '/profile',
      failureRedirect : '/'
}));


module.exports = router;
