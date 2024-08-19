//Objects are used to store values in the form of key value pair.
//Objects are declared by 2 ways-a) By Literals b) By Constructor- Object.create
/*Interview point of view: When Objects is declared by Literals than Singleton is not created but if declared by Constructor than
Singleton is created*/

//Object literals

//symbol
const sym = Symbol("mykey");

const JsUser = {
    name: "Kriti", //here name is key and "kriti" is value. By default here key is string.
    "full name": "Kriti Bhadani",//it does not take without "" and is used by method 2 console.
    age: 22,
    [sym]: "mykey",//Symbol syntax is given in [] bracket.
    location: "Pune",
    gmail: "kriti@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
}

console.log(JsUser.location);//in case of . directly we write without ""
console.log(JsUser["location"]);//in case of [], "" is used.Also this method is used in case 
// if space is there between two words.

console.log(JsUser["full name"]);//it will not take just by (.)

console.log(JsUser[sym]);

//for changing any value

JsUser.gmail = "kk@gmail.com";
// console.log(JsUser);
//we want to freeze something that no other user can change that so for that,

// Object.freeze(JsUser);
JsUser.gmail = "kkriti@gmail.com"; //it's freeze so new value was not taken
console.log(JsUser);

// taking one more JsUser as a function 
JsUser.greeting = function() {
    console.log("Hello JS User");
}

JsUser.greetingTwo = function() {
    console.log(`Hello JS User, ${this.name}`);//here this is used when we want to reference same object
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());