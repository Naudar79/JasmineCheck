let selectElementsStartingWithA = (array) => {
    return array.filter(element => element[0] == "a");
}

let selectElementsStartingWithVowel = (array) => {
    return array.filter(element => /^[aeiou]/gi.test(element));
}

let removeNullElements = (array) => {
    return array.filter(element => element != null);
}

let removeNullAndFalseElements = (array) => {
    return array.filter(element => element != null && element !== false);
}

let reverseWordsInArray = (array) => {
    return array.map(element => element.split('').reverse().join(''));
}

let everyPossiblePair = (array) => {
    return 'Write your method here'; // fail
}

let allElementsExceptFirstThree = (array) => {
    return array.splice(3);
}

let addElementToBeginning = (array, element) => {
    array.unshift(element)
    return array;
}

let sortByLastLetter = (array) => {
    return 'Write your method here';
}

let getFirstHalf = (string) => {
    return string.slice(0, Math.round(string.length / 2));
}

let makeNegative = (number) => {
    return -Math.abs(number);;
}

let numberOfPalindromes = (array) => {
    return array.filter(element => element === element.split('').reverse().join('')).length;
}

let shortestWord = (array) => {
    return array.reduce((word, current) => {
        if (word.length < current.length) { return word; } else { return current; }
    });
}

let longestWord = (array) => {
    return array.reduce((word, now) => {
        if (word.length > now.length) { return word; } else { return now; }
    });
}

let sumNumbers = (array) => {
    return array.reduce((sumNb, element) => sumNb + element, 0);
}

let repeatElements = (array) => {
    return array.concat(array);
}

let stringToNumber = (string) => {
    return parseInt(string);
}

let calculateAverage = (array) => {
    return array.reduce((sum, element) => sum + element, 0) / array.length;
}

let getElementsUntilGreaterThanFive = (array) => {
    return array.splice(0, 6);
}

let convertArrayToObject = (array) => {
    return 'Write your method here';
}

let getAllLetters = (array) => {
    return; //fail
}

let swapKeysAndValues = (object) => {
    return Object.keys(object).reduce((element, key) => {
        element[object[key]] = key;
        return element;
    }, {})
}

let sumKeysAndValues = (object) => {
    return Object.keys(object).reduce((element, key) => {
        return (element = element + parseInt(object[key]) + parseInt(key));
    }, 0);
}

let removeCapitals = (string) => {
    return string.split("").filter(element => element.charCodeAt(0) < 65 || element.charCodeAt(0) > 90).join("");
}

let roundUp = (number) => {
    return 'Write your method here';
}

let formatDateNicely = (date) => {
    return 'Write your method here';
}

let getDomainName = (string) => {
    return 'Write your method here';
}

let titleize = (string) => {
    return 'Write your method here';
}

let checkForSpecialCharacters = (string) => {
    return 'Write your method here';
}

let squareRoot = (number) => {
    return 'Write your method here';
}

let factorial = (number) => {
    return 'Write your method here';
}

let findAnagrams = (string) => {
    return 'Write your method here';
}

let convertToCelsius = (number) => {
    return 'Write your method here';
}

let letterPosition = (array) => {
    return 'Write your method here';
}