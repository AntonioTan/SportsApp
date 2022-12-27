var express = require('express');
const session = require('express-session');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  session = req.session
  if(session.userid) {
    res.render('index', { title: 'SportsApp' })
  } else {
    res.redirect('/login')
  }
});

module.exports = router;
