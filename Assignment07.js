// 07-countOfAllIndexMatchingNumbers.js

function countOfAllIndexMatchingNumbers(nums) {
var count=0;
  for(var i=0; i<nums.length; i++) {
  for(var j=0; j<nums.length; j++) {
    if(nums[i] == nums[j] && i!=j){
      count+=1; 
         break;
      }
     }
    }
   console.log(count);
  }
 countOfAllIndexMatchingNumbers([1,2,2,2,5,61,2]);