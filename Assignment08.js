// 08 -sumOfAllEvenNumbers.js

function sumOfAllEvenNumbers(nums){
var sum = 0;
for (i = 0; i < nums.length; i++) {
   if (nums[i] % 2 === 0){
    sum+= nums[i];
   }
  }
console.log(sum); 
}
sumOfAllEvenNumbers([1, 2, 4, 3, 12]);

    