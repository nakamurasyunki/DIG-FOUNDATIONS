'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// ウォーミングアップ
// 1
// function isHot(temperature) {
//   if (temperature > 30) {
//     return "暑い!";
//   }else {
//     return "暑くない.";
//   }
// }

// console.log(isHot(31)); // "暑い!" を表示
// console.log(isHot(2)); // "暑くない." を表示
// console.log(isHot(30)); // "暑くない." を表示

// 2
// function getTypeOfSchool(age) {
//   if (age <= 6) {
//     return "幼稚園";
//   } else if (age <= 12) {
//     return "小学校";
//   } else if (age <= 15) {
//     return "中学校";
//   } else if (age <= 18) {
//     return "高校";
//   } else {
//     return "卒業後";
//   }
// }

// console.log(getTypeOfSchool(3)); // "幼稚園" を表示
// console.log(getTypeOfSchool(8)); // "小学校" を表示
// console.log(getTypeOfSchool(13)); // "中学校" を表示
// console.log(getTypeOfSchool(16)); // "高校" を表示
// console.log(getTypeOfSchool(30)); // "卒業後" を表示

// 考えてみよう
// function hellomessageforperson(n1){
// if(n1.length>0){
// return `Hello, ${n1}!`;
// }}

// const a = "Beau";
// const aa = hellomessageforperson(a);

// function helloMessage(name) {
//   if(name.length > 0) {
//     return `Hello, ${name}!`;
//   }
// }

// const name = "Beau";
// const greeting = helloMessage(name);

let expected;
let actual;

// 中級演習
// 1
// /**
// * @param {any} value - 確認する値
// * @returns {string} 与えられた引数のデータ型を表す分かりやすいメッセージ
// */
// // 関数を定義しましょう
// function typeOfFriendly(value) {
//   if (typeof(value) === "string") {
//     return  "与えられた引数は string (文字列) です。";
//   } else if (typeof(value) === "number") {
//     return "与えられた引数は number (数値) です。";
//   } else if (typeof(value) === "boolean") {
//     return "与えられた引数は boolean (真偽) です。";
//   } else if (typeof(value) === "undefined") {
//     return "与えられた引数は undefined 型 です。";
//   }
// }

// actual = typeOfFriendly("Hello");
// expected = "与えられた引数は string (文字列) です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED!");
// } else {
//   console.error("NG. Test FAILED. がんばって！");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }

// actual = typeOfFriendly(5);
// expected = "与えられた引数は number (数値) です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED!");
// } else {
//   console.error("NG. Test FAILED. がんばって！");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }

// // 他の値の型を確認するテストも書きましょう
// actual = typeOfFriendly(true);
// expected = "与えられた引数は boolean (真偽) です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED!");
// } else {
//   console.error("NG. Test FAILED. がんばって！");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }

// actual = typeOfFriendly();
// expected = "与えられた引数は undefined 型 です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED!");
// } else {
//   console.error("NG. Test FAILED. がんばって！");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }

// 2
// /**
// * @param {"=="|"==="|"<"|"<="|">"|">="} comparison - 使用したい比較演算子
// * @param {number} operand1 - 1 番目の被演算子
// * @param {number} operand2 - 2 番目の被演算子
// * @returns {number} 与えられた演算子を被演算子と組み合わせて比較した結果
// */
// // 関数を定義しましょう
// function compare(comparison,operand1,operand2) {
//   if (`${operand1} ${comparison} ${operand2}`) {
//     return true;
//   } else {
//     return false;
//   }
// }

// actual = compare("===", 1, 1);
// expected = true;

// if (actual === expected) {
//   console.log("OK! Test PASSED!");
// } else {
//   console.error("NG. Test FAILED. がんばって！");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }

// actual = compare("===", 1, "1");
// expected = false;

// if (actual === expected) {
//   console.log("OK! Test PASSED!");
// } else {
//   console.error("NG. Test FAILED. がんばって！");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }

// actual = compare("==", 1, "1");
// expected = true;

// if (actual === expected) {
//   console.log("OK! Test PASSED!");
// } else {
//   console.error("NG. Test FAILED. がんばって！");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }

// // 他の演算子を使ったテストも書いてみましょう。