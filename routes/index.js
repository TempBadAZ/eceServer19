var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ECE 413/513 Fall 2019' });
});

module.exports = router;
