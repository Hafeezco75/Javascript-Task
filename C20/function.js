const print =() => {
     console.log("Hello World");
}
print()
const name = function (params) {
     console.log(params);
}

name("chinedu");


names("Chinedu");

function names(params) {
     console.log(params);
}

function higherOrderFunction() {

     console.log("I am higher function");

     function lowerFunction() {
          console.log("I am an inner function");

          function innerFunction(){
               console.log("I am a innerinner function");
          }
        innerFunction();
     }
     lowerFunction();

}
higherOrderFunction();


