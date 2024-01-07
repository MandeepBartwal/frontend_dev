// Primitive and non-primitive datatypes

// Primitive datatypes

// 7 types : string, number, boolean, null, undefined, symbol & BigInt

let string = "string";
let num1= 122;
let isLoggedIn= false;
let tempratureOutside= null;
let userEmail;
let id= Symbol(123);
const BigInt = 121212123123123n;


//Non-primitive datatypes : Object & Array, fucntions

let newArray = [1, 2, 3, 4, 5, 6, 7];
let userInfo = {name: "user", email: "user@example.com", password: 12323};
const newFunction = (userInfo) => {
    return userInfo;
}

// console.log(newFunction(userInfo));








// STACK AND HEAP MEMORY IN JAVASCRIPT

// Stack(For primitive) && heap(For non primitive)

//  stakc k  andar changes karne mein uska copy milta hai and heap k adnar changes karne mein refrence milgea and heap exampple below

// let userOne = {
//     name: "mandeep", email: "mandeep@gmail.com"
// }


// let userTwo = userOne;

// console.log(userTwo);

// userTwo.email = "sandeep@gmail.com";

// console.log(userOne.email);
// console.log(userTwo.email);
