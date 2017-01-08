'use strict'

var file = {}

file.fizzBuzz = function(num) {

  if(num % 5 === 0 && num % 3 === 0){
    return "FizzBuzz";
  }else if(num % 5 === 0){
    return "Buzz";
  }
  else if(num % 3 === 0){
    return "Fizz";
  }else{
    return num;
  }

 }

file.findMinMax = function(l) {

  //l is the input array

  var output = [];
  var same = l[0];
  for(var j = 1; j < 2; j++){
    if(l[j] == same){
    output[0] = l[j];
    return output;
    }
  }
  if(l.length < 2){
    return l;
  }else{
    
    output[0] = minimum(l);
    output[1] = maximum(l);
    return output;
  }

 }


 function minimum(l){
  var min = l[0];
  for(var i = 1; i <= l.length; i++){
    if(l[i] < min){
      min = l[i];
    }
  }
  return min;
}

function maximum(l){
  var max = l[0];
  for(var i = 1; i <= l.length; i++){
    if(l[i] > max){
      max = l[i];
    }
  }
  return max;
}
module.exports = file;