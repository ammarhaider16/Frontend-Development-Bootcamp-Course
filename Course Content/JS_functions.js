// note syntax

/*

function myFunction() {
    console.log('hello world, this is my first function');
}
myFunction() // function called

*/

// immediately invoked function: declaring and executing in the same step
// syntax: wrap a normal function in parantheses and follow with another pair of parantheses

(function anotherFunction() {
    console.log('hello');
}) ();



// Including parameters and arguements

function lenChoice(someNumber, someString) {
    
    if (someNumber > someString.length) {
        console.log("the number is bigger than the length of the string!");
    }

    else if (someNumber > 0) {
        console.log("atleast the number is positive");
    }

    else {
        console.log("there is nothing we can do");
    }
};

lenChoice(1,"str");



// another way to write a function: anonymous function
// we are giving it a name by assigning to a variable
// an anonymous function wont work unless assigned to a variable

const newFunction = function () {
    console.log('another thing');
}



// arrow function 
const arrowFunction = () => {
    console.log('i am an arrow function');
};
// improved readability
// put parameters in parantheses
// needs to be assigned to a variable
// arrow functions are the ones used the most


// getting return value from a function

const returnFunction = () => {
    const a = 20;
    return a;
};

const returnFunction2 = () => {
    const a = 20;
    return a < 30;
};


result = returnFunction();
result2 = returnFunction2();
console.log(result);
console.log(result2);


// return stops the function
const wrongReturnFunction = () => {
    let myNumber = 20;
    return myNumber;
    myNumber = 50; //this value will not be reassigned
}



// combining objects and functions

const myObj = {
    prop1: 50,
    prop2: returnFunction
};

myObj.prop2(); // returns 20


const myString = 'zach';
myString.replace('h','k');
myString; // is still zack as variable not assigned to the .replace() method
const newName = myString.replace('h','k').toUpperCase(); // chained methods
console.log(newName);


// Using the map method to return a modified array 
// the following function returns an array with each element of the original array multiplied by 2
const maps = (arr) => {

    const result = arr.map( (arrItem) => { // using an anonymous function
        return arrItem * 2;
    });

return result;
}


// Write a function to count the number of vowels in a string

const vowelCount = (inputStr) => {
    let count = 0;
    const vowels = ['a','e','i','o','u']
    inputArr = inputStr.split('');
    for (let i=0;i<inputArr.length;i++) {
        if (vowels.includes(inputArr[i])) {count+=1;}
    }
    return count
}

console.log(vowelCount("aexou"))



// Write a function to find the smallest number in an array

const smallestInt = (numArr) => {
    let smallest = numArr[0];
    for (let i = 0; i<numArr.length; i++) {
        numArr[i] < smallest ? smallest = numArr[i]: null;
    }
    return smallest
}

console.log(smallestInt([1,2,3,-1,4,6]))



// Write a function to calculate sum from 1 to variable called num
const sumFunction = (num) => {
    let total = 0;
    for (let i = 0; i<(num+1); i++) {
        total += i
    }
    return total
}

console.log(sumFunction(4))


// Math.floor(num) can be used to round down an floating point number



// Function to remove spaces from a string 

const removeSpace = (phrase) => {
    const Arr = phrase.split(" ");
    let finalPhrase  = "";

    for (let i = 0;i<Arr.length;i++) {
        finalPhrase += Arr[i].trim();
    }
    return finalPhrase
}

console.log(removeSpace("this was a message with spaces"))