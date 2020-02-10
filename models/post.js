var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
  id: String,
  message: String,
  date: { type: Date, default: Date.now },
});

var Post = mongoose.model('Post', PostSchema);

module.exports = Post;
