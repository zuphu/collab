var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  console.log(req.user);
  res.render('profile', 
  {
    user: req.user
  });
});

module.exports = router;
