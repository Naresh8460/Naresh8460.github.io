'use stirct'

//needed modules to work with

var express = require ("express");
var fs = require("fs");
var mongo = require("mongodb");


//create DB connection;
var DB;

var mongoClient = new mongo.MongoClient("mongodb://localhost/library", {useNewUrlParser: true});
mongoClient.connect(function(error){
    if(error) {
        console.log("Error connecting to the database.");
    } else {
        console.log("DB connection established.");
        DB = mongoClient.db("library");
    }
    
    fs.readFile("books.json", "utf-8", function(error,data){
        if (error){
            console.log("error");
            return;
        }
        console.log("Data read success");
        
        data=JSON.parse(data);

        DB.collection("book").insertMany(data, function(error,success){
            if (error){
                console.log(error);
                console.log("in data was not written");
                return;
            }
        })
        console.log("data insterted into DB");
    })
    
});

