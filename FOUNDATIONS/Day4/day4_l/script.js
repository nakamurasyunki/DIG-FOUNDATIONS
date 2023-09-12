'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// 4
// function biggerNumber(numOne, numTwo) {
//     if (numOne > numTwo){
//         return "The first argument is bigger.";
//     }else {
//         return "The second argument is bigger.";
//     }
// }
// console.log(biggerNumber(4, 3)); // => 'The first argument is bigger.' と表示されるようにする
// console.log(biggerNumber(3, 4)); // => 'The second argument is bigger.' と表示されるようにする。

// function biggerNumber(numOne, numTwo) {
//     if (numOne > numTwo){
//         return "The first argument is bigger.";
//     }else if (numOne < numTwo) {
//         return "The second argument is bigger.";
//     }else {
//         return "The argument is equal";
//     }
// }
// console.log(biggerNumber(3, 3)); // => 'The first argument is bigger.' と表示されるようにする


// 5
// function printDataType(data) {
//     if (typeof data === "number") {
//         console.log("This is a number.");
//     }else if (typeof data === "string") {
//         console.log("This is a string.");
//     }else if (typeof data === "boolean") {
//         console.log("This is a boolean.");
//     }else {
//         console.log("This is not a string, boolean, or number.");
//     }
// }
// printDataType(42); // => "This is a number." が表示されるようにする。
// printDataType("Hello!"); // => "This is a string." が表示されるようにする。
// printDataType(true); // => "This is a boolean." が表示されるようにする。
// printDataType(undefined); // => "This is not a string, boolean, or number." が表示されるようにする。

// 6
// function greeting(name, lang) {
//   if (lang === "Japanese") {
//     return `konnichiwa, ${name}!`;
//   } else if (lang === "English") {
//     return `Hello, ${name}!`;
//   } else if (lang === "German") {
//     return `Gutentag, ${name}!`;
//   } else {
//     return `Hola, ${name}!`;
//   }
// }

// console.log(greeting("Harry Potter", "Japanese")); // => "Konnichiwa, Harry Potter!" が表示されるようにする。
// console.log(greeting("Harry Potter", "English")); // => "Hello, Harry Potter!" が表示されるようにする。
// console.log(greeting("Harry Potter", "German")); // => "Gutentag, Harry Potter!" が表示されるようにする。
// console.log(greeting("Harry Potter", "Spanish")); // => "Hola, Harry Potter!" が表示されるようにする。

// 7
// const isEven = num => num % 2 === 0;

// console.log(isEven(4)); // => true が表示されるようにする。
// console.log(isEven(7)); // => false が表示されるようにする。

// 中級
// 1
// const isOdd = num => num % 2 === 1;

// console.log(isOdd(4)); // => false が表示されるようにする。
// console.log(isOdd(7)); // => true が表示されるようにする。

// 2
// const isPositive = num => num > 0;

// console.log(isPositive(-1)); // => false が表示されるようにする。
// console.log(isPositive(7)); // => true が表示されるようにする。

// 3
// const isNegative = num => num < 0;

// console.log(isNegative(-1)); // => true が表示されるようにする。
// console.log(isNegative(7)); // => false が表示されるようにする。
// 4
// const isZero = num => num === 0;

// console.log(isZero(-1)); // => false が表示されるようにする。
// console.log(isZero(7)); // => false が表示されるようにする。
// console.log(isZero(0)); // => true が表示されるようにする。

// 1
// const randomNumber = number => Math.random() * number;

// console.log(randomNumber(8));

// 2
// const guessMyNumber = number => {
//   if (number === Math.floor(Math.random() * (5 + 1))) {
//     return "YES!";
//   } else {
//     return "NO!";
//   }
// };

// console.log(guessMyNumber(2));

// 応用演習
// 1
// const randomStopLight = () => {
//   const number = Math.floor(Math.random() * (10 + 1));
//   console.log(`数字 : ${number}`);
//   if (number < 3) {
//     return "🔴Red";
//   } else if (number >= 3 && number <= 6) {
//     return "🟡Yellow";
//   } else if (number > 6) {
//     return "🟢Green";
//   }
// };

// console.log(randomStopLight());