// Write a JavaScript function to check whether a string is blank or not.
// Test Data :
// console.log(is_Blank(''));
// console.log(is_Blank('abc'));
let str = '';
function is_Blank(para){
    if(str === para){
        return true;
    }
    else{
        return false;
    }
    
}

// console.log(is_Blank(''));
// console.log(is_Blank('abc'));

// Q2) Write a JavaScript function to split a string and convert it into an array of words.
// Test Data :
// console.log(string_to_array("Robin Singh"));
// ["Robin", "Singh"]

let string_to_array = "Robin Singh";
console.log(string_to_array.split(''));

//or
// function string_to_array (str) {
//     return str.split('');
// }
// console.log(string_to_array("Robin Singh"));

// Q3) Write a JavaScript function to extract a specified number of characters from a string.
// Test Data :
// console.log(truncate_string("Robin Singh",4));

function truncate_string (str, num) {
    return str.substring(0,num);
}
console.log(truncate_string("Robin Singh",4));

//or
// let truncate_string = "Robin Singh";
// console.log(truncate_string.substring(0,4));

//Q4) Write a JavaScript function to capitalize the first letter of a string.
// Test Data :
// console.log(capitalize('js string exercises'));

function capitalize (cap) {
    return cap.charAt(0).toUpperCase() + cap.slice(1);
}

console.log(capitalize('js string exercises'));

//Q5)  Write a function that takes a string as input and returns the string reversed.
function revstr (str) {
    return str.split('').reverse().join('');
}

console.log(revstr("Hello"));

// console.log(ispal);

// Q6) Check if a String is a Palindrome
function isPalindrome (str) {
    let reverse= str.split('').reverse().join('')
    return str == reverse;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));