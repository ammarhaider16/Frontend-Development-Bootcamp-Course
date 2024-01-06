// https://www.codewars.com/collections/lesson-6-challenges-number-fullstackroadmap

function filter_list (intArr) {
    return intArr.filter(arrItem => 
        typeof arrItem === 'number')
}


function validatePIN (pin) {
    const n = pin.length
    const pinRegexFour = /^\d+$/g;
    return pinRegexFour.test(pin) && (n === 4 || n === 6);
}


function capitalize(word) {
    let finalArr = [];
    for (let i = 0; i<2; i++) {
        const wordArr = word.split('');
        for (let s = i; s<wordArr.length; s+=2) {
            wordArr[s] = wordArr[s].toUpperCase();
        };
        finalArr.push(wordArr.join(''));
    };
    return finalArr;
}


/*
LOGIC FOR NAME STRING

if len = 1, print name
if len = 2, print name1 and name2
if (len >= 3) {
    take slice until second last index
    set up accum pattern for initial string
    iterate through slice using for each to add 'name, ' to string
    add 2ndLast and LastName to iniital string
}
*/



// persistence: difficult problem

function persistence(num) {

    let numArr = num.toString().split('')

    let count = 0

    let i = numArr.length

    while (i>1) {
    
        const reducerCallback = (product, arrItem) => {
            return product*arrItem;
        };
        
        numVal = numArr.reduce(reducerCallback, 1);

        numArr = numVal.toString().split('')

        console.log(numArr)

        i = numArr.length

        count += 1

    };

    return count 
}



console.log(persistence(39))




// the function below works 

function isValidWalk (directionsArr) {
    const directionsStr = directionsArr.join('')
    const directionsRegEx = /[nswe]{10}/g;

    nCount = 0;
    sCount = 0;
    eCount = 0;
    wCount = 0;

    const callBack = (arrItem) => {
        switch (arrItem) {
            case 'n':
                nCount += 1;
                break;
            case 's':
                sCount += 1;
                break;
            case 'e':
                eCount += 1;
                break;
            case 'w':
                wCount += 1;
                break;
        } }

    directionsArr.forEach(callBack);

    const returned = (nCount === sCount) && (eCount === wCount);

    return directionsRegEx.test(directionsStr) && directionsArr.length === 10 && returned;
}

console.log(isValidWalk(['n','s','s','w','e','e','n','s','e','n']))
console.log(isValidWalk(['n','s','s','w']))

