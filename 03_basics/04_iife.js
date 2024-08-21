// Immediately Invoked Function Expression (IIFE)
/*When function gets immediately executed and in global scope because of some variables and functions
the problem occurs so IIFE is used*/ 

// function chai() {
//     console.log(`DB Conneted`);
// }

// chai();

//same written in IIFE format

(function chai() {
    console.log(`DB Conneted`);
})(); //IIFE format 2 parenthesis() coming

//or

((name) =>{
    console.log(`DB Conneted two ${name}`);
    
})('Kriti')