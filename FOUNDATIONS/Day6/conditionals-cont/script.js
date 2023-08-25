'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// ファイル全体で使用する TDD 用の変数を宣言する。
let expected;
let actual;

// ... テストする対象のコードをここに書きましょう

// actual = /* テストを行う EXPRESSION（式） */
// expected = /* EXPRESSION（式）の期待値 */

// if (actual === expected) {
//     console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// 1
/**
//  * @param {number} age - 年齢
//  * @returns {boolean} 与えられた年齢がティーンエイジャー（13 歳から 19 歳までの間：「thirTEEN」から「nineTEEN」）かどうか
//  */
// function isTeenager(age) {
//   if (age >= 13 && age <= 19){
//     return true;// ここにコードを書きましょう.
//   } else {
//     return false;
//   }
// }

// // function isTeenager(age) {
// //   if (!(typeof(age) === "number")){
// //     return "無効です！与えられた年齢は数字ではありません！";
// //   } else {
// //     if (age >= 13 && age <= 19){
// //       return true;// ここにコードを書きましょう.
// //     } else {
// //       return false;
// //     }
// //   }
// // }

// // function isTeenager(age) {
// //   if (age >= 13 && age <= 19){
// //     return true;// ここにコードを書きましょう.
// //   } else {
// //     if (!(typeof(age) === "number")) {
// //       return "無効です！与えられた年齢は数字ではありません！";
// //     } else {
// //       return false
// //     }
// //   }
// // }

// actual = isTeenager(3);
// expected = false;

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = isTeenager(14);
// expected = true;

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// // さらにテストを書いて、コードが正しいことを確認してください。

// //2
// actual = isTeenager("Hello!");
// expected = "無効です！与えられた年齢は数字ではありません！";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = isTeenager(true);
// expected = "無効です！与えられた年齢は数字ではありません！";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = isTeenager();
// expected = "無効です！与えられた年齢は数字ではありません！";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// 3
// /**
//  * @param {string} person - 人の名前
//  * @param {boolean} title - 名前に"san" を付ける場合は true　何もつけない場合は false
//  * @param {boolean} greeting - "Hello" なら true　"Goodbye" なら false
//  * @returns {string} 与えられた引数に応じた適切な挨拶文
//  */
// // ここにコードを書きましょう.
// function anotherGreeting(person,title,greeting){
//   return "Hello, Mary-san.";
// }

// actual = anotherGreeting("Mary", true, true);
// expected = "Hello, Mary-san.";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = anotherGreeting("Mary", false, true);
// expected = "Hello, Mary!";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = anotherGreeting("Felix", true, false);
// expected = "Goodbye, Felix-san.";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// さらにテストを書いて、コードが正しいことを確認してください。

// 応用演習
// 2
// /**
//  * @param {any} operand1 - 1 つめの被演算子
//  * @param {any} operand2 - 2 つめの被演算子
//  * @returns {any} 2 つの被演算子を与えられた順番のまま && で評価したときと同じ結果
//  */
// // ここにコードを書きましょう
// function and(operand1,operand2) {
//   if (operand1 === true) {
//     if (operand2 === true) {
//       return true;
//     } else {
//       return false;
//     }
//   } else if (operand1 === "") {
//     return "";
//   } else {
//     return false;
//   }
// }

// actual = and(true, true);
// expected = true;

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = and(true, false);
// expected = false;

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// // さらにテストを書いて、コードが正しいことを確認してください
// actual = and("bananas", false);
// expected = false;

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = and("", "bananas");
// expected = "";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }