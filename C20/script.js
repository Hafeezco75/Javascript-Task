function firstFunction() {
    console.log("first function");
}

function secondFunction(callBack) {
    console.log("second function");
    callBack();
}

secondFunction(firstFunction)


secondFunction(function firstFunction() {
    console.log("first function");
})


secondFunction(() => {
    console.log("first function");
})

test("add numbers", ()=> {

})