var arr = [10,20,15,30,55,95]

//every();
var eve = arr.every(function(x) { return x > 5 });
//returns true because x is greater then 5.
console.log(eve);

//some();
var some = arr.some(function(x) { return x > 30 });
//returns true because we have 55 after 30 in array.
console.log(some);

//reduce();
var sum = arr.reduce(function(total, currentValue) {return total + currentValue});
//reduces the given array from left to right 
console.log("reduce"+"="+sum);

//reduceLeft();
var add = arr.reduceRight(function(total, currentValue) {return total + currentValue});
//reduces the given array from right to left
console.log("reduceRight"+"="+sum);

var name="rainbow"
//indexOf
var find = name.indexOf("i");
//gives index number from first
console.log(find);

//lastIndexOf
var findLast = name.lastIndexOf("o");
//gives index number from last
console.log(findLast);

