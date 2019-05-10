const fs = require('fs');

class MyFile{
    constructor(fileName){
       this.fileName = fileName;
    }
 
    get data(){
       return fs.readFileSync( this.fileName ,"utf-8");
    } 
 
    set data(value){
        fs.writeFileSync(this.fileName, value, "utf-8", "w")
    }
}
let myFile = new MyFile("string.txt");
myFile.data = "hello! everyone"
console.log(myFile.data);
                     