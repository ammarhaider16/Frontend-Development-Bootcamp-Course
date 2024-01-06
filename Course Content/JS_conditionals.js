// Conditionals
  if ('some string' === 'another string') {
    console.log('strings are equal');
  }
  else {
    console.log('strings are not equal');
  }

// basic conditional syntax => """ if () {} else {} """ 


const myExpression = (20===20) && (50===50);
const firstNumber = 10;
const secondNumber = 10;
const jsExpression = firstNumber>secondNumber; // true


// Only if statement
if (jsExpression) {
console.log('this expression is true');
}

// if-else statement
if (jsExpression) {
    console.log('this expression is true');
}
else {
    console.log('this expression is false');
}

// you can add another code path with else if
// note: else if syntax => else if () {}
if (jsExpression) {
    console.log('this expression is true');
}   else if (firstNumber>0) {
    console.log('this expression is false but the first number is greater than 0');
}   else {
    console.log('this expression is false and first number is less than 0');
}


// lot of conditions -> use a switch/case statement which basically replaces a lot of else if statements
// switch (condition) {case;break; ... default}


const randomColor = "orange"

switch (randomColor) {
    case "orange": 
        console.log('the color is orange');
        break;

    case "green": 
        console.log('the color is green');
        break;

    case "blue": 
        console.log('the color is blue');
        break;

    case "red": 
        console.log('the color is red');
        break;

    case "yellow": 
        console.log('the color is yellow');
        break;

    default: 
        console.log('no color found') // this is the else case
}

// prints different outputs based on the value of randomColor (i.e. the case)
// switch case statements are not always used; often if, else if and else statements work








