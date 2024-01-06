// NaN, null, undefined
// null and undefined are primitives


// not a number (NaN)
const myString = 'some string';
Number('30'); // 30
Number(myString); // NaN 
// NaN is being returned instead of an error



// null
//null evaluates to a false value
let num = null;
num === false // false
if (num) {
    console.log('this will not be reached');
} else {
    console.log('this will be reached');
}


// undefined - when a variable is empty
let myVar;
console.log(myVar) //  undefined

if (myVar) {
    console.log('this will not be reached');
} else {
    console.log('this will be reached');
}