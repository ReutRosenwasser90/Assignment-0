// 09-sumOfAllOddNumbers.js

function sumOfAllOddNumbers(nums){
var sum = 0;
for (i = 0; i < nums.length; i++) {
   if (nums[i] % 2 === 1){
    sum+= nums[i];
   }
  }
console.log(sum); 
}
sumOfAllOddNumbers([1, 3, 4, 7, 11]);