'use strict';

//to include express in our application
var express = require ("express");

//to include body parser in our application
var bodyParser = require("body-parser");

//create express app
var app = express();

//use handlebar as a template engine
app.set("view engine", "hbs");

//to make expressJS to use body-parser to receive form data.
app.use(bodyParser.urlencoded({ extended: false  }));

//to hold data globally
var PLAYERS=[];

app.get("/players", function (request, response){
    var data = {
      players: PLAYERS,
      userName : "Naresh",
    };
   response.render("players.hbs", data);
});

app.post("/players", function(request, response) {
    var playerName = request.body.playerName;
    var playerLocation = request.body.playerLocation;
    var details = {};
    details.players = playerName;
    details.location = playerLocation;
    PLAYERS.push(details);
    
    // Once data is added, redirect to the GET page.
   
    response.redirect("/players");
});

app.listen(3000);
