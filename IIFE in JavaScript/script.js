
(function(){
  console.log('Immediately Invoking Function Expression');
}());
//The above IIFE can be written using normal function expression like this :
var func = function(){
  console.log('some text');
}
func();
//Instead of this we create a anonymous function and invoke it at last using (). That's IIFE, Simple.
