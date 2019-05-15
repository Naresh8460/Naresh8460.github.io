var counter = 1;

//global counter
$('#globalBtn').click(function(){
    $('#global').text(counter)
    counter = counter++;
})

//object counter
var object = {
    addCountOne(){
        $('#object').text(counter)
        this.counter = counter++
    }
}
$('#objectBtn').click (object.addCountOne);

//closure counter
function closureCount(){
    function addCount(){
         $('#closure').text(counter)
         counter = counter++;
    }
    return addCount();
}
$('#closureBtn').click(function(){
    alert("clicked")
});

