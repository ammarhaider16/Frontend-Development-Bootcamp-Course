// method to pattern match within strings
// e.g. to check if an input for email address is valid
// great for validation but not only for validation

// "RegExp"

const emailValidatorRegExp = new RegExp('^.+@.+\..+$');

const userInput = 'invalidemail@g';

const isValid = emailValidatorRegExp.test(userInput); // tests user input

console.log(isValid); // false

// Identifiers, Quantifiers

const regex = new RegExp('g'); // can test if 'g' is in a string

const string1 = 'apples';
const string2 = 'oranges';

console.log(regex.test(string1)); // false
console.log(regex.test(string2)); // true




const regex2 = new RegExp('oranges'); // full words can be matched
// Note: regexes are case-sensitive


// power of the regex comes in from special characters
// also, you dont have to write in just one way. note:

/[a-z]/.test(string2); // [] checks is there is atleast 1 char from specified character group

/^f/.test(string1); // checks if first char is f


// quantifier
/[a-z]+/.exec(string1); // matches 1 or more times
// hence, it will match the entire string


/[a-z]{2,4}/.exec(string1); // range to match characters is specified


// flag (to specify search)
// g - global: searches throughout all of the string


const regex6 = /[a-z]+/g.exec(string1) // 


const str = 'hello world, 2023 @ more of a string'
// regex to macth the entire string:

const specificRegex = /[a-z ]+,[0-9 ]+@[a-z ]+$/.exec(str)



// exec vs. test
// exec returns an array of information on a match
// test returns true or false as it attempts to match a string
