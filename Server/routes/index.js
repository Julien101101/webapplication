var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index Express' });
});

router.get('/home', function(req, res, next) {
  res.send(`<h1>Hello</h1><br></br><h2>World</h2>`)
});

module.exports = router;
