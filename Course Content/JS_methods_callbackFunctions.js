// things to cover 
// reading documentation, callback functions, primitive values vs. object values, dates, libraries, null//undefined, NAN (not a number)
// things we won't cover rn: async/await, promises, classes, object-oriented programming

// how to read documentation
// MDN web docs

// see standard built-in objects; their methods are functions

// for MDN word docs, [] inside () show optional parameters for a method 


// join method
const strArray = ['hello', 'world'];
const convStr = strArray.join(' ');
console.log(convStr);


// includes method (to check if an array includes a word)
const checkArr = (testArr, testStr) => {
    // using includes method
    const result = testArr.includes(testStr); // second parameter optional
    return result;
}

arr1 = ['a','e','i','o','u'];
console.log(checkArr(arr1,'a'));

// callback functions - same syntax (regular,anonymous,arrow)
// this is a type of function which is called by another function
// both the called function and its parameters need to be included as arguements for the new function


function myCallback(someNumber) {
    return someNumber*2;
}

function mainFunction (randomNumber, shouldCall, callback) {
    let result = randomNumber;

    if (shouldCall) {
        result = callback(randomNumber);
    }

    return result;
}

console.log(mainFunction(20,true,myCallback))


// we could simplify and not write the function 

mainFunction(20,true, function (num) {
    return num*2
}) 

// even simpler
mainFunction (20, true, num => num * 2)


// why do we need callbacks?
// reusability and asynchornous programming



// map method: creates a new array populatued with the results of calling a provided function on every element in the calling array
// map method uses a callback function as a parameter
const arrToMap = [10,20,30];

function myCustomMapOperationCallBack(itemFromArray) {
    return itemFromArray*2;
}

const mappedArr = arrToMap.map(myCustomMapOperationCallBack);

console.log(mappedArr);  // [20,40,60]

// for a variety of use cases

const phraseArr = ['hello', 'world', 'my', 'name', 'is', 'Ammar'];

const firstLetters = phraseArr.map(itemFromArray => itemFromArray[0]);

console.log(firstLetters); // [ 'h', 'w', 'm', 'n', 'i', 'A' ]


// asynchronous function: executed while another person is waiting
// multiple calls to the web server at the same time to run code while previous code is running





 
