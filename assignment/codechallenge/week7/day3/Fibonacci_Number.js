'use strict'
var febo =[];
var number1=0;
var number2=1;

var myFunction=function(n){
    for (var i=0; i<n;i++){
    var num=number1+number2;
        febo.push(num);

        number1=number2;
        number2=num;
    }
    return febo;
}
myFunction(10);
