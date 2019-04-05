'use strict';

var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.set("view engine", "hbs");
app.use(bodyParser.urlencoded( {extended: false} ));

var userDB = [
    {name: "ansal", password: "ansal123"},
    {name: "vaibhav", password: "vaibhav123"},
    {name: "divyam", password: "divyam123"}
];

app.get("/", function(request, response) {
    response.render("login.hbs");
});

app.post("/login", function(request, response) {
    var name = request.body.user;
    var password = request.body.pass;
    
    for(var i = 0; i < userDB.length; i++) {
        if(userDB[i].name == name && userDB[i].password == password) {
            return response.send("Hello"+" "+name);
        }
    }

    response.send("Not Valid Details");
});

app.listen(8080);