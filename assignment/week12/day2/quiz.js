'use strict'

$(document).ready(function(){
  console.log("jquery")

var questionArray = [];
var currentQuestionIndex = 0;
var counter = 30;
var timer;

$.ajax({
  url: "quiz.json",
  method:"get",
  dataType: "json",
  success:function(data){
    questionArray = data
    displayQuestion();
    timerFunction()
  },
  error: function(){
    console.log("error occured while fetching");
  },
});
  
var timerFunction = function() {
  if (counter != 0) {
    $('#clock').text(counter)
    counter = counter-1;
  }else {
    alert ("sorry timeout");
    clearInterval(timer);
    button.disabled = true;
  };
};
 
var displayQuestion = function(){
  currentQuestionIndex = Math.floor ( Math.random() * 10 );
  $('#question').text(questionArray[currentQuestionIndex].question)
  timer = setInterval(timerFunction, 1000);
};

$('#submit').click(function () {
  var answer = $("#input").val();
    if (answer == "" ) {
    alert("please enter answer");
     return;
  }
    if(answer.toLowerCase() == questionArray[currentQuestionIndex].answer .toLowerCase()) {
      alert("Correct Answer");
      location.reload(true)
  } else {
      alert("Wrong Answer");
  }
 
  }); 
});