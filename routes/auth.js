var express = require('express');
var router = express.Router();
var HomeController = require('../controllers/home');
var UserController = require('../controllers/user')
// var MainController = require('../controllers/main')


router.get('/', HomeController.Index);
router.post('/', UserController.Authenticate);
// router.get('/', MainController.Index);

module.exports = router;
