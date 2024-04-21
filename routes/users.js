const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Newtask");

const userSchema = mongoose.Schema({
  user: String,
  password: String,
  secret: String,
})

module.exports = mongoose.model('user', userSchema);