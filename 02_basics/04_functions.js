// repeatedly if we want to do some work than there we can use functions.

function myNme() {} //here() is parameter, when we create function the input taken inside the() is
//parameter where myNme is name just like variable

// myNme();// () is argument when we call the function ,means if we want to execute the code we run this.

// ways of calling function()
// function addTwoNum (num1, num2) {
//     console.log(num1 + num2); //print console only it's not return a value in function
// }

function addTwoNum (num1, num2) {
    // let result = num1 + num2;
    // return result; //only will return the result not print it...Also anything after return we caanot write
    //                // it will not take but before return it will take

    return num1 + num2;
}

const result =addTwoNum(3,5);
// console.log("result:", result);


