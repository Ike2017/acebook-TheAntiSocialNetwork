var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  user_id: String,
  id: String,
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  dateCreated: { type: Date, default: Date.now() },
});

var User = mongoose.model('Users', UserSchema);
  //hashing a password before saving it to the database
  UserSchema.pre('save', function (next) {
    var user = this;
    bcrypt.hash(user.password, 10, function (err, hash){
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    })
  });
  UserSchema.statics.authenticate = function (email, password, callback) {
    User.findOne({ email: email })
      .exec(function (err, user) {
        if (err) {
          return callback(err)
        } else if (!user) {
          var err = new Error('User not found.');
          err.status = 401;
          return callback(err); 
        }
        bcrypt.compare(password, user.password, function (err, result) {
          if (result === true) {
            return callback(null, user);
          } else {
            return callback();
          }
        })
      });
  };
// 
// User.findByIdAndRemove({'_id': {"$oid":"5e3bfb927b5e1231762bd7f8"}}).exec(function(err){
//   console.log(User);
// });


module.exports = User;
