const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));

let otherNum= 23.89;
console.log(otherNum.toPrecision(3));

let otherNum1= 123.89;
console.log(otherNum1.toPrecision(3));

const hunderd = 1000000;
console.log(hunderd.toLocaleString()); //right now value is comming in US format with comma
console.log(hunderd.toLocaleString('en-IN')); //value in Indian standard

// ----------Maths------------

console.log(Math);
// console.log(Math.round(4.6));//round of number
// console.log(Math.min(3,4,8,6,9));//min. value in array
// console.log(Math.max(3,4,8,6,9));//max value

console.log(Math.random()); //takes random number everytime between 0 & 1.