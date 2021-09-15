let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let cors = require("cors");
let routerAccount = require("./router/Accounts.router");

// add middleware 
app.use(cors());
app.use(bodyParser.json())

//url database 
let url = "mongodb://localhost:27017/Coursestorage"

// connect the database 
mongoose.connect(url).then(res=>console.log("connected")).catch(error=>console.log(error+" We built this city."));

app.use("/api/course",routerAccount);

app.listen(9090,()=>console.log("Server running on port number 9090"));