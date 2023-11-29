'use strict'
// 1行目に記載している 'use strict' は削除しないでください

let actual;
let expected;
console.log("--- TDD ---");

console.log("--- 基礎演習 ---");
console.log("--- 1 ---");
/**
 * @param {string} firstName - 下の名前
 * @param {string} lastName - 苗字
 * @returns {string} 名前と苗字を連結し、間にスペースを入れたもの
*/
function getFullName(firstName, lastName) {
  // return lastName + firstName;
  // 直し後
  return `${firstName} ${lastName}`;
}

actual = getFullName("Ken", "Watanabe");
expected = "Ken Watanabe";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

console.log("--- 2 ---");
/**
 * @param {string} name - 人の名前
 * @param {boolean} isFormal - 敬称をつけるべきかどうか（敬称ありなら true、無しなら false）
 * @returns {string} 与えられた人の名前と敬称が入った挨拶文
*/
function simpleGreeting(name, isFormal) {
  // ここにコードを書きましょう
  if (isFormal) {
    return `Hello, ${name}-san.`;
  }
  return `Hello, ${name}.`;
}


actual = simpleGreeting("Amy", true);
expected = "Hello, Amy-san.";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = simpleGreeting("Matt", false);
expected = "Hello, Matt.";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

console.log("--- 3 ---");
/**
 * @param {number} num1 - 1 番目の数字
 * @param {number} num2 - 2 番目の数字
 * @returns {boolean} 与えられた 1 番目の数字が 2 番目の数より大きいかどうか
*/
// 関数を宣言しましょう
const isGreaterThan = (num1, num2) => {
  if (num1 > num2) {
    return true;
  }
  return false;
};

actual = isGreaterThan(5, 4);
expected = true;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = isGreaterThan(3, 4);
expected = false;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

console.log("--- 4 ---");
function add(a, b) {
  return a + b;
}

// 今までの形式のテストを書き直しましょう
console.log(add(4, 3)); // 7 が返るはずです
console.log(add(100, 42)); // => 142

// 新しい形式で書くと・・・？
actual = add(4, 3);
expected = 7;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = add(100, 42);
expected = 142;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

console.log("--- 5 ---");
/**
 * @param {"+"|"-"|"*"|"/"|"**"|"%"} param - 使用する算術演算子を表す文字列
 * @param {number} num1 - 1 番目の被演算子
 * @param {number} num2 - 2 番目の被演算子
 * @returns {number} 与えられた演算子を被演算子と組み合わせて実行した結果
*/

// 関数を定義しましょう
const operate = (param, num1, num2) => (new Function(`return ${num1}${param}${num2}`))();

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

// *, /, **, % を使ってさらにテストを書いてみましょう

console.log("--- 6 ---");
/**
 * @param {string} color - 確認したい色の名前
 * @returns {boolean} 与えられた色が虹色に含まれているかどうか
*/
// 関数を定義しましょう
const rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const isRainbowColor = color => rainbowColors.includes(color.toLowerCase());

actual = isRainbowColor("red");
expected = true;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = isRainbowColor("rEd");
expected = true;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = isRainbowColor("Brown");
expected = false;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = isRainbowColor("blue");
expected = true;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

// 他の色を確認するテストを書きましょう

console.log("--- 中級演習 ---");
console.log("--- 1 ---");
/**
 * @param {any} value - 確認する値
 * @returns {string} 与えられた引数のデータ型を表す分かりやすいメッセージ
*/
// 関数を定義しましょう
const typeOfFriendly = value => {
  if (typeof value === "string") {
    return "与えられた引数は文字列です。";
  } else if (typeof value === "number") {
    return "与えられた引数は数値です。";
  }
};

actual = typeOfFriendly("Hello");
expected = "与えられた引数は文字列です。";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = typeOfFriendly(5);
expected = "与えられた引数は数値です。";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

// 他の値の型を確認するテストも書きましょう

console.log("--- 2 ---");
// /**
//  * @param {"=="|"==="|"<"|"<="|">"|">="} param - 使用したい比較演算子
//  * @param {number} num1 - 1 番目の被演算子
//  * @param {number} num2 - 2 番目の被演算子
//  * @returns {number} 与えられた演算子を被演算子と組み合わせて比較した結果
//  */
// // 関数を定義しましょう
// const compare = (param, num1, num2) => {
//   console.log(param);
//   const parameter = new Function(`${param}`);
//   return `${num1}${parameter}${num2}`;
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

