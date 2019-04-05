'use strict'

var express = require ("express");

var app = express ();

var bodyParser = require("body-parser");
 
app.set("view engine", "hbs");

app.use(bodyParser.urlencoded({ extended:false }));

var CONTACTS=[];

app.get("/contact", function(request, response){
    var data = {
        NAME :CONTACTS,
    };
    response.render("contact.hbs", data);
})

app.post("/contact", function (request, response){
    var contactName = request.body.contactName;
    var contactNum = request.body.contactNum;
    var details = {};
    details.name=contactName;
    details.numb=contactNum; 
    CONTACTS.push(details);

    console.log(details);

    response.redirect("/contact");
    

});

app.listen(3000);