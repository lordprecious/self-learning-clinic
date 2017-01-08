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

file.aritGeo = function(arr) { 
  
  if(arr.length < 1) {
    return 0;
  }
  
  var diff = arr[1] - arr[0];
  var ratio = arr[1] / arr[0];

  var arith = true;
  var geo = true;

  for(var i = 0; i < arr.length - 1; i++) {
    if( arr[i + 1] - arr[i] !== diff )
        arith = false;
    if(arr[i + 1] / ratio !== arr[i])
        geo = false;
  }

  if(arith === true)
    return "Arithmetic";
  else if(geo === true)
    return "Geometric";
  else
    return -1;

}

module.exports = file;