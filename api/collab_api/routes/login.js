var express = require('express');
var router = express.Router();

/* POST logout. */
router.post('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/', function(req, res) {
  res.render('login');

});

module.exports = router;
