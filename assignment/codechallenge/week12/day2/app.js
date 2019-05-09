
class MyArray{
    constructor(...array){
      this.array= array;
    }
    
    print(){
      this.array.forEach(function(a){
        console.log(a)
      });
    }
    
    search(element){
      return this.array.indexOf(element)
    };
  
    sort(array){
      this.array.sort(function ( a, b ){ return b-a;})
      return this.array
    }
  }
  
  
  class MySet {
    constructor(...numbers){
      this.set = new Set(numbers);
    }
    
    print(){
    this.set.forEach(function(x){
      console.log(x)
    })
   }
    
    find(x){
      return this.set.has(x)
    };
     
  
  }
  
  let myArray=new MyArray(1,2,3,4,6,7)
  myArray.print();
  console.log(myArray.sort())
  console.log(myArray.search(4))
  
  let mySet=new MySet(8,9,10,11,12)
  mySet.print();
  mySet.find(11)
  