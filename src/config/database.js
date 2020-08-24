const mongoose = require('mongoose');

const url = 'mongodb+srv://itask:backend@itask.kdcwg.gcp.mongodb.net/itask;';

mongoose.connect(url, {useUnifiedTopology:true,useNewUrlParser: true}).then(()=>{
  console.log('Connected')
})
;

module.exports = mongoose;