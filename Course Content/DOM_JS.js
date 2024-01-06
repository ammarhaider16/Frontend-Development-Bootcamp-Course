// window and document is used to call DOM?
// document is put into the browser window

const btn = document.querySelector('button');
typeof btn // object

window.alert("i love programming");
window.open("www.google.com");

// smooth scrolling down one entire page
window.scrollBy({
    top: window.innerHeight,
    left: 0,
    behavior: 'smooth'
});

// reloading document
window.location.reload();

// window common properties
window.innerHeight // height in pixels that displays the page
window.outerHeight // total height of document
window.innerWidth
window.outerWidth


// another important property
// to store data temporarily in the browser
localStorage.setItem('test',20)
// accessed through local storage object

window.location
location.href


window.scrollX // indicates how much we have scrolled from the left side of the page
window.scrollY // indicates how much we have scrolled from the top of the page

// listening for event
window.onScroll = function () {
console.log('hi')
}

/*
document object has html document has defined into it
we can add remove or modify html elements using document
we can set events for elements 


we cannot access html elements using dot notation
like we do for JS objects
instead we have to use the DOM API

think of DOM as a tree
parent grandparent children sibling elements
these elements are called nodes

*/


const elementNode = document.createElement('p');
const textNode = document.createTextNode('Content');
const attributeNode = document.createAttribute('class');
elementNode.appendChild(textNode);
attributeNode.value = 'some-class';
elementNode.setAttributeNode(attributeNode);

document.body.appendChild(elementNode);

// DOM creating or modifying elements is required for user experience


// doing something on a click event
document.querySelector('button'); // going to look for any button on the enitre page
document.querySelector('#btn-1'); // ID selection
document.querySelector('.my-btn'); // class selector


const btnClick = document.getElementById('btn-1'); // get button again
// most specific and best way to do it as you cannot have two elements with the same ID


const addParagraph = () =>
{
    const randomNum = Math.floor(Math.random() * 100);
    const pContent = "The random number is: " + randomNum;
    const newElement = document.createElement('p');
    newElement.textContent = pContent;
    document.body.appendChild(newElement);

}

// three ways to register click event
btnClick.addEventListener('click', addParagraph); //#endregion
btnClick.onclick = addParagraph;
// third way is to include onclick attribute in button element




// getting children of a list with JS
const list = document.querySelector('ul');
list.nodeType; // gives number that represents the type of node
const listItem = list.children.item(1); // gets second item of the list

listItem.textContent = 'some new content';

// adding another item to list
list.appendChild(document.createElement('li'));
list.children.item(3).textContent= 'some content';

// inseting another element between the paragraph tags
// problem: querySelector gets the first method only so we use querySelectorAll
// we use querySelectorAll and then use the insertBefore method
// note parameters for inserBefore()

const pElement = document.querySelectorAll('p').item(1);
pElement.nodeType // 1 -> element
const parent = document.querySelector('div')

const newP = document.createElement('p')
newP.textContent = 'programatically added between'
parent.insertBefore(newP,pElement)


