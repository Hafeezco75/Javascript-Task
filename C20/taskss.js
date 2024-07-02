const studentScores = [95, 78, 85, 60, 45, 92];

let result = studentScores.map((number) => {
    return number >= 90 && number <= 100 ? "A" : number >= 80 && number <= 89 ? "B" : number >= 70 && number <= 79 ? "C" : number >= 60 && number <= 69 ? "D" : "F"
})
console.log(result);

/*function multiplyNumbers() {
    let numberOne = 2;
    let numberTwo = 3;
    let results = numberOne + numberTwo;
    return result;
}

console.log(multiplyNumbers())*/