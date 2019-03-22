'use strict'

var questionArray = [];
var currentQuestionIndex = 0;
var counter = 30;
var timer;

var loadContent = function(){
    var request = new XMLHttpRequest();
    request.open("get","quiz.json");
    request.send();

    request.onreadystatechange= function() {
        if(request.readyState==4 && request.status==200) {
          questionArray = JSON.parse (request.responseText);
        displayQuestion();
    };
  };
};

var timerFunction = function() {
  if (counter != 0) {
    var counterElement = document.getElementById("clock");
    counterElement.innerText = counter;
    counter = counter-1;
  }else {
    alert ("sorry timeout");
    clearInterval(timer);
    button.disabled = true;
  }
}
 
var displayQuestion = function(){
  currentQuestionIndex = Math.floor ( Math.random() * 10 );
  var questionElement = document.getElementById("question");
  questionElement.innerText = questionArray[currentQuestionIndex].question;

  timer = setInterval(timerFunction, 1000);
};

var button = document.getElementById("submit");
var submitted = function(){
  var answer= document.getElementById("input").value;
  if (answer == "" ) {
    alert("please enter answer");
    return;
  }
  
  if(answer.toLowerCase() == questionArray[currentQuestionIndex].answer .toLowerCase()){
    alert ("congratulation right answer");
    clearInterval(timer);
    window.location.reload(true);
  }else{
    alert ("wrong answer!");
  }
};

button.addEventListener("click", submitted);

loadContent();

