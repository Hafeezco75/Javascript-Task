function calculateArea(width, height) {
    let area = width * height;
    console.log(area);
}

calculateArea(12, 15);

function isEven(number) {
    if (number % 2 === 0) {
        console.log("even");
    }
    if (number % 2 === 1) {
        console.log("odd");
    }
}

isEven(11);

function convertToFahrenheit(temperature) {
    let Fahrenheit = temperature * 9/5 + 32
    console.log(Fahrenheit);
}

convertToFahrenheit(100);

function isLeapYear(year) {
    if (year % 4 === 0 || year % 400 === 0 || year % 100 === 0)  {
        console.log("true");
    }
    else {
        console.log("false");
    }
}

isLeapYear(2024);

function countVowels([string]) {
    let letter = ['a', 'e', 'i', 'o', 'u'];
    for (letter in string) {
        if (letter === string[letter]) {
        }
        console.log(letter.includes(string));
    }
}

countVowels(['bolanle']);

module.exports = {convertToFahrenheit}