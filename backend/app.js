require("dotenv").config()
const express = require ("express")
const mongoose = require ("mongoose")
const workoutroutes = require ("./routes/routes")

// create express app
const app = express()

//middleware
app.use(express.json())


app.use("/api/workouts", workoutroutes  )

//connect to Database
mongoose.connect(process.env.Database)
    .then(function(){

        // listen to port
        app.listen(process.env.Port, function(){
            console.log("success")
        })
    })
    .catch(function(error){
        console.log(error.message)
    })
