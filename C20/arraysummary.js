let arrayOfNumbers = [1,8,9,9,5,6,7];

arrayOfNumbers.forEach((number) => {
    let element = []
    let answer = number * 2;
    element.push(answer);
    console.log(element);
})

let answer = arrayOfNumbers.filter((number)=> {
       return number > 3;
})

console.log(answer);
