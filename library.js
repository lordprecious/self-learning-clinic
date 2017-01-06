'use strict'

var file = {}

file.computeAverage = function(num1,num2,num3) {

   var average = (num1 + num2 + num3) / 3;

   return average;

 }

 file.computeFactorial = function(num) {

 	var product;

 	 if(num === 0) {
        return 1
    } else {
        product = 1;
        for(var i = 1; i <= num; i++) {
            product *= i;
        }
        return product;
    }

 }

  file.convertTempCtoF = function(cTemp) {

   var fTemp = (cTemp * 9) / 5 + 32;

   return fTemp;

 }

  file.convertTempFtoC = function(fTemp) {

   var cTemp = (fTemp - 32) * (5/9 );

   return cTemp;

 }

 module.exports = file;
