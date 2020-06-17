const mongoose = require('mongoose')

let personSchema = new mongoose.Schema(
  {username: String, password: Number}
)

module.exports = mongoose.model('User', personSchema)
