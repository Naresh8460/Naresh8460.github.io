'use strict'

var bodyParser = require("body-parser");
var mongo = require("mongodb");
var express = require("express");
var session = require("express-session");

//creating app
var app = express();

//app setting
app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({secret: "marskey" }));

//connect to mongodb
var DB;

var mongoClient = new mongo.MongoClient('mongodb://127.0.0.1:27017/login',{useNewUrlParser: true});
mongoClient.connect(function(err){
    if(err){
        console.log("error connectiong mongodb");
    } else {
       console.log("connection successful");
    }
    DB = mongoClient.db("login");
})

//app routes
app.get("/signup", function(request, response){
    response.render("signup.hbs");
})

app.post("/signup", function(request, response){
   
    var confirmPass = request.body.confirmPass;
    console.log(confirmPass)

    var user={
        user: request.body.email,
        pass: request.body.password
    };
    console.log(user);
    if(user==""){
        return alert("please enter details")
    }

   
    if(user.pass == confirmPass){
        DB.collection("loginPush").insertOne(user, function(error){
          if(error){
              response.send("error while signup");
          }else{
            response.redirect("/login");
          }
        });
        return
    } else {
        response.redirect("/signup");
    }
})

app.get("/", function(request, response){
    response.render("login.hbs");
})

app.post("/", function(request, response) {

    var details={
        user: request.body.email,
        pass: request.body.password
    };
    console.log(details)

    DB.collection("loginPush").findOne(details, function(error, details) {
        if(error) {
            return response.send("db error occurred");
        }

        if(!details) {
            return response.redirect(`/login?success=false`)
        }
        request.session.user = details;
        response.redirect("/success");

    });
});

app.get("/success", function(request, response){
    response.render("success.hbs");
    
})

app.get("/logout", function(request, response) {
    request.session.user = null;
    response.redirect("/");
})

app.listen(8080);
