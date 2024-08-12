const accountId = 144357;
let acoountEmail = "kriti@gmail.com";
var accountpassword = "1234";
accountCity = "Pune"; //not a good way to use
let accountState;

// accountId = 2; not allowed
accountEmail = "kk@gmail.com";
accountpassword= "4321";
accountCity= "Delhi";

console.log(accountId);
console.table([accountId, accountEmail, accountpassword, accountCity, accountState]) //giving in table format

/* Prefer not to use var because of block scope and functional scope */