/**
* TODO: 
* - Show a random Meme in the correct location
* - Never show more than 1 meme at a time
*/

// could not figure this out
function clearAll() {
    const meme = document.querySelector('.meme-content');
    const joke = document.querySelector('.joke-content');
    const quote = document.querySelector('.quote-content');
    const riddle = document.querySelector('.riddle-content');
   
    meme.innerHTML = '';
    joke.innerHTML = '';
    quote.innerHTML = '';
    riddle.innerHTML = '';
  }

function showMeme() {

    clearAll()

    const randomMemeUrl = getRandomData('memes');

    const hElement = document.querySelectorAll('h3').item(1);
    const parent = document.querySelector('.content');

    const newImg = document.createElement('img');
    newImg.src = randomMemeUrl;
    parent.insertBefore(newImg,hElement);
} 

function showJoke() {
    clearAll()
    
    const randomJokeText = getRandomData('jokes');

    const hElement = document.querySelectorAll('h3').item(2);
    const parent = document.querySelector('.content');

    const newP = document.createElement('p');
    newP.textContent = randomJokeText;
    parent.insertBefore(newP,hElement);
  }