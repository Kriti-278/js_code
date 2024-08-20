/*scope is given in {}, code written inside {} bracket is called block scope(means it's value should not
come out with the bracket) and value outside {} bracket is called global scope.*/

if (true) {
    let a = 20;
    const b = 30;
    var c = 40;
 }

//  console.log(a); //under the scope cannot be called
//  console.log(b); //under the scope cannot be called
//  console.log(c); //issue with variable it occur outside block also

let abc = 70;
if (true){
    let abc = 50;
    console.log("innervalue",abc);
}

console.log(abc);

