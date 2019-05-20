var checkPrime = function(n) {
    while (n % 2 == 1) {
       n = n/2;      
       if ( n >= 2 ) {
       return true;
     }
    }
     return false;
}

var genPrime = function(n){
  var primes = [];
  var counter = 1 ;
  while(primes.length !=n){
    if(checkPrime(counter)){
      primes.push(counter);
    }
    counter +=1;
  }
  return primes;
}
 console.log(checkPrime(127));
 console.log(genPrime(24));