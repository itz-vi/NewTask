const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  task: String,
  status: String,
  deadline: String,
})

module.exports = mongoose.model('task', taskSchema);