'use strict'

var fast = document.getElementById("fast");
var slow = document.getElementById("slow");
var CURRENT_COLOR="grey";
var TIMER;
var DURATION = 3000;



var changeColor = function(){
    var background = document.getElementById("body")
    background.style.backgroundColor = CURRENT_COLOR;

    if(CURRENT_COLOR == "grey"){
        CURRENT_COLOR = "black";
    } else{
        CURRENT_COLOR="grey";
    }
      
};
TIMER = setInterval(changeColor, DURATION);

slow.addEventListener("click", function(){
    clearInterval(TIMER);
    DURATION=DURATION*2;
    TIMER=setInterval(changeColor, DURATION);
});

fast.addEventListener("click", function(){
    clearInterval(TIMER);
    DURATION=DURATION/2;
    TIMER=setInterval(changeColor, DURATION);
});