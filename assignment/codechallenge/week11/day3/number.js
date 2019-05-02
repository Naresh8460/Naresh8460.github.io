var numbers = [4, 28, 43, 34, 37, 41, 26, 49, 33, 19, 36, 25, 47, 20, 1, 45, 6, 5, 27, 48];
console.log(numbers);

//imperative way
var evenNumbers = [];
for(var i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 == 0) {
		evenNumbers.push(numbers[i]*numbers[i]);
	}

}
console.log(evenNumbers);

//functional way
var numbers = [4, 28, 43, 34, 37, 41, 26, 49, 33, 19, 36, 25, 47, 20, 1, 45, 6, 5, 27, 48];
console.log(numbers);
var even = numbers.filter(function(x) {return x % 2 == 0;} ).map(function(x){return x*x})
console.log(even);