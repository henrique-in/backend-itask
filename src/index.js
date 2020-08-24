const express = require('express');
const cors = require('cors');
const server = express();
server.use(cors());
server.use(express.json());

const TaskRoutes = require('./routes/TaskRoutes')

server.use('/task', TaskRoutes);

var porta = process.env.PORT || 8080;

server.listen(porta, ()=>{
  console.log('API ONLINE');
});