let isPowerOfTwo = function(n) {
  while (n % 2 == 0) {
     n = n/2;      
     if ( n == 1) {
     return true;
   }
  }
   return false;
}

console.log(isPowerOfTwo(24));
