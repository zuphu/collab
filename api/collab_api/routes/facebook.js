var express = require('express');
var router = express.Router();

/* GET home page. */
app.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));

// handle the callback after facebook has authenticated the user
app.get('/auth/facebook/callback',
passport.authenticate('facebook', {
    successRedirect : '/profile',
    failureRedirect : '/'
}));


module.exports = router;
