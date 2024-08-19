// const tinderUser = new Object(); //Singleton object or->

const tinder = {
    id: "123abc",
    name: "Kriti",
    isLoggedIn: "false",
}

// console.log(tinder);

//or

const tinderUser = {}
tinderUser.id = "134bcd";
tinderUser.name = "Sam";
tinderUser.isLoggedIn = "true";

// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Neha",  //objects under object,nesting taking place
            lastname : "Raj",
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a" ,2: "b"};
const obj2 = {3 : "c" ,4: "d"};
const obj3 = {5 : "e", 6: "f"};

// const obj4 = Object.assign({},obj1,obj2,obj3); //using assign operator
const obj4 = {...obj1, ...obj2, ...obj3} //using spread operator-> mostly used
// console.log(obj4);

// getting a database where objects are inside Arrays

const users = [
    {
    id: 1,
    email : "h@gmail.com",
    },

    {
        id: 1,
        email : "h@gmail.com",
    },

    {
        id: 1,
        email : "h@gmail.com",
    }
]

users[1].email;
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));//giving o/p in form of array
// console.log(Object.values(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLogged"));//tells that if it contain that property

//de-structuring the objects

const course = {
    name: "JS",
    price: 999,
    courseInstructor: "hitesh",
}

// console.log(course.courseInstructor);

const {courseInstructor: instructor} = course; //destructuring property
console.log(instructor);

// API is called in JS in the format of JSON which is also in form of object only it does not contain variable
//name, it starts with curly bracket and key is also in string 

//JSON format API's
// {
//     "name" : "Kriti",
//     "price": 999,
//     "coursename": "JS"
// }
