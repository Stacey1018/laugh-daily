const mongoose = require('mongoose')

// const DB_URL = 'mongodb://localhost:27017/db'
const DB_URL = 'mongodb://144.34.177.82:27017/db'

mongoose.connect(DB_URL,{
  useNewUrlParser:true
})
mongoose.connection.on('connected',function(){
  console.log('连接成功')
})
module.exports = mongoose
