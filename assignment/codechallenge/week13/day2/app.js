//global counter
var gcounter = 1;
$('#globalBtn').click(function(){
    $('#global').text(gcounter)
    gcounter = gcounter+1;
})

//object counter
var ocounter = 1;
var object = {
    addCountOne(){
        $('#object').text(ocounter)
        this.ocounter = ocounter++;
    }
}
$('#objectBtn').click (object.addCountOne);

//closure counter
function closureCount(){
    var ccounter = 1;
    function addCount(){
         $('#closure').text(ccounter)
         ccounter = ccounter+1;
         return ccounter;
    }
    return addCount;
}

var closure = closureCount();
$('#closureBtn').click(function(){
    closure();
});
