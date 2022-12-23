var express = require('express');
var app = express();
var port = process.env.port || 8090;

app.get("/Welcom",function(request,response)
{
    response.json("Welcome to Node js");
});

app.listen(port, function () {
    var datetime = new Date();
    var message = "Server running on Port:- " + port + "Started at :- "+ datetime;
    console.log(message);
});