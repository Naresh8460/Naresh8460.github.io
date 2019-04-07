'use strict';

var express= require ("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json());

app.post("/add", function(request, response){
    var numb1 = request.body.number1;
    var numb2 = request.body.number2;
    var result = parseInt(numb1)+parseInt(numb2);
    var data={
        num1:numb1,
        num2:numb2,
        sum: result
    };
    response.send(data);
})

app.post("/sub", function(request, response){
    var numb1 = request.body.number1;
    var numb2 = request.body.number2;
    var result = parseInt(numb1)-parseInt(numb2);
    var data={
        num1:numb1,
        num2:numb2,
        sub: result
    };
    response.send(data);
})

app.post("/mul", function(request, response){
    var numb1 = request.body.number1;
    var numb2 = request.body.number2;
    var result = parseInt(numb1)*parseInt(numb2);
    var data={
        num1:numb1,
        num2:numb2,
        mul: result
    };
    response.send(data);
})

app.post("/div", function(request, response){
    var numb1 = request.body.number1;
    var numb2 = request.body.number2;
    var result = parseInt(numb1)/parseInt(numb2);
    var data={
        num1:numb1,
        num2:numb2,
        div: result
    };
    response.send(data);
})

app.listen(8080)