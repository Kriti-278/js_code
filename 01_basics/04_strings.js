const name= "Kriti";
const repoCount = 20;
console.log(name + repoCount);//concatation
console.log(`my name is ${name} and repocount is ${repoCount}`);

const gameName = new String('KritiB');
console.log(gameName);
// console.log(gameName[2]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));
console.log(gameName.substring(0,4));//last character 4 is not coming till 3 only
console.log(gameName.slice(-6,3));

const newstr= "      Kriti     ";
console.log(newstr);
console.log(newstr.trim()); //trim removes unwanted space