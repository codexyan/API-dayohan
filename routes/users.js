var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource, dan ini merupakan halaman users');
});

module.exports = router;