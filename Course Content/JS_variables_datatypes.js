

const myArray = [10,20,30,40];
myArray.push(50);
myArray.reverse();

// these nitty gritty functions are not super reqd
// Bootcamp won't cover absolutely everything

// to print, use console.log
console.log('hello world');
const fV = 20;


/*
This is the way to write a
multi-line comment
*/


// variables and data types
// variables are stored in the memory

const strVariable = 'Learning code is a good skill';

const dictVariable = {firstProp: 'hello'};

console.log(strVariable);

// VSCode picks up Syntax Errors

// declaration and assignment
const newVar = "hello world";

// declaration and assignment can be sepearate as well
let anotherVariable; // declaration
anotherVariable = 20; // assignment
console.log(anotherVariable);

let var2 = 10;
var var3 = 10;  // another way

/*

const vs let vs var
-> note that reassignment and redeclaration are different

var is not preferred; var allows reassignment and redeclaration

const declares constant variable and does not allow redeclaration or reassignment

let allows reassignment but not redeclaration-> use when you expect reassignment

*/ 


let counter = 0;
counter = counter + 1;
counter ++; 
console.log(counter) // 2

const count = 0;
// count++; //TypeError

const TAX_RATE = 0.08; 
// when you do not except reassignment, use const



// Variable naming conventions for JS; think of them as a twitter hashtag

// camel case - preferred
const yourFirstVariable = 10;

//  snake case - not preferred
const your_first_variable = 10;

console.log(yourFirstVariable)
console.log(your_first_variable)

// style guides: specifications for writing javascript (include naming conventions and use cases for JS features)
// mostly camel case is recommended across the community



// data types in javaScript
const oneVariable = 10; const secondVariable = 20; // valid expression but semi colons are important

// javascript automatically identifies the data type (it is a dynamically typed variable)
// hence, the type of each variable is figured out automatically

const variable1 = 10; // number
const variable2 = 'some value'; // string; convention is to use single quotes
const variable3 = false; // boolean
const variable4 = '10'; // string

// to check data type, use the built-in 'typeof' function
console.log(typeof variable1);
typeof variable2;
typeof variable3;
typeof variable4;

// data type identification is important to prevent syntax and semantic errors

// convert string to number
const sumNum = Number(variable4) + variable1;
console.log(sumNum);


// Array (like a list)
const firstArray = [10,20,30,40,50];

// you can have multiple data types in an array
const secondArray = [10, 'a string', {prop: 'skldb'},[1,2]];

// arrays are indexed; just like lists in python(same rules)
secondArray[3][1] // 2 (this used indexes in nested arrays)


// Objects - they are like a complex container
// you can make them infinitely complex or nested
// they are like dictionaries, with key-value pairs

const objectVariable = {prop1: 20, prop2: 50};

// DIFFERENT FROM PYTHON DICTS: dot notation used to access properties

objectVariable.prop1 // 20

// properties can be infinitely nested within other properties

nestedObject = {
    layer1 : {
       layer2 : {
            layer3: {
                targetValue : 20
            }
        } 
    }
}

nestedObject.layer1.layer2.layer3.targetValue;

// can also use key - note syntax
objectVariable['prop1']


const functionContainerVariable = function() {
    return 20
}

// using a function can also be another way to assign a variable


// challenge problem
const b1 = 20; const b2 = '40';
const resultVar = b1 + b2;
console.log(resultVar); // will print 2040