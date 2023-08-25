'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// const colors = ["red","green","blue"];
// console.log(colors);

// for (const color of colors) {
//   console.log(color);
// }

let actual;
let expected;

// 基礎演習
// 1
// /**
//  * @param {Array<number>} 数値型の要素を持つ配列
//  * @returns {number} 与えられた配列のすべての数字の合計
//  */
// function sumArray(infos) {
//   // ここにコードを書きましょう。
//   let sum = 0;
//   for (const info of infos) {
//     sum += info;
//   }
//   return sum;
// }

// actual = sumArray([1, 2, 3, 4]);
// expected = 10;

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }

// // さらにテストを書きましょう。
// actual = sumArray([5, 6, 7, 8, 9]);
// expected = 35;

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }

// 2
// /**
//  * @param {Array<number>} 数値型の要素を持つ配列
//  * @returns {number} 与えられた配列の全ての数字をかけ合わせた積 (product)
//  */
// function productArray(infos) {
//   // ここにコードを書きましょう。
//   let product = 1;
//   for (const info of infos) {
//     product *= info;
//   }
//   return product;
// }

// actual = productArray([1, 2, 3, 4]);
// expected = 24;

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }

// // さらにテストを書きましょう。
// actual = productArray([1, 2, 3, 4, 5]);
// expected = 120;

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }

// 3
// /**
//  * @param {Array<any>} 配列
//  * @returns {boolean} 与えられた配列に "fun" という文字列が要素として入っているかどうかを表すブーリアン
//  */
// function hasFun(infos) {
//   // ここにコードを書きましょう。
//   let array = false;
//   for (const info of infos) {
//     if (info === "fun") {
//       array = true;
//     }
//   }
//   return array;
// }

// actual = hasFun(["dog", 2, false, "fun", "hello"]);
// expected = true;

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }

// actual = hasFun(["gift", 2, false, "run", "hello"]);
// expected = false;

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }

// さらにテストを書きましょう。

// 4
// /**
//  * @param {Array<any>} ???
//  * @returns {boolean} 与えられた配列の要素がブーリアンだけかどうかを表すブーリアン
//  */
// function containsOnlyBooleans(infos) {
//   // ここにコードを書きましょう。
//   for (const info of infos) {
//     if (typeof(info) !== "boolean") {
//       return false;
//     }
//   }
//   return true;
// }

// actual = containsOnlyBooleans([true, false, true, false, false]);
// expected = true;

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }

// actual = containsOnlyBooleans([true, true, true, "not a boolean"]);
// expected = false;

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }

// さらにテストを書きましょう。

// 5
// /**
//  * @param {Array<any>} 1番目の配列
//  * @param {Array<any>} 2番目の配列
//  * @returns {Array<any>} 与えられた2つの配列を連結させた配列
//  */
// function concatenate(array1,array2) {
//   // ここにコードを書きましょう。
//   for (const array of array2) {
//     array1.push(array);
//   }
//   console.log(array1);
//   return array1;
// }

// actual = concatenate(["one", "two"], ["three", "four"]);
// expected = ["one", "two", "three", "four"];

// // 配列同士を比較するため、ここでは JSON.stringify で文字列に変換することにしましょう。
// if (JSON.stringify(actual) === JSON.stringify(expected)) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }

// さらにテストを書きましょう。

// 6