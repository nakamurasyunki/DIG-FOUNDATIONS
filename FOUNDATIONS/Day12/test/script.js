'use strict'
// 1行目に記載している 'use strict' は削除しないでください

function test(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("OK! Test PASSED.");
  } else {
    console.error("Test FAILED. Try again!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.trace();
    console.groupEnd();
  }
}


// callback関数
// const double = function (x) {
//   return 2 * x;
// };

// const doSomething = function (number, action) {
//   console.log(action);
//   return action(number);
// };

// // console.log(doSomething(5, double));
// console.log(doSomething(5, function (x) {
//   return 2 * x;
// })); //無名関数

// 関数レビュー
// myName("Yan", "Fan");

// エラー出ない
// 関数宣言は先読みされる
// function myName(first, name) {
//   window.alert(first + " " + name);
// }

// エラー出る
// 関数式は上から順のまま読まれる
// const myName = function (first, name) {
//   window.alert(first + " " + name);
// }

// 演習
console.log("----------------");
console.log("--- 確認 ---");
// // #1
console.log("--- 1 ---");
// function sayHello() {
//   console.log("Hello!");
// }

// #2
// let triple = function (x) {
//   return 3 * x;
// };
// a

// #3
// let double = function (x) {
//   console.log(2 * x);
// };

// #4
// const cache = [];

// function average(array) {
//   let result = 0;
//   for (const number of array) {
//     result = result + number;
//   }
//   result = result / array.length;

//   cache.push(result);
//   return result;
// }
// c

// #5
// function greet(friend) {
//   const languages = ["Hello", "Konnichiwa", "Aloha", "Nihao"];
//   const randomIndex = Math.round(Math.random() * languages.length - 1);
//   const randomGreeting = languages[randomIndex];
//   console.log(randomGreeting + " " + friend + "!");
// }
// b

// 2
console.log("--- 2 ---");

// function sayThankYou() {
//   console.log("Thank you!");
// }

// function runSomething(func) {
//   func();
// }

// runSomething(sayThankYou);

// 3
console.log("--- 3 ---");

// runSomething(sayHello);

console.log("--- 基礎演習 ---");
console.log("--- 1 ---");

// const returnAll = function (value) {
//   return value;
// }

console.log("--- 2 ---");

// console.log(typeof returnAll(false)); // boolean

// console.log(typeof returnAll(5)); // number
// console.log(typeof returnAll("5")); // string
// console.log(typeof returnAll([])); // object
// console.log(typeof returnAll({ a: 1 })); // object

// function foo() {
//   return "hi";
// }

// console.log(typeof returnAll(foo)); // function
// console.log(typeof returnAll(foo())); // string

console.log("--- 中級演習 ---");
console.log("--- 1 ---");

// /**
//  * @param {Function} func
//  * @param {any} num - 第 1 引数で与えられた関数に渡す値
//  * @returns {any} 与えられた引数を、与えられた関数に渡したときの返り値
//  */

// // ここにコードを書きましょう
// function doSomething(func, num) {
//   return func(num);
// }
// function addTen(number) {
//   return number + 10;
// }

// test(doSomething(addTen, 6), 16);
// test(doSomething(addTen, -100), -90);
// console.log(doSomething(function (num) {
//   return num * 4;
// }, 2));

//  // 戻り値は 8 です。

console.log("--- 2 ---");

// const outer = function () {
//   return function () {
//     return 5;
//   };
// };

// console.log(outer());
// // function () {
// //   return 5;
// // }
// console.log(typeof outer());
// // function
// console.log("----------------");
// const inner = outer();
// console.log(inner);
// // function () {
// //   return 5;
// // }
// console.log(typeof inner);
// // function
// console.log("----------------");
// console.log(inner());

console.log("--- 3 ---");

// const add = function (x) {
//   return function (y) {
//     return x + y;
//   };
// };

// const addFive = add(5);
// let foo = addFive(3);
// console.log(foo); // 8
// console.log("----------------");
// console.log(typeof addFive); // function