// 他の演算子を使ったテストも書いてみましょう

console.log("--- 応用演習 ---");
console.log("--- 1 ---");
/**
 * @param {number} ...num - 1 番目の数値
 * @param {number} [???] - 2 番目の数値 (任意)
 * @param {number} [???] - 3 番目の数値 (任意)
 * @returns {string} 与えられた数字を 1 つの文字列に結合したもの
*/
// ここにコードを書きましょう
const concatenateNumbers = (...num) => num.join("");

actual = concatenateNumbers(7);
expected = "7";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = concatenateNumbers(7, 9);
expected = "79";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = concatenateNumbers(7, 9, 1, 2, 3);
expected = "79123";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

// 必要に応じてテストを書きましょう

console.log("--- 2 ---");

console.log("--- 3 ---");
/**
 * @param {string} str - 文字列
 * @returns {string} 与えられた文字列の小文字と大文字を逆にした文字列。アルファベット以外は変更しない。
*/
// ここにコードを書きましょう
const invertCase = str => {
  let invertStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase() && typeof str[i] === "string") {
      invertStr += str[i].toUpperCase();
    } else if (typeof str[i] === "string") {
      invertStr += str[i].toLowerCase();
    }
  }
  return invertStr;
};

actual = invertCase("Have a nice day");
expected = "hAVE A NICE DAY";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = invertCase("My dog is 2 years old");
expected = "mY DOG IS 2 YEARS OLD";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

// 必要に応じてテストを書きましょう。

console.log("--- ナイトメア ---");
console.log("--- 1 ---");
/**
 * @param {number} num - 確認したい数字
 * @returns {boolean} 与えられた数字が素数かどうか
*/
// ここにコードを書きましょう
const isPrime = num => {
  if (num === 1 || num === 0) {
    return false;
  } else if (num === 2) {
    return true;
  } else {
    for (let i = 2; i < num; i++)
      if (num % i === 0) {
        return false;
      } else {
        return true;
      }
  }

};

actual = isPrime(1);
expected = false;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = isPrime(2);
expected = true;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = isPrime(3);
expected = true;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = isPrime(4);
expected = false;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = isPrime(5);
expected = true;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = isPrime(104728);
expected = false;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = isPrime(104729);
expected = true;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

// 必要に応じてテストを書きましょう。
console.log("--- コードスタイル ---");

console.log("--- 基礎演習 ---");
console.log("--- 1 ---");
/**
 * @param {number} x
 * @param {number} y
 * @returns 引数1,2の平均値
 */

function average(x, y) {
  return (x + y) / 2;
}

expected = 1; // 期待するテスト結果
actual = average(1, 1); // テストする式

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

expected = 1.5; // 期待するテスト結果
actual = average(1, 2); // テストする式

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

expected = 2.5;
actual = average(2, 3);

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

expected = 3;
actual = average(2, 4);

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

console.log("--- 2 ---");
function isPositive(thing) {
  if (thing <= 0) {
    return false;
  } else {
    return true;
  }
}

expected = true; // 期待するテスト結果
actual = isPositive(1); // テストする式

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

expected = false; // 期待するテスト結果
actual = isPositive(0); // テストする式

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

// さらにテストを書きましょう。

console.log("--- 3 ---");
function areaOfTriangle(base, height) {
  return (base * height) / 2;
}

expected = 7.5; // 期待するテスト結果
actual = areaOfTriangle(3, 5); // テストする式

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

// さらにテストを書きましょう。

console.log("--- 4 ---");
function is_the_given_number_a_multiple_of_seven_or_not(numberthatwewanttotest) {
  const isthegivennumberamultipleofsevenornot = numberthatwewanttotest % 7 === 0;

  if (isthegivennumberamultipleofsevenornot === true) {
    return true;
  } else {
    return false;
  }
}

// さらにテストを書きましょう。

console.log("--- 5 ---");

console.log("--- 中級演習 ---");
console.log("--- 1 ---");

console.log("--- 2 ---");

console.log("--- 3 ---");

console.log("--- 4 ---");

console.log("--- 応用演習 ---");
console.log("--- 1 ---");