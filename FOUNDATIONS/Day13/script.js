'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// function outerFunc() {

//   let word = "Hi!";

//   function innerFunc() {
//     console.log(word);
//   }

//   return innerFunc;
// }

// const func = outerFunc();

// console.log(func);
// console.log(typeof func);
// console.log(func());

// console.log("--- global scoop ---");
// let count = 0;

// function counter() {
//   console.log(count);
//   count += 1;
// }

// counter();

// console.log("--- クロージャ― ---");

// function outerFunc() {
//   let count = 0;

//   function counter() {
//     console.log(count);
//     count += 1;
//   }
//   return counter;
// }

// const counter1 = outerFunc();
// console.log(counter1());

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

console.log("--- 演習 ---");
console.log("--- 確認 ---");
console.log("--- 1 ---");
// function addOne(num) {
//   return num + 1;
// }

// test(addOne(5), 6);
// test(addOne(50), 51);

console.log("--- 2 ---");
// function doSomething(value, action) {
//   return action(value);
// }

// function greeting(name) {
//   return `こんにちは、${name}さん！`;
// }

// test(doSomething("田中", greeting()), "こんにちは、田中さん！"); // A
// test(doSomething("田中", greeting), "こんにちは、田中さん！"); // B

console.log("--- 3 ---");
// let x = "Outside x";

// function bar() {
//   let x = "Inside x";
//   return "Bar!";
// }

// bar();
// console.log(x);

console.log("--- 4 ---");
// プライベート変数 = クロージャ―のスコープ内にある変数

console.log("--- 基礎演習 ---");
console.log("--- 1 ---");
// function createAccount(userPassword) {
//   const savedPassword = userPassword;

//   function checkPassword(passwordEntered) {
//     if (savedPassword === passwordEntered) {
//       console.log("正しいパスワードです。アクセスを許可します。");
//     } else {
//       console.log("パスワードが間違っています。アクセスできません。");
//     }
//   }

//   return checkPassword;
// }

// // 変数　savedPassword
// const account = createAccount("Test1234"); // 引数に初期パスワードを入れる。
// account("8skwob"); // 引数に間違ったパスワードを入れる => "パスワードが間違っています。アクセスできません。"
// account("Test1234"); // 引数に正しいパスワードを入れる => "正しいパスワードです。アクセスを許可します。"


console.log("--- 2 ---");
// function createDonationAccount() {
//   let donations = 0;

//   function addDonation() {
//     console.log(donations);
//     donations += 1;
//   }
//   console.log("寄付受付口座が作成されました。");
//   return addDonation;
// }

// const account = createDonationAccount();
// account();
// account();
// account();

console.log("--- 3 ---");
// /**
//  * @param {number} x
//  * @returns {(y: number) => number} 引数 y をとり、y に x を足した値を返す関数
//  */
// // コードを書き始めましょう
// function add(x) {
//   // ここにコードを書きましょう
//   function sum(y) {
//     return x + y;
//   }
//   return sum;
// }

// const addFive = add(5);
// test(addFive(1), 6);

console.log("--- 4 ---");
// function makeCounter() {
//   let counter = 0;
//   return function () {
//     counter += 1;
//     return counter;
//   };
// }

// const counterA = makeCounter();
// test(counterA(), 1);
// test(counterA(), 2);

// const counterB = makeCounter(); // 新しいカウンターを作りたい。
// test(counterB(), 1);
// test(counterB(), 2);

console.log("--- 中級演習 ---");
console.log("--- 1 ---");
// /**
//  * @param {number} 年齢
//  * @returns {() => boolean} 実行されるたびに age に 1 を足し、 age が 13 以上かどうかを返す関数
//  */
// // ここにコードを書きましょう
// function createWebsiteAccount(age) {
//   function sumAge() {
//     age += 1;
//     if (age >= 13) {
//       return true;
//     } else {
//       return false;
//     }
//   }
//   return sumAge;
// }

// const childAccount = createWebsiteAccount(10);
// test(childAccount(), false); // => false
// test(childAccount(), false); // => false
// test(childAccount(), true); // => true (今、子供は 13 歳です！)

// const adultAccount = createWebsiteAccount(33);
// test(adultAccount(), true); // => true (何回呼び出すかに関わらず、いつも true を返す)
// test(adultAccount(), true); // => true (何回呼び出すかに関わらず、いつも true を返す)
// test(adultAccount(), true); // => true (何回呼び出すかに関わらず、いつも true を返す)

console.log("--- 2 ---");
// /**
//  * @param {number} x
//  * @returns {(y: number) => number} 引数として y をとり、x に y を掛け合わせた値を返す関数
//  */
// // ここにコードを書きましょう
// function multiply(x) {
//   function multiFunc(y) {
//     return x * y;
//   }
//   return multiFunc;
// }

// const multiplyByThree = multiply(3);

// test(multiplyByThree(4), 12);
// test(multiply(4)(5), 20);

console.log("--- 3 ---");
// /**
//  * @param {number} x
//  * @returns {(y: number) => number} 引数として y をとり、x から y を引いた値を返す関数
//  */
// // ここにコードを書きましょう
// function subtract(x) {
//   function subFunc(y) {
//     return x - y;
//   }
//   return subFunc;
// }


// const subtractFive = subtract(5);

// test(subtractFive(4), 1);
// test(subtract(10)(8), 2);

console.log("--- ナイトメア ---");
console.log("--- 1 ---");
/**
 * @param {number} ???
 * @returns {Function} 呼び出しが連鎖でき、value メソッドで値を取り出せる関数
 */
// ここにコードを書きましょう
const addCurry = (...num) => {
  return
}
// 関数を一度呼び出すだけでも、value() で値を得られます。
test(addCurry(1).value(), 1);

// 関数呼び出しを連鎖させて、累計を出すことができます。
test(addCurry(1)(2).value(), 3);
test(addCurry(1)(2)(3)(4)(5)(6).value(), 21);