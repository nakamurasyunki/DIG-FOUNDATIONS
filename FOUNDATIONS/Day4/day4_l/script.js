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
function printDataType(data) {
    if (typeof data === "number") {
        console.log("This is a number.");
    }else if (typeof data === "string") {
        console.log("This is a string.");
    }else if (typeof data === "boolean") {
        console.log("This is a boolean.");
    }else {
        console.log("This is not a string, boolean, or number.");
    }
}
printDataType(42); // => "This is a number." が表示されるようにする。
printDataType("Hello!"); // => "This is a string." が表示されるようにする。
printDataType(true); // => "This is a boolean." が表示されるようにする。
printDataType(undefined); // => "This is not a string, boolean, or number." が表示されるようにする。