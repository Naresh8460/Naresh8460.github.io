'use strict';

var fs = require("fs");

var messageWriter = function (filename,message, n){
    var data = " ";
    for(var i=1; i<=n; i++) {
        data = data+message;
    }
fs.writeFile(filename,data,function(err){
    if (err){
        console.log("error writing file");
    }else{
        console.log ("file has written successfully !")
    }
});
};

messageWriter("hello.txt","welcome to attainu\n",50);