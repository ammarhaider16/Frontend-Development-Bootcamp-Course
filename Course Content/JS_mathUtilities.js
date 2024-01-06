// recall dates
new Date(); // using the constructor syntax

// for math libraries, we do not call methods on objects
// we use static methods and they are called on the object directly


Math.PI;
Math.E;

// abs - for absolute value
Math.abs(-60); // 60

// ceil - to round up
Math.ceil(Math.PI); // 4

// floor - to round down
Math.floor(Math.PI); // 3

// round -to round to the nearest number
Math.round(Math.PI); // 3

// min and max - take list directly, do not insert array
console.log(Math.min(1,2,3,4,5,6))
console.log(Math.max(1,2,3,4,5,6))

// random - random decimal between 0 and 1
Math.random();

// how to get random index of an array
// multiply random number by length of the array
// this value needs to be floored for valid index range
numArr = [1,2,3,4,5,6,7,8];
const randomIndex = Math.floor(Math.random() * numArr.length);

console.log(numArr[randomIndex])