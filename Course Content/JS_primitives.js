/* 

primitives vs. objects
a primitive is a simplest form of something
it does not have any sort of functions or methods that can be called on them

while objects have methods that can be called on them

primitive data types include:
string, number, bigint, boolean, undefined, symbol, null

primitives are immutable

while primitives do not have methods, they behave as if they do
when a method is called on a primitive, javascript autoboxes
the value into a wrapper object and calls the method on that object
(the explanation is not required but good for clarity)

*/

const string1 = new String('Hello, world!'); // type = object
const string2 = 'Hello, world!'; // type = string

console.log(string1 === string2); // false
console.log(string1 == string2); // true

// this is because string1 is not actually a string

console.log(string2.toUpperCase());

// always better to use the string2 format 
