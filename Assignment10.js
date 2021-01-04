// 10- sumOfNumsWithinARange.js

function sumOfNumsWithinARange(nums, start, end){
var count = 0;
for (i = 0; i < nums.length; ++i) {
  if(nums[i] >= start && nums[i] <= end ){
   count+=1;
   }
 }
console.log(count);
}
sumOfNumsWithinARange([2,4,5,7,8,11,6,23,34],5,23);


