'use strict'

var pattern = function(n) {
    for (var i=1; i <= n; i++) {
        var line = " ";
        for (var j =1; j <= i; j++){
            line= line + "*";
        }
        console.log(line);
    };

    for(var i=n; i>=1; i--) {
        var line = " ";
        for (var j=1; j<=i; j++){
            line = line + "*";
        }
        console.log(line);
    }
};

pattern(5);
