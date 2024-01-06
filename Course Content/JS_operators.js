// Operators exist in all coding languages
// An operator is something that allows you to compare and modify values

// 4 types of operators: Arithmetic, assignment, comparison and logical


// Arithmetic(+,-,*,/)
const someRandomVariable = 20 + 50;
const result = 20 + 50 / 2; // 45 - Uses PEDMAS

// modulus operator (similar to Python)
const modulus = 100%21; // will have remainder value

// exponent operator
const exponential = 8**2; // 64

// increment operator
let startingNumber = 0;
startingNumber ++;
startingNumber = startingNumber + 1;
console.log(startingNumber); // 2


// decrement operator
startingNumber --;
startingNumber = startingNumber - 1;
console.log(startingNumber); // 0




// Assignment operators (most basic one is the equals sign '=')
// reassignment operators work for all arithmetic operations
let x = 10;
x += 5;
console.log(x); // 15
// not a very clear way but shortcut



// Comparison operators (return boolean value)
const result1 = 20>18; // true

const result2 = 20===20; // true as 20 is equal to 20;

const result3 = 20 == '20'; // true 

const result4 = 20 !== '20'; // false

const result5 = 20 != '20'; // true

/*

=== : returns true if same value AND same type

== : returns true if same value regardless of type
as it first converts both values to the same data types

-> recommended to use triple equals sign 

!== : opposite of triple equals sign (checks if both value and data type are not equal to)

!=: opposite of double equals sign (checks if value is not equal to)

-> recommended to use !== 

*/


const myObj = {
    property1: 'some value',
    property2: 20
};

const myArray = [1,2,3,4,5];

myArray === myArray; // true

const anotherArray = [1,2,3,4,5];

myArray === anotherArray; // will return false! (probs cause arrays are mutable)
myArray == anotherArray; // still false



// Numeric comparison oprators
/*

>
>=
<
<=

*/


// Ternary operator (new thing)
const ternaryResult = 20 === 20 ? 'values match':'values do not match';

/*
if 20 == 20, assign to 'values match'
else, assign to 'values do not match'
*/

console.log(ternaryResult)

// the above code is the same as the following conditional
let resultVariable;
if (20===20) {
    resultVariable = 'values match';
} else {
    resultVariable = 'values do not match';
}



// Logical  operators 

// &&: (similar to 'and' in python)
20 === 20 && 10 === 10; // true
20 == 20 && 10 === 12; // false

// ||: (similar to 'or' in python)
20 === 20 || 10 === 12; // true
20 === 18 || 10 === 12; // false

// !: reverses the boolean output of the expression
!(20===20); // false
!(20!==20); // true


// note application of logical operator
const isUserLoggedIn = true;
const doesUserHavePermissions = false;
const canUserPerformAction = isUserLoggedIn && doesUserHavePermissions;


const trickResult = !(((40/20) === 2 && true) || ('yes' === 'no'));
// will return false
// if you are writing something so complicated, it is better to break it downn to improve readability


const functionResult = ( () => {
    return 20;
} ) (); 

// this function is going to automatically execute as we assigned it using an immmediately invoked format























 









