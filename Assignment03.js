// 03 -cutInHalfAndFloor.js

var x = 2;
function cutInHalfAndFloor(num) {

var r = num % x;
return (num - r) / x;  
}

console.log(cutInHalfAndFloor(45));