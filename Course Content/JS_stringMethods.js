// popular string methods: replaceAll, toUpperCase, substring, trim, match




// replaceAll: returns new string with all matches of a pattern replaced by a string or a function
// hence takes multiple data types can be passed for a single para,eter
// const newStr = str.replaceAll(regexp|substr, newSubstr|function)

const myStr = 'My Dog jumped on the bed. My dog is a bad dog.';

const newStr = myStr.replaceAll('Dog', 'Cat'); // only replaces Dog (not dog)

// hence, we can use regular expression
// note that the regex needs to be with global flag

const correctStr = myStr.replaceAll(/[Dd]{1}og/g, 'cat');
// note: our regexp matches exactly one of D/d.
// this way we replace all occurences of dog or Dog

console.log(correctStr);





// toUpperCase -  converts string to uppercase
const uppercaseStr = myStr.toUpperCase();
console.log(uppercaseStr);





// substring (do not confuse with substr - do not use substr)
// is like a splice in python
const subStr = myStr.substring(5,7);





// trim - removes whitespace from both ends of the string
// does not remove whitespace from between the string
// good for data cleanup
const title = 'How to code?       ';
const trimTitle = title.trim() + ' This is trimmed.';

console.log(trimTitle);




// match method; do not use global flag in the regex

const regex = /[a-z]+/;
const jibberish = 'ajknfvjhbsdknikeajbffiqkjnwdi';
const check = jibberish.match(regex)



