//jshint esversion:6
const express = require('express')
const ejs = require('ejs')
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();








const app = express()

mongoose.connect(process.env.MONGO_URI ,{
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() =>{
  console.log('mongo db connected..')
}

);






app.get('/', (req, res) =>{
  res.send('Api is running')
})



const PORT = process.env.PORT 

app.listen(PORT, console.log("Port start running "))