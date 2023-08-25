'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// 基礎演習
/* 配列同士はそのままでは比較できません。なぜできないのかについては今後のレッスンで詳しく説明しますが、ここでは JSON.stringify と呼ばれる JavaScript のビルトイン関数で文字列に置き換えてから比較することにしましょう。*/

// if (JSON.stringify(actual) === JSON.stringify(expected)) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd("Result:");
// }

// 1
// console.log("演習1");
// /**
//  * @param {Array<string>} arrayOfPeople - 人の名前の配列
//  * @returns {number} 与えられた配列の長さ
//  */
// function numberOfPeople(arrayOfPeople) {
// ここにコードを書きましょう
//   return arrayOfPeople.length;
// }

// let actual = numberOfPeople(["Koike", "Mizuno", "Akagi", "Yano"]);
// let expected = 4;

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd("Result:");
// }

// 2
// console.log("演習2");
// ここにコードを書きましょう.
// const students = ["Koike", "Mizuno", "Akagi", "Yano","Takashi"];

// actual = numberOfPeople(students); // 宣言した配列 students を先ほど作成した numberOfPeople に渡しています。
// expected = 5;

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd("Result:");
// }

// 3
// console.log("演習3");
// ここにコードを書きましょう.
// students.push("Kouki","Yuuna","Atushi");

// actual = numberOfPeople(students);
// expected = 8;

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd("Result:");
// }

// 4
// /**
//  * @param {Array<string>} array - 配列
//  * @returns {string} 与えられた配列の最後の要素を返す
//  */
// function last(array) {
//   // ここにコードを書きましょう
//   return array[array.length-1];
// }

// // ここにテストを書いてください
// let actual = last(["Lion", "Goat", "Pig", "Tiger"]);
// let expected = "Tiger";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd("Result:");
// }

// 5
// /**
//  * @param {Array<number>} array - 配列
//  * @param {number} number - 配列の最後に追加する値
//  * @returns {number} 処理後の配列の長さを返す。与えられた配列の末尾に、第 2 引数で渡された要素を追加してください。
//  */
// // ここにコードを書きましょう
// function myPush(array,number) {
//   array[array.length] = number;
//   return array[array.length-1];
// }

// let array = [1, 2, 3, 4];

// // 関数が正しい結果を返すことを確認する
// let actual = myPush(array, 5);
// let expected = 5;

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd("Result:");
// }

// // 配列が正しく変更されていることを確認する
// actual = array;
// expected = [1, 2, 3, 4, 5];

// // 上にも書きましたが、配列同士をそのまま比較することはできません。一旦、JSON.stringify で文字列に変換してから比較しましょう。

// if (JSON.stringify(actual) === JSON.stringify(expected)) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd("Result:");
// }

// さらにテストを追加してみましょう。

// 中級演習
let actual;
let expected;
// 1
// /**
//  * @param {Array<number>} hiInTheMiddle - 配列
//  * @returns {Array<any>} 配列の真ん中が "hi" に置き換えらえた配列、もしくは同じ配列を返す
//  */
// // ここにコードを書きましょう
// function hiInTheMiddle(hiInTheMiddle) {
//   if ((hiInTheMiddle.length % 2) === 0) {
//     return hiInTheMiddle;
//   } else {
//     hiInTheMiddle[2] = "hi";
//     return hiInTheMiddle;
//   }
// }

// actual = hiInTheMiddle([1, 2, 3, 4, 5]);
// expected = [1, 2, "hi", 4, 5];

// if (JSON.stringify(actual) === JSON.stringify(expected)) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd("Result:");
// }

// actual = hiInTheMiddle([1, 2, 3, 4]);
// expected = [1, 2, 3, 4];

// if (JSON.stringify(actual) === JSON.stringify(expected)) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd("Result:");
// }

// 2
// /**
//  * 与えられた配列から最後の要素を取り除き、その要素を返す
//  * @param {Array<any>} array - 配列
//  * @returns {any} 与えられた配列の最後の要素を返す
//  */
// // ここにコードを書きましょう
// function myPop(array) {
//   return array[array.length-1];
// }

// const array = [1, 2, 3, 4];

// actual = myPop(array);
// expected = 4;

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd("Result:");
// }

// array.splice(array.length-1,1);

// actual = array;
// expected = [1, 2, 3];

// if (JSON.stringify(actual) === JSON.stringify(expected)) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd("Result:");
// }

// 3
// /**
//  * 第 1 引数で与えられた配列の最初に第 2 引数の要素を追加
//  * @param {Array<any>} array - 配列
//  * @param {any} number - 配列の先頭に追加する値
//  * @returns {number} 処理後の配列の長さを返す
//  */
// // ここにコードを書きましょう
// function myUnshift(array,number) {
//   array.splice(0,0,5);
//   return array.length;
// }

// const array = [1, 2, 3, 4];

// actual = myUnshift(array, 5);
// expected = 5;

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd("Result:");
// }

// actual = array;
// expected = [5, 1, 2, 3, 4];

// if (JSON.stringify(actual) === JSON.stringify(expected)) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd("Result:");
// }

// 4
