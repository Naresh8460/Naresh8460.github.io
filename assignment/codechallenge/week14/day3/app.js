class ColorConsole{
    constructor (color){
      this.color = color
    };
  
    log(txt){
     if (this.color == "red"){
     console.log("\x1b[31m",txt)
    }
     if (this.color == "green"){
     console.log("\x1b[32m",txt)
    }
     if (this.color == "yellow"){
     console.log("\x1b[33m",txt)
    }
  
   }
  };
  
  let myConsole = new ColorConsole("red");
  myConsole.log("Attain University");
  
   myConsole = new ColorConsole("green");
  myConsole.log("Attain University");
  
   myConsole = new ColorConsole("yellow");
  myConsole.log("Attain University");