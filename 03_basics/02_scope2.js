//Child function access the parent's variable is called as closure.
function one() {
    const username = "Sam";

    function two() {
        const website = "Youtube";
        // console.log(username);
    }
    two();
}
one();

//function calling in two ways 1)
function addone(num) {
    return num + 1;
}

addone(5);

//or
console.log(addone(5)); //accessing the function or variable before it's initalized is called hoisting
function addone(num) {
    return num + 1;
}


//2) inside the variable
const addtwo = function(num) {
    return num + 2;
}

addtwo(5); //this cannot access first becz here function is called in different ways, inside the variable
//so it will give error
