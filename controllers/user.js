var User = require('../models/user');
var bcrypt = require('bcrypt');


var UserController = {
  Index: function(req, res) {
    // User.find(function(err, users) {
    //   if (err) { throw err; }

    res.render('user/index', { title: 'Sign Up'});
  },

  Create: function(req, res) {
    var user = new User({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password,
      user_id: req.body.user_id
    });

    user.save(function(err) {
      if (err) { throw err; }

      else {
        req.session.userId = user._id;
        res.status(201).redirect('/main')
      }
    });
  },

  New: function(req, res) {
    res.render('user/new', {});
  },


  Authenticate: function(req, res) {
    // var user = new User({
    //   firstname: req.body.firstname,
    //   lastname: req.body.lastname,
    //   email: req.body.email,
    //   password: req.body.password,
    //   user_id: req.body.user_id
    // });

    // User.findOne({ email: req.body.email }, function(err, user){
    //   console.log("LOOK HERE")
    //   if (err) {throw err;}
    //
    //   if (user){
    //     console.log("LOOK!!!")
    //     if (bcrypt.compare(req.body.password, user.password, function(err, result){
    //       if (err) {throw err;}
    //       if(result) {
    //         // req.session.userId = user._id;
    //         console.log("LOOK HERE")
    //         console.log(user._id)
    //         res.status(201).redirect('/main')
    //       }
    //     }));
    //   }

      User.find({ email: req.body.email}, function(err,user){
        console.log(user)
        console.log('1')
        if (!user) {
          throw err;
        }
        else {
          req.session.userId = user._id;
          res.status(201).redirect('/main')
        }
      });
  }

};
  
module.exports = UserController;
