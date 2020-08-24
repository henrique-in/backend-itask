const mongoose = require('mongoose');

require('dotenv').config();

const url = process.env.MONGO_URL;

mongoose.connect(url, {useUnifiedTopology:true,useNewUrlParser: true}).then(()=>{
  console.log('Connected')
})
;

module.exports = mongoose;