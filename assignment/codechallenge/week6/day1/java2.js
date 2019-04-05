'use strict'
var factorial = function(n){
    var num= 1;
    for(var i =1;i<=n;i++){
        num = num*i;
    }
    return num;
  }
  console.log(factorial(7));
