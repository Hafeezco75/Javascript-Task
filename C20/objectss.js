//array.prototype.keys

const listOfNumbers = [2,3,4,5,1];

const user = {
    "firstName": "chinedu",
    "lastName": "ugo",
};

let result = listOfNumbers.map((detail)=>{
    return detail * 2;
})

console.log(result)

const answer = listOfNumbers.find( (number)=>{
    return number > 2;
})

console.log(answer);


const answers = listOfNumbers.findIndex((number)=>{
    return number > 2;
})

console.log(answers);


const listOfNumber = [[2,3,4,5,1],  [1,2], [2,3,4,5]];

let value = listOfNumber[1][1];
console.log(value)