let letter = ["Semicolon"]

for (let count = letter.length; count > 0, count--;) {
    console.log(letter[count])
}
let arrayOfNumber = [1, 2, 3, 4, 5, 6, 7];

function evenNumbers(numbers) {
    let arrayOfEvenNumbers = [];
    for (let index = 0; index < numbers.length; index++) {
        let isEven = numbers[index] % 2 === 0;
        if (isEven) {
            arrayOfEvenNumbers.push(numbers[index]);
        }
    }
    arrayOfEvenNumbers.unshift(4);
    console.log(arrayOfEvenNumbers);
}

evenNumbers(arrayOfNumber);


const arrayOfNames = [];
const arrayOfNumbers = new Array(2);

arrayOfNumbers[0] = 1
arrayOfNumbers[1] = 1
arrayOfNumbers[2] = 1
arrayOfNumbers[3] = 1
arrayOfNumbers[4] = 1

console.log(arrayOfNumbers);


let arrayofNumb = [1,8,3,9,5,6,7];

console.log(arrayofNumb.slice(4));
console.log(arrayofNumb.slice(2,5));

arrayofNumb.splice(1,2, "badAfeez");

arrayofNumb.splice(0,1, "badHafeez")

let arrayOfName = ["ugo", "afeez"];

console.log(arrayOfNumbers.concat(arrayOfName));

let copyArray = [...arrayOfNumbers]
console.log(copyArray)


forEach
Filter
Map
Find
findIndex

console.log(arrayofNumb);