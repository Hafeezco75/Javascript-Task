const studentScores = [95, 78, 85, 60, 45, 92];

let result = studentScores.map((grades, D, C, B)=>{
    if (grades >= 90 && grades <= 100){
        return "A";
    }
    else if (grades >= 80 && grades <= 89){
        return "B" ;
    }
    else if (grades >= 70 && grades <= 79){
        return "C";
    }
    else if (grades >= 60 && grades <= 69){
        return "D";
    }
    else if (grades <= 60){
        return "F";
    }
})

console.log(result);