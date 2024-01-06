 const now = new Date(); // instance of date object is created
// new creates a blank object and links the object to a parent

// JS dates are a little confusing becuase writing dates is also about understanding how time zones work
console.log(now);

// the value stored within the date object represents the 
// numer of miliseconds elapsed since midnight on 
// Jan 1 1970, UTC

console.log(now.valueOf()); // 1703850206980 rn

// Date.now represents the same thing as new date
Date.now();



// date methods

const myDate = new Date();

const myDateString = myDate.toString(); // stores readably in computer time zone

console.log(myDateString); 

const myDateISOString = myDate.toISOString();

const myMonth = myDate.getMonth() // January = 1

const myYear = myDate.getFullYear() 
