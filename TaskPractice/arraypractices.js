function students() {

    let testScores = [87, 54, 36, 20, 73, 88, 46, 65, 60, 95];

    let answer = testScores.filter((number) => {
        return number > 70;
    })
    console.log(answer)

}
students()

function increaseScore() {
    let examGrades = [85, 92, 78, 88, 95];

    let answers = examGrades.map((number) => {
        return number + 5;
    })

    console.log(answers);
}
increaseScore();

function squareIntegers() {

    let listOfIntegers = [2,4,6,8,10];

    let result = listOfIntegers.map((number)=>{
        return number ** 2;
    })
    console.log(result)

}
squareIntegers();

function distributeBooks() {

    let listOfBooks = ["Rich Dad", "Breaking Even", "Money Diary", "Ascension"]
    let listOfMembers = ["Emily", "Jack", "Sophia", "Daniel"];

    let elements = [];

    for (const member of listOfMembers.values()) {
        listOfBooks += member
        elements.push(listOfBooks)
    }

    console.log(elements);

}

distributeBooks();


function scheduleList() {

    let listOfTimings = ["9:00AM", "11:00AM", "1:00PM", "3:00PM", "5:00PM"];

    let result = listOfTimings.filter((number) => {
        return number > "12:00PM" && number <= "5:00PM"
    })

    console.log(result)
}

scheduleList()


function calculateExpenses() {

    const expenses = new Map();

    expenses.set("groceries", 150);
    expenses.set("dining out", 100);
    expenses.set("transportation", 50);
    expenses.set("entertainment", 80);

}