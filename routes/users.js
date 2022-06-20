/*<!--     FileName: index.ejs      -->
<!--     Author: Dixit Hihoriya   -->
<!--     StudentID: 301201312     -->
<!--     Date : 19th June 2022     -->*/

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;