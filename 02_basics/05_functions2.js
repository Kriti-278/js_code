//function in array and objects
//in object form how we call function

function calculateCartPrice(val1, val2, ...num1) { //... is rest operator here not spread operator
    return num1;
}

// console.log(calculateCartPrice(200,400,600,800,1000,4000));   
//here val1 and val2 is taken so remaining ans will come in array form.


const user = {
    userName: "Kriti",
    price: 199,
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.userName} and price is ${anyobject.price}`);
    
}

// handleObject(user);
//or

handleObject ({
    userName: "Sam", //we can directly pass object here also
    price: 399,
})

//in array

const myNewArr = [200, 400, 600, 800, 1000];

function returnArr(getArray) {
    return getArray[2];
}

console.log(returnArr(myNewArr));
