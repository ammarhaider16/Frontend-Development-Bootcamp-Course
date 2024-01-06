// popular array methods 
/* remember that arrays are mutable so most methods
change the array itself rather than returning something

while strings and primitives are immutable*/





// push, pop, shift, unshift
// pop: removes and returns last array element
// shift: removes frst array element
// unshift: adds element in the front
// push: adds element in the end

const numArr = [1,2,3,5,6];

const finalElement = numArr.pop();
numArr.pop();
numArr.push(4,5,6);
numArr.unshift(0);

console.log(numArr);






// slice: returns shallow copy of an array from start to end (not included) index of the array
// if no indexes given, then copies complete array
const numArrCopy = numArr.slice();
const  shallowNumArrCopy = numArr.slice(3); // copy at index 3 onwards

numArr === numArrCopy; // false








// splice: changes contents of an array by removing or replacing existing elements of an array
// required parameter is start (starting index)
// optional: delete count - how many items are we going to delete after the starting index 
// if omitted, then all elements will be deleted
// optional: items to be added to the array

const mixArr = [1,2,3,'oops',4,5,6];
mixArr.splice(3,1,3.5); // will replace 'oops' with 3.5
console.log(mixArr); // [1,2,3,3.5,4,5,6]







// findIndex(): finds the index of an element
// we can specify an enitre testing function
// if not found then returns -1
// similar to indexOf() which returns one value only

const numIndex = mixArr.indexOf(3.5); // 3
const numValue = mixArr[numIndex]; // 3.5

// indexOf() does not work on objects

const moreComplexArr = [
    {
        firstName: 'Ammar',
        lastName: 'Haider'
    },
    {
        firstName:'Umair',
        lastName: 'Hassan'
    },
    {
        firstName: 'Shah',
        lastName: 'G'
        
    }
];

// moreComplexArr.indexOf({firstName: 'Shah'}) will not give you a match

// findIndex() uses a callback fucntion
const lastNameIndex = moreComplexArr.findIndex((arrItem) => {
    return arrItem.lastName === 'G';
})
// this format using findIndex will return the index of the first object
// for which the last name is 'G'
console.log(lastNameIndex); // 2






// map mehthod: returns an array with a callback function transforming each element in the array
//personal example

const arrCallback = arrItem => {
    return arrItem + " '27";
};

const nameArr = ['Ammar Haider', 'Kate Goodrich', 'Michael Ray']
const classNameArr = nameArr.map(arrCallback); 

console.log(classNameArr); // [ "Ammar Haider '27", "Kate Goodrich '27", "Michael Ray '27" ]






// forEach() method - simplified looping using a callback function

simpleArr = [1,2,3];

// old non-Mentos way of array looping
for (let i = 0; i<simpleArr.length; i++) {
    console.log(simpleArr[i])
};

// Mentos way of array looping using forEach() method
simpleArr.forEach(arrItem => {
    console.log(arrItem)
}); 

/* both of the above code blocks to the same thing
if two parameters specified for the callback function for array looping
the first parameter is arrItem and the second is index of the arrItem
*/







// includes() method - returns true or false to check whether
// an array includes a value
const colorArr = ['red','green','blue'];
colorArr.includes('orange'); // false
colorArr.includes('red'); // true

/* note: indexOf() can also be used to check whether 
an item exists within the array. if an item does not exist
within an array, -1 is returned
*/

console.log(colorArr.indexOf('orange'));
console.log(colorArr.indexOf('red'));









// filter() method - to filter an array based on a callback function
// note example to filter orders that are not digital
const ordersArr = [
    {
        productName: 'Toy Car',
        isDigital: false 
    },
    {
        productName:'Mobile Phone',
        isDigital: false
    },
    {
        productName: 'Netflix subscriptiom',
        isDigital: true   
    }
];

const filteredArr = ordersArr.filter(arrItem => {
    return arrItem.isDigital === false; // reuturns value if isDigital is false
});

console.log(filteredArr);








// reduce() method - to simplify an accumulator pattern

const figuresArr = [10,20,30,25,14];

const reducerCallback = (sum, arrItem) => {
    return sum += arrItem;
};

const result = figuresArr.reduce(reducerCallback, 0);
// the second parameter in the reduce method is the 
// initial value for the sum parameter in the callback function

console.log(result); // 99


// if you have an operation for which you cannot find a method:
// you will probably be using a library e.g. Lodash

