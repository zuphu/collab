var express = require('express');
var router = express.Router();

/* POST logout. */
router.get('/', function(req, res, next) {
  req.logout();
  res.redirect('/');
});

module.exports = router;
