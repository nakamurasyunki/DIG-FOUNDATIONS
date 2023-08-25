'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// test 練習
// function addTen(number) {
//   // ここにコードを書きます（あとで！）
//   return number + 10;
// }

// let actual = addTen(5);
// let expected = 15;

// if (actual === expected) {
//   console.log("Yay! Test PASSED.");
// } else {
//   console.error("Test FAILED. Keep trying!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = addTen(10);
// expected = 20;

// if (actual === expected) {
//   console.log("Yay! Test PASSED.");
// } else {
//   console.error("Test FAILED. Keep trying!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// ファイル全体で使用する TDD 用の変数を宣言する
// let expected;
// let actual;

// // テストする対象のコード
// function add(a, b) {
//   return a + b;
// }

// expected = 3; // EXPRESSION（式）の期待値
// actual = add(1, 2); // テストを行う EXPRESSION（式）

// if (actual === expected) {
//   console.log("OK! Test PASSED!");
// } else {
//   console.error("NG! Test FAILED. もう一回やってみよう!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }

// /**
//  * @param {number} num - 引数として与えられる数値
//  * @returns {number} 引数の数字に 10 を足したもの
//  */
// function addTen(num) {
//   return num + 10;
// }

// /**
//  * @param {string} param1 - 1 番目の引数
//  * @param {boolean} param2 - 2 番目の引数
//  * @returns {number} 返り値
//  */
// function funcName(param1, param2) {
//   return 42;
// }

// 基礎演習

// 1
let actual;
let expected;

//    /**
//     * @param {string} firstName - 下の名前
//     * @param {string} lastName - 苗字
//     * @returns {string} 名前と苗字を連結し、間にスペースを入れたもの
//     */
//    function getFullName(firstName, lastName) {
//     // return firstName + " " + lastName;
//     return `${firstName} ${lastName}`;
//   }

//   actual = getFullName("Ken", "Watanabe");
//   expected = "Ken Watanabe";

//   if (actual === expected) {
//     console.log("OK! Test PASSED!");
//   } else {
//     console.error("NG! Test FAILED.");
//     console.group("Result:");
//     console.log("  actual:", actual);
//     console.log("expected:", expected);
//     console.groupEnd();
//   }

// 2

//   /**
//   * @param {string} name - 人の名前
//   * @param {boolean} isFormal - 敬称をつけるべきかどうか（敬称ありならtrue、無しならfalse）
//   * @returns {string} 与えられた人の名前と敬称が入った挨拶文
//   */
//   function simpleGreeting(name, isFormal) {
//   // ここにコードを書きましょう
//   if (isFormal === true) {
//     return "Hello, " + name + "-san.";
//   }else {
//     return "Hello, " + name + ".";
//   }
// }

// actual = simpleGreeting("Amy", true);
// expected = "Hello, Amy-san.";

// if (actual === expected) {
//   console.log("OK! Test PASSED!");
// } else {
//   console.error("NG. Test FAILED.");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }

// actual = simpleGreeting("Matt", false);
// expected = "Hello, Matt.";

// if (actual === expected) {
//   console.log("OK! Test PASSED!");
// } else {
//   console.error("NG. Test FAILED. ");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }

// 3
// /**
// * @param {number} ??? - 1 番目の数字
// * @param {number} ??? - 2 番目の数字
// * @returns {boolean} 与えられた 1 番目の数字が 2 番目の数より大きいかどうか
// */
// // 関数を宣言しましょう
// function isGreaterThan()

// actual = isGreaterThan(5, 4);
// expected = true;

// if (actual === expected) {
//   console.log("OK! Test PASSED!");
// } else {
//   console.error("NG. Test FAILED.");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }

// actual = isGreaterThan(3, 4);
// expected = false;

// if (actual === expected) {
//   console.log("OK! Test PASSED!");
// } else {
//   console.error("NG. Test FAILED.");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }