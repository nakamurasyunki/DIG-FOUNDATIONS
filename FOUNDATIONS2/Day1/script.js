'use strict'
// 1行目に記載している 'use strict' は削除しないでください
console.log("--- 基礎演習 ---");
console.log("--- 1 ---");
// ここにあなたのコードを書いてください
const name = "Nakamura Shunki";
let age = 26;
let isProgrammer = "true";
let currentTask = "1";

console.log(name); // あなたの名前を表示
console.log(age); // あなたの年齢を表示
console.log(isProgrammer); // "true" を表示
console.log(currentTask); // "1" を表示

console.log("--- 2 ---");
currentTask = "2";
console.log(currentTask); // "2" を表示

console.log("--- 3 ---");
// 正方形の面積を計算して保存
const squareSideLength = 2;
// ここにあなたのコードを書いてください
const squareArea = squareSideLength * 2;

console.log(squareArea); // "4" を表示

// 長方形の面積を計算して保存
const rectangleBaseLength = 3;
const rectangleHeightLength = 4;
// ここにあなたのコードを書いてください
const rectangleArea = rectangleBaseLength * rectangleHeightLength;

console.log(rectangleArea); // "12" を表示

// 三角形の面積を計算して保存
const triangleBaseLength = 4;
const triangleHeightLength = 5;
// ここにあなたのコードを書いてください
const triangleArea = (triangleBaseLength * triangleHeightLength) / 2;

console.log(triangleArea); // "10" を表示

console.log("--- 中級演習 ---");
console.log("--- 1 ---");
const circleDiameter = 10;
// ここにあなたのコードを書いてください
const circleCircumference = circleDiameter * 3.1415926535;
const circleArea = ((circleCircumference / 2) ** 2) / 3.1415926535;

console.log(circleCircumference); // "31.41592653589793" に近い値を表示
console.log(circleArea); // "78.53981633974483" に近い値を表示

console.log("--- 2 ---");
let a = "B";
let b = "A";
// ここにあなたのコードを書いてください
let c = a;
a = b;
b = c;

console.log(a); // "A" を表示
console.log(b); // "B" を表示

console.log("--- 3 ---");
let value = 1;

console.log(value); // "1" を表示

// value に何かを行う
value += value;
console.log(value); // "2" を表示

// value に何かを行う
value += value;
console.log(value); // "4" を表示

// value に何かを行う
value += value;
console.log(value); // "8" を表示

// value に何かを行う
value += value;
console.log(value); // "16" を表示

// value に何かを行う
value += value;
console.log(value); // "32" を表示

// value に何かを行う
value += value;
console.log(value); // "64" を表示

console.log("--- 4 ---");
const firstName = "Yan";
const lastName = "Fan";
const city = "Tokyo";
console.log("--- 応用演習 ---");
console.log("--- 1 ---");
// アドバイス： ここで何かする必要があるかもしれません
let count = 0;
function counter() {
  // ここにあなたのコードを書いてください
  return count += 1;
}

console.log(counter()); // => 1
console.log(counter()); // => 2
console.log(counter()); // => 3
// etc.

console.log("--- 2 ---");
function isOdd(givenNumber) {
  // ここにあなたのコードを書いてください
  // 与えられた数値によって、"Yes, it's odd" もしくは "No, it's even" を表示
  if (givenNumber % 2 === 1) {
    return "Yes, it's odd";
  } else {
    return "No, it's even";
  }
}

console.log(isOdd(1));
console.log(isOdd(2));
console.log(isOdd(12));
console.log(isOdd(13));