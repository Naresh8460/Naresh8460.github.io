
'use strict'
var string = function (a, b) {

    var diffCount=0;
    var diffInLength = 0;
 
    if(a.length != b.length) {
        if (a.length > b.length){
            diffInLength = a.length - b.length;
        }else {
            diffInLength = b.length - a.length;
        }
    }

    for (var i=0; i < a.length; i++){
        if(a[i] != b[i]) {
            diffCount = diffCount+1;
        }
    }
    return diffCount + diffInLength;
};

console.log ( string("Java", "Javascript") );