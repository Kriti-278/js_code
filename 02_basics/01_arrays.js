// Array is a collection of multiple items/elements under the single variable
// Array comes inside the square bracket[] and inside bracket are elements 
// which can be number, string, boolean

const Arr = [0, 1, 2, 3, 4, 5, "Kriti", true];
console.log(Arr[3]);

const myArr = [0, 1, 2, 3, 4, 5,];
//Array Methods

myArr.push(6);//push add the extra elements to the last
myArr.push(8);
myArr.pop();//pop removes the last element from Arrays list

myArr.unshift(4); //adding elements at beginning
myArr.shift(4); //removing 1st element


// console.log(myArr);
// console.log(myArr.includes(4)); //tells if valvue is there or not
// console.log(myArr.indexOf(4));

const newArr = myArr.join(); //converts Array in string
// console.log(newArr);
// console.log(typeof newArr);

//slice, splice

console.log("A",myArr);//original array

const myN1 = myArr.slice(1, 3);//last range not including
// console.log("B", myArr);

const myN2 = myArr.splice(1, 3);
// console.log("C", myArr);//removes the portion only 
// console.log(myN2); //and manipulates original array


//merging Ararys
// using concat operator
const marvel_heros = ["Thor", "Spiderman", "Hulk"];
const dc_heros = ["Batman", "Superman", "Flash"];
// const all_heros = marvel_hero.concat(dc_hero);
// console.log(all_heros);
// console.log(marvel_hero.concat(dc_hero));

//using spread operator
const all_heros = [...marvel_heros, ...dc_heros];
console.log(all_heros);


console.log(Array.isArray("Kriti")); //asking that is this a array which gives false
console.log(Array.from("Kriti")); //converting string to Array we use from
console.log(Array.from({name: "Kriti"}));//trying to convert from Object to Array like this it give empty[]

//multiple varaibles where we want to convert to Array we use Of

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));