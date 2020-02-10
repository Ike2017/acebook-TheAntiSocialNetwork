var express = require('express');
var session = require('express-session');
var router = express.Router();

var UserController = require('../controllers/user')

router.get('/', UserController.Index);
router.post('/', UserController.Create);
router.get('/new', UserController.New);
router.post('/login', UserController.Authenticate);
router.get('/login', UserController.Authenticate);



//   app.post('/login', 
//   passport.authenticate('local', { failureRedirect: '/login' }),
//   function(req, res) {
//     res.redirect('/main');
//   });







module.exports = router;
