'use strict'
// 1行目に記載している 'use strict' は削除しないでください

console.log("--- 基礎演習 ---");
console.log("--- 1 ---");
function add(numOne, numTwo) {
  return numOne + numTwo;
}

// テスト
console.log(add(4, 3)); // => 7 を表示
console.log(add(100, 42)); // => 142 を表示

console.log("--- 2 ---");
console.log(add(100)); // 何が起こる？
console.log(add(1, 4, 5)); // 何が起こる？

console.log("--- 3 ---");
function simpleFunctionA() {
  return "Hello simple function A";
}

function simpleFunctionB() {
  console.log("Hello simple function B");
}

console.log("simpleFunctionA: ", simpleFunctionA());
console.log("simpleFunctionB: ", simpleFunctionB());

console.log("--- 4 ---");
function subtract(num1, num2) {
  // ここにコードを書いてください
  return num1 - num2;
}

console.log(subtract(4, 3)); // => 1
console.log(subtract(100, 42)); // => 58

console.log("--- 5 ---");
// ここにコードを書いてください
const greeting = name => `Hello, ${name}!`

console.log(greeting("Alex")); // => "Hello, Alex!"
console.log(greeting("Bob")); // => "Hello, Bob!"

console.log("--- 6 ---");
const average = (num1, num2) => (num1 + num2) / 2;

console.log(average(5, 5)); // 5
console.log(average(2, 16)); // 9

console.log("--- 7 ---");
function square() {
  return 5 * 5;
}
// function square(5) {
//   return 5 * 5;
// }
function square(x) {
  return x * x;
}
// function square("x") {
//   return "x" * "x";
// }
function Square(num) {
  return num * num;
}
// function Square(monkey) {
//   return monkey * monkey;
// }

console.log("--- 8 ---");
// function cube(x) {
//   return x ** 3;
// }

const cube = x => x ** 3;

console.log("====================");
console.log("--- 中級演習 ---");
console.log("--- 1 ---");
function simpleHelloA() {
  console.log("hello");
}

function simpleHelloB() {
  return "hello";
}

const a = simpleHelloA();
const b = simpleHelloB();
console.log(a, b);

console.log("--- 2 ---");
function createGreeting(phrase, friend) {
  return phrase + ", " + friend + "!";
}

// ここにコードを書いてください。
const morningGreeting = createGreeting("Good morning", "Mike");
const dayGreeting = createGreeting(" Hello", "Bob");
const eveningGreeting = createGreeting("Good evening", "Alex");

console.log(morningGreeting); // "Good morning, Mike!" を表示
console.log(dayGreeting); // "Hello, Bob!" を表示
console.log(eveningGreeting); // "Good evening, Alex!" を表示

console.log("--- 3 ---");

console.log("====================");
console.log("--- 応用演習 ---");
console.log("--- 1 ---");
// advanced.js参照

console.log("--- 2 ---");
const upperBound = 7; //Q.3

// function guessMyNumber(n) {
//   const decideNumber = randomNumber(upperBound); // Q.4
//   if (n > upperBound) {
//     return "0 から" +  upperBound + "の間の数字を入力してください。";
//   } else if (n === decideNumber) {
//     return "当たりです！";
//   }
//   return "残念！正解は" + decideNumber + "でした。";
// }

// function randomNumber(n) {
//   return Math.floor(Math.random() * (n + 1));
// }
const guessMyNumber = n => {
  const decideNumber = randomNumber(upperBound);
  if (n > upperBound) {
    return `0から${upperBound}の間の数字を入力してください。`;
  } else if (n === decideNumber) {
    return "当たりです！";
  } else {
    return `残念！正解は${decideNumber}でした。`;
  }
};

const randomNumber = n => Math.floor(Math.random() * (n + 1));

console.log("--- 3 ---");

console.log("--- 4 ---");