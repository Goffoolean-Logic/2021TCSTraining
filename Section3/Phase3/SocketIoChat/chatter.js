// load the express module 
let express = require("express");

// create the reference of express module 
let app = express();

// then load the express-ws module and create the reference 
//of express-ws with the help of express reference using 
// IIFE
let ws = require("express-ws")(app);

let randommessages = ["Hey how's it going :)", "Now this is pod racing.", "THE NAME IS STEVE >:)", "ASL?", "Any coding problems to solve?"]

// http://localhost:9090
// open the html static web page 
app.get("/",(request,response)=> {
    response.sendFile(__dirname+"\\Template.html");
})

app.ws("/",(socket,request)=> {

    console.log("Client connected");

    // recieve message from client application 
    socket.on("message",(msg)=> {
        let randomnum = Math.floor(Math.random()*randommessages.length);
        console.log(msg);
        socket.send(randommessages[randomnum]);
        
    });
    // This is use to send the data to the client application.
})

// please run the server using http module not express module 
app.listen(9090,()=>console.log("Server running on port number 9090"));