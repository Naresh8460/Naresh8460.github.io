'use strict';

function MyArray(){
    this.array = [];
    for (var i = 0; i < arguments.length; i++ ){
        this.array.push(arguments[i]);
    }
    console.log(this.array)
}

MyArray.prototype.print=function(){
    this.array.forEach(function(a){console.log(a);});
}

// MyArray.prototype.search = function(searchElement){
//     for(var i = 0; i<this.array.length; i++){
//         if(this.array[i]==searchElement){
//             return i;
//         }
//     }
//     return -1
// }

MyArray.prototype.search = function(searchElement){
 return this.array.indexOf(searchElement)
}

MyArray.prototype.sort = function(){
    this.array.sort (function ( a, b ){ return b-a;})
}

var arr = new MyArray(1,2,3,7,6,5,4,3,10);
arr.print();
console.log(arr.search(15));
console.log(arr.search(1))
arr.sort();
arr.print();