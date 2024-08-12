"use strict"; //treat all JS code as new version

// alert (3 + 3) we are using nodejs not browser

let name= "Kriti"; //string
let age= 18; //number
let isLoggedIn= false; //boolean
let state = null;

// datatypes in JS
//primitive datatype
// number => 2 to the power 53
// BigInt
// string => "" ,''
// Boolean => true or false
// null => standalone value /represent empty value
// undefined => variable assigned but value not given
// Symbol => for uniqueness

const bignum= 1234567890987n; //BigInt

//non-primitive
// Array, Object, Function

// console.log(typeof "Kriti");
// console.log(typeof null); //object
// console.log(typeof undefined); //undefined

const color = ["Orange", "Pink", "Green", "Olive"]; //array

let myobj= {
    name: "Kriti",
    age: 22,
} //object

const myFunction = function() {
    console.log("Hello World");
}

console.log(typeof color);