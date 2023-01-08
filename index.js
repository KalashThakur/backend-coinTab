const express = require("express");
require('dotenv').config(); 

const {connection} = require('./Config/db')
const userRoute = require('./Routes/user.routes.js')
const PORT = process.env.PORT || 8080; 
const cors = require("cors")
// https://randomuser.me/api/
const app = express();

app.use(express.json())

app.get("/", (req,res) => {
    res.send("Welcome")
});
app.use(cors())
app.use("/user", userRoute)


app.listen(PORT, async() => {
    try{
        await connection;
        console.log('Connected to DB successfully');
    }
    catch(err){
        console.log('Error occurred while connecting');
        console.log("err: ", err);
    }
    console.log('Listening at port 8080');
})