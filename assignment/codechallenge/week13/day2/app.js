var gcounter = 1;
var ocounter = 1;
var ccounter = 1;

//global counter
$('#globalBtn').click(function(){
    $('#global').text(gcounter)
    gcounter = gcounter+1;
})

//object counter
var object = {
    addCountOne(){
        $('#object').text(ocounter)
        this.ocounter = ocounter++;
    }
}
$('#objectBtn').click (object.addCountOne);

//closure counter
function closureCount(){
    function addCount(){
         $('#closure').text(ccounter)
         ccounter = ccounter+1;
    }
    return addCount();
}
$('#closureBtn').click(closureCount);


