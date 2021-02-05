require('dotenv').config()
// const fs = require('fs')
const express = require('express')
const app = express();
const mongoose = require('mongoose')
const cors = require("cors")
var bodyParser = require('body-parser')


app.use(express.json())
app.use(bodyParser.json())
app.use(cors())

mongoose.connect(process.env.url,{useNewUrlParser:true,useUnifiedTopology:true,createIndexes:true})
.then((data)=>console.log("connected db......"))
.catch(err=>console.log(err))
const tourRouter = require('./routes/tourRoutes')
const userRouter = require('./routes/userRoutes')


app.use('/api/v1/tours',tourRouter)
app.use('/api/v1/users',userRouter)



module.exports = app