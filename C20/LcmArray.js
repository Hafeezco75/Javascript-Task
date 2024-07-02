function lowest() {

    let lcms = [4, 6, 9];
    let temp = [];
    let count = 0;

    for (count = 0; count < lcms.length; count++) {
        if (lcms[count] % 4 === 0 || lcms[count] % 2 === 1 || lcms[count] % 3 === 1) {
            let result = lcms[count];
            temp.push(result);
        }
    }
    return temp;


}

console.log(lowest());

//output = [2,2,3,3];
