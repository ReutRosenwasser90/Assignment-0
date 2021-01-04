// 05-countOfAllBooleansAndStrings.js

function countOfAllBooleansAndStrings(arr) {   
var count=0;          
for(var i =0; i< arr.length; ++i){
   if( typeof arr[i] ==="boolean" || typeof arr[i]==="string"){ 
   count+=1; 
   } 
 }                              
   console.log(count)                                
}
countOfAllBooleansAndStrings([true, "true", false, "false", 9]); 