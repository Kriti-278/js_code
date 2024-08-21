//this keyword is used tell about context..that from where that thing is coming

const user = {
    username: "Kriti",
    price: 999,

    welcomeMsg: function() {
        console.log(`${this.username},Welcome to website`);
        console.log(this);//current context according to code it's working
        
    }

}

// user.welcomeMsg();
// user.username= "Sam";
// user.welcomeMsg();

// using same as arrow function

// const user = {
//     username: "Kriti",
//     price: 999,

//     welcomeMsg: () => {
//         console.log(`${this.username},Welcome to website`);
//         console.log(this);//current context according to code it's working
        
//     }
// }

// user.welcomeMsg();
// user.username= "Sam";
// user.welcomeMsg();

const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(3,5));

// when giving {} bracket return keyword is must to write
//using implicit return in arrow function

const addThree = (num1, num2) => num1 + num2;
console.log(addThree(7,5));

//or

//when giving () bracket we don't need to write return keyword
const addfour = (num1, num2) => (num1 + num2);
console.log(addfour(4,6));
const addfive = (num1, num2) => ({username:"Maya"});
console.log(addfive(5,8));
