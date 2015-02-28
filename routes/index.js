var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome!' });
});
router.get('/labs', function(req, res, next) {
  res.render('labs', { title: 'My labs' });
});

module.exports = router;
