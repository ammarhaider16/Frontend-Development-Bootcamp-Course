// """ Developer tools in Firefox """"

// Inspector
// Elements get lightlighted as you hover over code in Inspect
// You can use the icon in the top left corner to find code for element
// You can make temporary changes to the webpages using the developer tools


// Console
// Allows you to write Javascript and to modify the document-object model
const ourImage = document.querySelector('img')
ourImage.setAttribute('src', 'link')
ourImage.setAttribute('width', 100)
// replaces image on Google.com page

// convert this into a function
 function changeImage(url) {
    document.querySelector('img').setAttribute('src',url)
 }
// note syntax for function and variable definition in Javascript
changeImage(url) // function called


// Network tab
// Allows you to see resources that are being transferred to and from over the network to this webpage
// Useful for backend development (APIs and stuff)

// Storage tab
// Useful for tracking user behavior on a site (cookies are stored here)
// These have IDs and identifiers that allow websites to authenticate etc.


// First program
// save the body HTML tag in a variable 

const htmlBody = document.querySelector('body');
const randomClickFunction = function () {
    const colors = ["#002942", "red", "blue", "green", "yellow", "orange", "purple"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomCOlor = colors[randomIndex];
    htmlBody.style.backgroundColor = randomCOlor

    console.log("The user clicked and set the color to " + randomCOlor)
  } 

// setting an event listener to HTML Body element
htmlBody.onclick = randomClickFunction;




// """WHAT IS JAVASCRIPT"""
// programming language made for the web
// it can be run in a web browser and easiest to write in a browswer
// various libraries for a variety of applications 
// Including: Angular (frontend web apps), React (frontend web apps),
// Nest (backend web apps), Electron (desktop applications),
// React Native and nativescript (mobile apps),
// TensorFlow(AI, ML, Data science)

// What is a framework?
// Abstraction on top of javascript that makes it easier and more efficient to program
// Helps automating repetitive tasks
// You need to know frameworks to be marketable

// JavaScript is not the same as or even similar to Java
// Java was inspo for JavaScript but the syntax is super different
// Is JavaScript better than ...? Depends on the industry
// E.g. app like Facebook is better based on JavaScript but 
// For ML,AI,Data Science Python is better 


// OS Theory, Operating Run Time etc.
// Each OS has slightly different compilers

// Where does JavaScript actually run?
// In a run time 
// Browser run time (V8 engine does compliation and optimization)
// Node JS run time (Backend version; also uses V8 engine)
// Not the only way we can learn JavaScript
// Firefox dev tools use SpiderMonkey 
// JavaScript runs differently in different run times
// e.g. DOM does not exist in the node js runtime



