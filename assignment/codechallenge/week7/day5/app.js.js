'use strict'

var fs = require("fs");
var mongo= require("mongodb");

//create a connetion to db
var DB;

var mongoClient = new mongo.MongoClient("mongodb://localhost//library", {useNewUrlParser:true});
mongoClient.connect(function(error){
    if(error){
        console.log("error while connectiong to db.");
    }else{
        console.log("DB connected");
        DB = mongoClient.db("library");
    }
     DB.collection("book").find({}).toArray(function(error,data){
         if(error){
             console.log("error while finding data")
             return;
         }
            
         data= JSON.stringify(data,null,2);
        
         fs.writeFile("library.json", data, "utf-8", function(error){
             if (error) {
                 console.log("error writing to file.");
             }else{
                 console.log("data written successfully");
             }
         })
     });
});

