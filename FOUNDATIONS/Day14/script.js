'use strict'
// 1行目に記載している 'use strict' は削除しないでください

function test(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("OK! Test PASSED.");
  } else {
    console.error("Test FAILED. Try again!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
    console.trace();
  }
}

console.log("--- ウォーミングアップ ---");
console.log("--- 1 ---");
// /**
//  * @param {number} x
//  * @returns {(y: number) => number} 引数として y を取り、x を y で割った値を返す関数
//  */
// // ここにコードを書きましょう
// // xを引数として取る関数　divideを宣言
// function divide(x) {
//   // yを引数として取る無名関数を宣言してdivideの戻り値にする
//   return function (y) {
//     // divideByTwoの戻り値としてx / y
//     return x / y;
//   }
// }

// const divideByTwo = divide(2);

// test(divideByTwo(4), 0.5);
// test(divide(2)(1), 2);

console.log("----------------");
// console["log"]("Hello");

console.log("--- メソッド ---");
console.log("--- 確認 ---");
console.log("--- 1 ---");
// const body = document.body;
// const divElement = document.createElement("div");
// divElement.className = "title";
// divElement.innerText = "ようこそ！";
// const username = window.prompt("名前を入力してください。");
// localStorage.setItem("username", username);
// document.body.append(divElement);
// window.prompt("やったー！");

console.log("--- 基本演習 ---");
const myMathObject = {
  sum: function (...theArgs) {
    /* ここに処理を書きます */
    let total = 0;
    for (const arg of theArgs) {
      total += arg;
    }
    return total;
  },
  product: function (...nums) {
    let total = 1;
    for (const num of nums) {
      total *= num;
    }
    return total;
  },
  isEven: function (...nums) {
    const result = {};
    for (const num of nums) {
      if (num % 2 === 0) {
        result[num] = true;
      } else {
        result[num] = false;
      }
    }
    return result;
  },
  getNumbers: function (...nums) {
    const result = [];
    for (const num of nums) {
      if (typeof num === "number") {
        result.push(num);
      }
    }
    return result;
  },
};
console.log("--- 1 ---");
// これは `sum` のテストのサンプルです。`sum` メソッドを完成させたらテストしてみましょう。💪
// test(myMathObject.sum(1), 1);
// test(myMathObject.sum(1, 2, 3), 6);
// console.log("----------------");
// test(myMathObject.product(1), 1);
// test(myMathObject.product(1, 2, 4), 8);
// console.log("----------------");
// test(myMathObject.isEven(1), { 1: false });
// test(myMathObject.isEven(1, 2, 4), { 1: false, 2: true, 4: true });

console.log("--- 2 ---");
// console.log(myMathObject.sum(19283, 18475, 199999));
// console.log(myMathObject.product(19283, 18475, 199999));
// console.log(myMathObject.isEven(19));
console.log("--- 3 ---");
// test(myMathObject.getNumbers(1, 2, 3, 4), [1, 2, 3, 4]);
// test(myMathObject.getNumbers("foo", 3, "4", "hi", 1), [3, 1]);
console.log("--- 中級演習 ---");
console.log("--- 応用演習 ---");
console.log("----------------");
console.log("--- DOM ---");
console.log("--- 確認 ---");
console.log("--- 1 ---");
const elementP = document.getElementsByTagName("p");
console.log(elementP);

console.log("--- 2 ---");
const mainHeader = document.getElementById("main-header");
console.log(mainHeader);

console.log("--- 3 ---");
const innerParagraph = document.getElementsByClassName("inner-paragraph");
for (const paragraph of innerParagraph) {
  console.log(paragraph);
}

console.log("--- 確認2 ---");

console.log("--- 基礎演習 ---");
console.log("--- 中級演習 ---");
console.log("--- 応用演習 ---");
for (const a of document.getElementsByTagName("h2")) {
  console.log(a);
}