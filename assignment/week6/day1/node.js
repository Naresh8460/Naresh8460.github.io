'use strict'

var express = require ("express");

var app = express ();

//addition

app.get('/add/:number1/:number2', function (request,response){
 
    var number1=request.params.number1;
    var number2=request.params.number2;
    var add= parseInt(number1) + parseInt(number2);
    response.send((number1)+"+"+(number2)+"=" + add);
});

//substraction

app.get('/sub/:number1/:number2', function (request,response){
 
    var number1=request.params.number1;
    var number2=request.params.number2;
    var sub=parseInt(number1) - parseInt(number2);
    response.send((number1)+"-"+(number2)+"=" + sub);
});

//Multiplication

app.get('/mul/:number1/:number2', function (request,response){
 
    var number1=request.params.number1;
    var number2=request.params.number2;
    var mul=parseInt(number1) * parseInt(number2);
    response.send((number1)+"X"+(number2)+"=" + mul);
});

//Division

app.get('/div/:number1/:number2', function (request,response){
 
    var number1=request.params.number1;
    var number2=request.params.number2;
    var div=parseInt(number1) / parseInt(number2);
    response.send((number1)+"/"+(number2)+"=" + div);
});

app.listen(3000);