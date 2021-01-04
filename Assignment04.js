// 04 -countOfAllBooleans.js

function countOfAllBooleans(arr) {
var count  = 0;
for(i=0; i<arr.length; i++){ 
  if(arr[i] === true || arr[i] === false){
    count += 1; 
  }
}
console.log(count); 
}
countOfAllBooleans(["hello", "world", 3, "nice", 99, Infinity, -Infinity, true, true, true, false]);