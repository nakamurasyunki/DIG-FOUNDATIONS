'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// 1
// 5 + 6;
// console.log(6 + 6);

// // Functions（関数）
// // 1
// function add(numOne, numTwo) {
//     return numOne + numTwo;
// }

// // テスト
// console.log(add(4, 3)); // => 7 を表示
// console.log(add(100, 42)); // => 142 を表示

// // 2
// console.log(add(100)); // 何が起こる？
// console.log(add(1, 4, 5)); // 何が起こる？

// 3
function simpleFunctionA() {
    return "Hello simple function A";
}

// function simpleFunctionB() {
//     console.log("Hello simple function B");
// }

// console.log("simpleFunctionA: ", simpleFunctionA());
// console.log("simpleFunctionB: ", simpleFunctionB());

// // 4
// function subtract(num1, num2) {
//     // ここにコードを書いてください
//     return num1 - num2;
// }

// console.log(subtract(4, 3)); // => 1
// console.log(subtract(100, 42)); // => 58

// // 5
// // ここにコードを書いてください
// function greeting(name) {
//     return "Hello, " + name + "!";
// }

// console.log(greeting("Alex")); // => "Hello, Alex!"
// console.log(greeting("Bob")); // => "Hello, Bob!"

// // 6
// function average(num1,num2) {
//     return (num1 + num2) / 2;
// }

// console.log(average(5,7));


// 7
// (1)
// function square() {
//     return 5 * 5;
// }
// console.log(square());
// // (2)
// function square(x) {
//     return x * x;
// }
// console.log(square(2));
// (3)
// function Square(number) {
//     return number * number;
// }

// 8
// function cube(x) {
//     return x ** 3;
// }
// console.log(cube(3));

// 中級演習
// 1
// function simpleHelloA() {
//     console.log("hello");
// }

// function simpleHelloB() {
//     return "hello";
// }

// const a = simpleHelloA();
// const b = simpleHelloB();
// console.log(a, b);

// 2
function createGreeting(phrase, friend) {
    return phrase + ", " + friend + "!";
}

// ここにコードを書いてください。
const morningGreeting = createGreeting("Good morning","Mike");
const dayGreeting = createGreeting("Hello","Bob");
const eveningGreeting = createGreeting("Good evening","Alex");

console.log(morningGreeting); // "Good morning, Mike!" を表示
console.log(dayGreeting); // "Hello, Bob!" を表示
console.log(eveningGreeting); // "Good evening, Alex!" を表示

// 3
// Square
function squareArea(side) {
    return side ** 2;
}

function squarePerimeter(side) {
    return 4 * side;
}

// Rectangle
function rectangleArea(length,wide) {
    return length * wide;
}

function rectanglePerimeter(length,wide) {
    return (2 * length) + (2 * wide);
}

// Parallelogram
function parallelogramArea(length,height) {
    return length * height;
}

function parallelogramPerimeter(length,wide) {
    return (2 * length) + (2 * wide);
}

// Trapezoid
function trapezoidArea(height,bottom1,bottom2) {
    // return height / 2 * (bottom1 + bottom2);
    return 1 / 2 * height * (bottom1 + bottom2);
}

function trapezoidPerimeter(side1,side2,bottom1,bottom2) {
    return side1 + side2 + bottom1 + bottom2;
}

