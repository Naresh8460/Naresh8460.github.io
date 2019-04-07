'use strict';

//include packages
var express = require("express");
var mongo = require("mongodb");
var bodyParser = require("body-parser");

//create app
var app= express();

//app settings
app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({extended: false }));

//creating db connection
var DB;

//creating mongo client
var mongoClient = new mongo.MongoClient("mongodb://localhost:27017/attainu", {useNewUrlParser:true});
mongoClient.connect(function(error){
    if(error){
        console.log ("Error connecting the Database");
    }else {
        console.log("yo man you did it");
        DB = mongoClient.db("attainu");
    }
});

//app routes
app.get("/", function(request, response){
    response.render("home.hbs");
});

app.get("/instructors", function(request, response){
    DB.collection("instructors").find({}).toArray(function(error, instructors){
        if(error){
            console.log("error occured while connecting to instructors collection");
        }
        var data = {
            instructors:instructors
        };
        response.render("instructors.hbs", data);
    });
});

app.get("/instructors/add", function(request, response) {
    response.render("add_instructor.hbs");
});

app.post("/instructors/add", function(request, response){
    var name = request.body.name;
    var phone = request.body.phone;

    var newInstructor = {
        name: name,
        phone: phone
    }

    DB.collection("instructors").insertOne(newInstructor, function(error, result){
    if(error) {
        console.log("error occured while inserting data")
    }

    response.redirect("/instructors");
  });

});

app.get("/student", function(request, response){
    DB.collection("student").find({}).toArray(function(error, student){
        if  (error){
             console.log("error occured while reading student collection");    
        }
        var data = {
            student : student
        }

        response.render("student.hbs",data);
    })
})

app.get("/student/add", function(request, response){
       response.render("add_student.hbs",);
    })

app.post("/student/add", function(request, response){
    var name = request.body.name;
    var location= request.body.location;
    var number = request.body.number;

    var newStudent = {
    name:name,
    location:location,
    number:number
    }

    DB.collection("student").insertOne(newStudent,function(error, result){
        if(error){
            console.log("error occured while inserting data to DB")
        }
        response.redirect("/student");
    })
})

app.listen(8080);
