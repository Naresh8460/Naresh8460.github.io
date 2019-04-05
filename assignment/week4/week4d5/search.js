'use strict';

    var updateContent = function(data) {
    var section = document.getElementById("section");
    section.innerHTML = "";

    for (var i = 0; i < data.RelatedTopics.length; i++){
        var resultText = data.RelatedTopics[i].Result;
        url = data.RelatedTopics[i].FirstURL;

        if(!resultText || !url) {
            continue;
        }

        var a = document.createElement("a");
        a.innerText = resultText;
        a.href = url;

        var li = document.createElement ("li");
        li.appendChild ( a );

        var section = document.getElementById("section");
        section.appendChild ( li );


        var p = document.createElement("p");
        p.innerHTML = data.RelatedTopics[i].Result;
        section.appendChild(p);
    }
}

var loadContent = function() {
    var query = document.getElementById("searchInput").value;
    var url = "https://api.duckduckgo.com/?q=" + query + "&format=json&pretty=1";

    if(!query){
        alert ("please enter something to search");
    };

    // create an ajax object
    var request = new XMLHttpRequest();

    //open to connect a URL
    request.open("get", url);

    //send the request to the server resource.
    request.send();

    //to fetch the data and use accordingly.
    request.onreadystatechange = function(data){
        if (request.readyState == 4 && request.status==200){
            var jsonData = JSON.parse(request.responseText)
            updateContent(jsonData);
        }
    };
};

var button = document.getElementById("searchButton");
button.addEventListener("click", loadContent);