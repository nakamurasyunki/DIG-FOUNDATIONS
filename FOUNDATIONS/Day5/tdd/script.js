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
/**
// * @param {number} num1 - 1 番目の数字
// * @param {number} num2 - 2 番目の数字
// * @returns {boolean} 与えられた 1 番目の数字が 2 番目の数より大きいかどうか
// */
// // 関数を宣言しましょう
// function isGreaterThan(num1, num2) {
//   return num1 > num2;
// }

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

// 4

// 5
/**
 * @param {"+"|"-"|"*"|"/"|"**"|"%"} ope - 使用する算術演算子を表す文字列
 * @param {number} ??? - 1 番目の被演算子
 * @param {number} ??? - 2 番目の被演算子
 * @returns {number} 与えられた演算子を被演算子と組み合わせて実行した結果
 */

// 関数を定義しましょう
// const operate = (ope, num1, num2) => {
//   const calculate = `${num1}${ope}${num2}`;
//   return (new Function(`return ${calculate}`))();
// };

const operate = (ope, num1, num2) => (new Function(`return ${num1}${ope}${num2}`))();

actual = operate("+", 1, 2);
expected = 3;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = operate("-", 100, 33);
expected = 67;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

// // *, /, **, % を使ってさらにテストを書いてみましょう

// 6
// /**
//  * @param {string} color - 確認したい色の名前
//  * @returns {boolean} 与えられた色が虹色に含まれているかどうか
//  */
// // 関数を定義しましょう
// const rainbowColor = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

// const isRainbowColor = color => rainbowColor.includes(color.toLowerCase());

// actual = isRainbowColor("red");
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

// actual = isRainbowColor("rEd");
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

// actual = isRainbowColor("Brown");
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

// // 他の色を確認するテストを書きましょう

// 中級演習
// 1
// /**
//  * @param {any} value - 確認する値
//  * @returns {string} 与えられた引数のデータ型を表す分かりやすいメッセージ
//  */
// // 関数を定義しましょう
// const typeOfFriendly = value => {
//   if (typeof value === "string") {
//     return "与えられた引数は文字列です。";
//   } else if (typeof value === "number") {
//     return "与えられた引数は数値です。";
//   } else {
//     return "与えられた引数は真偽値です。";
//   }
// };

// actual = typeOfFriendly("Hello");
// expected = "与えられた引数は文字列です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }

// actual = typeOfFriendly(5);
// expected = "与えられた引数は数値です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }

// // 他の値の型を確認するテストも書きましょう

// 2
// /**
//  * @param {"=="|"==="|"<"|"<="|">"|">="} ope - 使用したい比較演算子
//  * @param {number} num1 - 1 番目の被演算子
//  * @param {number} num2 - 2 番目の被演算子
//  * @returns {number} 与えられた演算子を被演算子と組み合わせて比較した結果
//  */
// // 関数を定義しましょう
// const compare = (ope, num1, num2) => {
//   if (ope === "==") {
//     return num1 == num2;
//   } else if (ope === "===") {
//     return num1 === num2;
//   }
// };

// actual = compare("===", 1, 1);
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

// actual = compare("===", 1, "1");
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

// actual = compare("==", 1, "1");
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

// 他の演算子を使ったテストも書いてみましょう。

// 応用演習
// 1
// /**
//  * @param {number} num1 - 1 番目の数値
//  * @param {number} num2 - 2 番目の数値 (任意)
//  * @param {number} num3 - 3 番目の数値 (任意)
//  * @returns {string} 与えられた数字を 1 つの文字列に結合したもの
//  */
// // ここにコードを書きましょう
// const concatenateNumbers = (...num) => {
//   let str = "";
//   for (const elem of num) {
//     str += String(elem);
//   }
//   return str;
// };

// actual = concatenateNumbers(7);
// expected = "7";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }

// actual = concatenateNumbers(7, 9);
// expected = "79";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }

// // 必要に応じてテストを書きましょう

// 2
// /**
//  * @param {number} max - 初めの数量
//  * @param {number} half - 半減期（数量が半分になるまでの時間）
//  * @param {number} time - 経過時間
//  * @returns {number} 与えられた時間が経過したあとに残っている数量
//  */
// // ここにコードを書きましょう
// const halfLife = (max, half, time) => {
//   return max * (1 / 2) ** (time / half);
// };

// actual = halfLife(1, 1, 1);
// expected = 1 / 2;

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }

// actual = halfLife(8, 4, 2);
// expected = 4 * Math.SQRT2;

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }

// actual = halfLife(2, 2, 4);
// expected = 1 / 2;

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }

// // 必要に応じてテストを書きましょう。

// 3
// /**
//  * @param {string} str - 文字列
//  * @returns {string} 与えられた文字列の小文字と大文字を逆にした文字列。アルファベット以外は変更しない。
//  */
// // ここにコードを書きましょう
// const invertCase = str => {
//   let isInvert = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i].toLowerCase()) {
//       isInvert += str[i].toUpperCase();
//     } else {
//       isInvert += str[i].toLowerCase();
//     }
//   }
//   return isInvert;
// };

// actual = invertCase("Have a nice day");
// expected = "hAVE A NICE DAY";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }

// actual = invertCase("My dog is 2 years old");
// expected = "mY DOG IS 2 YEARS OLD";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }

// // 必要に応じてテストを書きましょう。

// ナイトメア
// // 1
// /**
//  * @param {number} num - 確認したい数字
//  * @returns {boolean} 与えられた数字が素数かどうか
//  */
// // ここにコードを書きましょう
// const isPrime = num => {
//   if (num === 1 || num === 0) {
//     return false;
//   } else if (num === 2) {
//     return true;
//   } else {
//     for (let i = 2; i < num; i++) {
//       if (num % i === 0) {
//         return false
//       } else {
//         return true;
//       }
//     }
//   }
// };

// actual = isPrime(1);
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

// actual = isPrime(2);
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

// actual = isPrime(3);
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

// actual = isPrime(4);
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

// actual = isPrime(5);
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

// actual = isPrime(104728);
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

// actual = isPrime(104729);
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

// // 必要に応じてテストを書きましょう。