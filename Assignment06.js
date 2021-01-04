//06 -countOfAllNumbersSmallerThanTarget.js


function countOfAllNumbersSmallerThanTarge (nums,target) {
var count = 0;
for (i = 0; i < nums.length; i++) {
 if(nums[i]< target){
  count+=1;
  }
 }
console.log(count);
}
countOfAllNumbersSmallerThanTarge ([1,34,6,0,66,68,5], 67);
