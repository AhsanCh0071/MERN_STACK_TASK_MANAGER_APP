const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require("cors")

dotenv.config()

//connecting to database
mongoose.connect(
    process.env.MONGO_URI,
).then(()=>{console.log("DB Connected successfully!");
})

//connection failure handling
mongoose.connection.on('error',err=>{
    console.log("DB Connection Error");
})


// USING MIDDLEWARES 
app.use(cors())
app.use(express.json())
app.use(morgan("dev"));


// BRINGING IN THE ROUTES 
app.use('/api/tasks',require('./routes/tasks'))

//running app on specified port
app.listen(process.env.Port,()=>{console.log(`Server is listening at port ${process.env.Port}`);})