'use strict'

var BOOKS=[];


var searchBook = function(language){
    var resultArray = [];
    for (var i = 0; i< BOOKS.length; i++){
        if (BOOKS[i].language == language){
            resultArray.push(i);
        }
    }
    return resultArray;
};

var loadContent = function(){
    var request = new XMLHttpRequest();
    request.open("get","books.json");
    request.send();

    request.onreadystatechange= function() {
        if(request.readyState==4 && request.status==200) {
            BOOKS = JSON.parse (request.responseText);
    };
  };
};

var createTableRow = function(position){
    var book = BOOKS[position];

    var tbody = document.getElementById("tbody");

    var tr=document.createElement("tr");
    var Author = document.createElement("td");
    var Country = document.createElement("td");
    var Language = document.createElement("td");
    var Link = document.createElement("td");
    var Pages = document.createElement("td");
    var Title = document.createElement("td");
    var Year = document.createElement("td");    
    
     Author.innerText = book.author
     Country.innerText = book.country
     Language.innerText = book.language
     Link.innerText = book.link
     Pages.innerText = book.pages
     Title.innerText = book.title
     Year.innerText = book.year

     tr.appendChild(Author)
     tr.appendChild(Country)
     tr.appendChild(Language)
     tr.appendChild(Link)
     tr.appendChild(Pages)
     tr.appendChild(Title)
     tr.appendChild(Year)
     tbody.appendChild(tr)
};

var button = document.getElementById("search");
button.addEventListener("click", function(){
    var language = document.getElementById("input").value;
    if (language == ""){
        alert (" enter language to search books");
        return;
    }

    var bookResults = searchBook(language);

    var tbody = document.getElementById("tbody");
    tbody.innerHTML="";

    for (var i = 0; i<bookResults.length; i++){
        createTableRow(bookResults[i]);
    };
});

loadContent();