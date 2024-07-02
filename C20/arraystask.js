const prompt = require("prompt-sync")();

numberOfStudents = prompt("Enter the number of students");

let result = numberOfStudents.includes((score)=> {
    if (score >= 70 && score <= 100) {
        return 'A';
    } else if (score >= 55 && score <= 69) {
        return 'B';
    } else if (score >= 40 && score <= 54) {
        return 'C';
    } else if (score <= 39) {
        return 'D';
    }
})

for (let count = 0; count < numberOfStudents; count++) {
    let noOfScores = prompt("Enter 4 scores");

    let sumup = [numberOfStudents][noOfScores]

}

