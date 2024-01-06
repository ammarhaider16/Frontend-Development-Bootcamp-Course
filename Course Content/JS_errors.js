// handling errors is important for smooth execution
// e.g. user internet breaks down during code exxecution
// error handling is important for user experience


// most common errors: ReferenceError, SyntaxError, TypeError


// ReferenceError: non-existing variable referenced
// Syntax and Type errors similar to python
// TypeError occurs when a method is called on the wrong data type


// Error Handling using a try/catch block

try {
    var num = 20;
    num.toUpperCase(); // type error
} catch (error) {
    console.log(error instanceof TypeError);
    console.log(error.message)
}

// comes in handy when you are using external libraries 
// whose behavior you are not sure about