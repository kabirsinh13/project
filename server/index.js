require("dotenv").config();
const express = require('express');
const app=express();
const mongoose=require('mongoose');
const {MONGOURI} = require('./db');
const PORT = 5000;
const cors = require('cors');
// const multer = require("multer");
// const upload = require('./middleware/image');

// import schemas
require("./models/user");
require("./models/post");

app.use(require('./middleware/image'))

// import routes
app.use(express.json());
app.use(require('./routes/user'));
app.use(require('./routes/post'));

// connect database with server
mongoose.connect(MONGOURI);

mongoose.connection.on('connected',()=>{
    console.log("mongodb connected succesfully");
})
mongoose.connection.on('error',(err)=>{
    console.log(err);
})


app.use(cors())

// deploy project to server
app.listen(PORT,()=>{
    console.log("http://localhost:5000");
    console.log("Server is connected")
})