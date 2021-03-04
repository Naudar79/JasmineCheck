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
    return 'Write your method here'; // fail
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
    return 'Write your method here';
}

let calculateAverage = (array) => {
    return 'Write your method here';
}

let getElementsUntilGreaterThanFive = (array) => {
    return 'Write your method here';
}

let convertArrayToObject = (array) => {
    return 'Write your method here';
}

let getAllLetters = (array) => {
    return 'Write your method here';
}

let swapKeysAndValues = (object) => {
    return 'Write your method here';
}

let sumKeysAndValues = (object) => {
    return 'Write your method here';
}

let removeCapitals = (string) => {
    return 'Write your method here';
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