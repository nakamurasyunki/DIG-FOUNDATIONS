'use strict'
// 1行目に記載している 'use strict' は削除しないでください

function test(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("OK! Test PASSED.");
  } else {
    console.error("Test FAILED. Try again!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.trace();
    console.groupEnd();
  }
}

// ウォーミングアップ
// // 使用する変数
// const obj1 = { a: "A" };
// const obj2 = { a: "A", b: 2 };
// const obj3 = { a: "A", b: 2, c: "C", d: true };
// const obj4 = { a: "A", c: "C" };

// // 1
// console.log("----------------");
// console.log("--- 1 ---");

// /**
//  * @param {object} object オブジェクト
//  * @returns {{ [key: string]: string }} 与えられたオブジェクト内の、
//  * 値が文字列であるキーと値のペアのみを持つ新しいオブジェクト
//  */

// function filterObjectForStrings(object) {
//   // ここにコードを書きましょう。
//   const result = {};
//   for (const key in object) {
//     const val = object[key];
//     if (typeof val === "string") {
//       result[key] = val;
//     }
//   }
//   return result;
// }

// test(filterObjectForStrings(obj1), obj1); // 変化なし
// test(filterObjectForStrings(obj2), obj1); // 値が文字列でないペアは取り除かれている
// test(filterObjectForStrings(obj3), obj4); // 値が文字列でないペアは取り除かれている

// 2
// console.log("----------------");
// console.log("--- 2 ---");
// /**
//  * @param {Array<object>} arrayOfObjects - オブジェクトを要素に持つ配列
//  * @returns {Array<{ [key: string]: string }>} 与えられた配列内の各オブジェクトから、
//  * 値が文字列であるキーと値のペア以外のペアを取り除いた新しいオブジェクトを
//  * 作成して新しい配列に入れたもの。
//  */

// function filterArrayForStrings(arrayOfObjects) {
//   // ここにコードを書きましょう.
//   // 変数resultに空の配列を代入
//   const result = [];
//   // arrayOfObjectsをfor-inループで要素をobjにひとつずつ代入
//   for (const obj of arrayOfObjects) {
//     // この中のどこかで関数 `filterObjectForStrings` を呼びましょう。
//     // 1問目で作ったfilterObjectForStringsに引数objを渡したreturn返り値をresultに追加する
//     result.push(filterObjectForStrings(obj));
//   }
//   // returnで配列が入ったresultを返す
//   return result;
// }

// test(filterArrayForStrings([obj1]), [obj1]); // 変化なし
// test(filterArrayForStrings([obj1, obj2]), [obj1, obj1]); // 2 つめの要素の `b: 2` が取り除かれる。
// test(filterArrayForStrings([obj3, obj2, obj1]), [obj4, obj1, obj1]);

// 3
// console.log("----------------");
// console.log("--- 3 ---");
// const menuOfCar = [
//   { name: "prius", price: "5,000,000yen", stock: "40" },
//   { name: "noah", price: "2,670,000yen", stock: "30" },
//   { name: "voxy", price: "3,090,000yen", stock: "20" },
//   { name: "Sienta", price: "1,950,000yen", stock: "10" },
//   {
//     name: "harrier",
//     price: "3,128,000yen",
//     stock: "0",
//     secret: "Happy coding!",
//   },
// ];

/////
//Q1 全てのkeyに対するValueをコンソールに出力しましょう
// console.log("--- Q1 ---");

// // for-ofでmenuOfCarの要素を一つずつ取り出す
// for (const obj of menuOfCar) {
//   console.log("--- " + menuOfCar.indexOf(obj) + " ---");
//   // 取り出した要素がオブジェクトなのでfor-inで変数keyにオブジェクトのキーを入れる
//   for (const key in obj) {
//     // console.logで変数keyをキーにしてオブジェクトの値を取り出して表示
//     console.log(obj[key]);
//   }
// }

// getAllValues(menuOfCar);
// function getAllValues(lists) {
//   for (const obj of lists) {
//     console.log("--- " + lists.indexOf(obj) + " ---");
//     for (const key in obj) {
//       console.log(obj[key]);
//     }
//   }
// }

// getAllValues(menuOfCar);
/////

/////
//Q2 key名が「stock」のValueを全てコンソールに出力しましょう
// console.log("--- Q2 ---");

// // for-ofでmenuOfCarの要素を一つずつ取り出す
// for (const obj of menuOfCar) {
//   console.log("--- " + menuOfCar.indexOf(obj) + " ---");
//   // 取り出した要素がオブジェクトなのでfor-inで変数keyにオブジェクトのキーを入れる
//   for (const key in obj) {
//     // キー"stock"がオブジェクトにあれば表示
//     if (key === "stock") {
//       // console.logで表示
//       console.log(obj[key]);
//     }
//   }
// }

/////

/////
//Q3 key名「secret」の入ったオブジェクトだけをコンソールに出力しましょう
// console.log("--- Q3 ---");

// // for-ofでmenuOfCarの要素を一つずつ取り出す
// for (const obj of menuOfCar) {
//   console.log("--- " + menuOfCar.indexOf(obj) + " ---");
//   // 取り出した要素がオブジェクトなのでfor-inで変数keyにオブジェクトのキーを入れる
//   for (const key in obj) {
//     // キー"secret"がオブジェクトにあれば表示(undefinedじゃなかったら表示)
//     if (key === "secret") {
//       // console.logで表示
//       console.log(obj);
//     }
//   }
// }
/////
// console.log("--- if ---");
// // if カウントループ
// let count = 1;

// if (count <= 10) {
//   console.log(count);
//   count++;
// }

// // While カウントループ
// console.log("--- while ---");
// let counter = 1;

// while (counter <= 10) {
//   console.log(counter);
//   counter++;
// }

// // for カウントループ
// console.log("--- for ---");
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// test
// console.log("--- Test ---");

// for (let i = 0; i <= 4; i++) {
//   console.log(i + 4);
// }

// console.log("--- Test ---");

// const cars = ["Toyota", "Volvo", "BMW", "Honda"];

// for (let i = 0; i < 4; i++) {
//   console.log(cars[i]);
// }

// console.log("--- Test ---");

// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }
// console.log("--- Test ---");

// for (let i = 0; i < cars.length - 1; i++) {
//   console.log(cars[i]);
// }
// console.log("--- Test ---");

// for (let i = 0; i <= cars.length; i++) {
//   console.log(cars[i]);
// }

// console.log("--- Test ---");

// for (let i = 0; i <= cars.length - 1; i++) {
//   console.log(cars[i]);
// }

// console.log("--- Test ---");

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// 演習
console.log("--- 確認 ---");
// 1
// console.log("--- 1 ---");
// let index = 0;

// while (index <= 4) {
//   console.log("hello!");
//   index++;
// }

// for (let i = 1; i <= 4; i++) {
//   console.log("hello!");
// }

// // 2
// console.log("--- 2 ---");
// const array = ["a", "b", "c", "d", "e"];
// for (let i = 0; i < array.length; i++) {
//   console.log("Index: " + i, "Index :" + array[i]);
// }

// // Index: 0 Index: a
// // Index: 1 Index: b
// // Index: 2 Index: c
// // Index: 3 Index: d
// // Index: 4 Index: e

// // 3
// console.log("--- 3 ---");

// function sayFourHellos() {
//   for (let i = 1; i <= 4; i++) {
//     console.log("Hello!");
//   }
// }

// sayFourHellos();

// // "Hello!"
// // "Hello!"
// // "Hello!"
// // "Hello!"

// // 4
// console.log("--- 4 ---");

// function countDown(number) {
//   for (let i = number; i >= 0; i--) {
//     console.log(i);
//   }
// }

// countDown(10);


console.log("--- 基礎演習 ---");
// 1
console.log("--- 1 ---");

// /**
//  * 
//  * @param {*} n 
//  */
// function sayHellos(n) {
//   for (let i = 1; i <= n; i++) {
//     console.log("Hello!");
//   }
// }

// リファクタ
const sayHellos = n => {
  for (let i = 1; i <= n; i++) {
    console.log("Hello!");
  }
};

sayHellos(4);

// "Hello!"
// "Hello!"
// "Hello!"
// "Hello!"

// 2
console.log("--- 2 ---");

// function countToTen() {
//   for (let i = 1; i <= 10; i++) {
//     console.log(i);
//   }
// }

// リファクタ
const countToTen = () => {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
};

countToTen();

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

// 3
console.log("--- 3 ---");

// function counter(num) {
//   let i = 0;
//   while (i < num) {
//     console.log(i);
//     i++;
//   }
// }

// function counter(num) {
//   for (let i = 0; i < num; i++) {
//     console.log(i);
//   }
// }

// counter(10);

// 4
console.log("--- 4 ---");

// const array = [1, 2, 3, 4, 5];

// /**
//  * 
//  * @param {array{number}} array 
//  */
// function printArray(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
//   }
// }

// printArray(array);
// 1
// 2
// 3
// 4
// 5

// 5
console.log("--- 5 ---");

// printArray("array");

// 6
console.log("--- 6 ---");

// /**
//  * @param {Array<number>} lists
//  * @returns {Array<number>} 与えられた配列の各要素に 1 を加えた数字を要素として持つ新しい配列
//  */
// // ここにコードを書きましょう
// // function addOne(lists) {
// //   const result = [];
// //   for (const num of lists) {
// //     result.push(num + 1);
// //   }
// //   return result;
// // }

// function addOne(lists) {
//   const result = [];
//   for (let i = 0; i < lists.length; i++) {
//     result.push(lists[i] + 1);
//   }
//   return result;
// }

// const array1 = [1, 2, 3, 4];

// // function が動作するかテストする
// test(addOne(array1), [2, 3, 4, 5]);

// // 元の配列が変更されていないことを確認する
// test(array1, [1, 2, 3, 4]);

console.log("--- 中級演習 ---");
// 1
console.log("--- 1 ---");

// /**
//  * @param {number} start
//  * @param {number} end
//  * @returns {Array<number>} start 以上 end 以下のすべての整数を含む配列
//  */
// // ここにコードを書きましょう
// function createRange(start, end) {
//   const result = [];
//   for (let i = start; i <= end; i++) {
//     result.push(i);
//   }
//   return result;
// }

// test(createRange(4, 6), [4, 5, 6]);
// test(createRange(10, 16), [10, 11, 12, 13, 14, 15, 16]);

// 2
console.log("--- 2 ---");

// function printCars() {
//   const cars = ["Toyota", "Mazda", "Mercedes", "BMW", "Hyundai", "Volvo"];
//   let i = 0;

//   while (i < cars.length) {
//     console.log(cars[i]);
//     i++;
//   }
//   console.log("----------------");
//   for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
//   }
// }

// printCars();

// 3
console.log("--- 3 ---");

// const numbers = ["No. 3", "No. 2", "No. 1"];

// function printFromBack(list) {
//   for (let i = list.length - 1; i >= 0; i--) {
//     console.log(list[i]);
//   }
//   console.log("----------------");
//   let i = list.length - 1;
//   while (i >= 0) {
//     console.log(list[i]);
//     i--;
//   }
// }

// printFromBack(numbers);

// "No. 1"
// "No. 2"
// "no. 3"

// 4
console.log("--- 4 ---");

// /**
//  * @param {number} start
//  * @param {number} end
//  * @param {number} step
//  * @returns {Array<number>} start 以上 end 以下の整数を、 step の刻みで入れた新しい配列。
//  */
// // ここにコードを書きましょう
// function createRangeBySteps(start, end, step) {
//   const result = [];
//   for (let i = start; i <= end; i += step) {
//     result.push(i);
//   }
//   return result;
// }

// test(createRangeBySteps(1, 10, 2), [1, 3, 5, 7, 9]);
// test(createRangeBySteps(10, 30, 5), [10, 15, 20, 25, 30]);

// 5
console.log("--- 5 ---");

// /**
//  * @param {Array<number>} array1
//  * @param {Array<number>} array2
//  * @returns {Array<number>} それぞれの配列の対応する要素の和からなる配列
//  */
// // ここにコードを書きましょう
// function addTogether(array1, array2) {
//   const result = [];
//   let end;
//   if (array1.length >= array2.length) {
//     end = array1.length;
//   } else {
//     end = array2.length;
//   }
//   for (let i = 0; i < end; i++) {
//     let val;
//     if (array1[i] !== undefined && array2[i] !== undefined) {
//       val = array1[i] + array2[i];
//     } else if (array1[i] === undefined) {
//       val = array2[i];
//     } else {
//       val = array1[i];
//     }
//     console.log(val);
//     result.push(val);
//   }
//   return result;
// }

// test(addTogether([1, 2, 3], [4, 5, 6]), [5, 7, 9]);
// test(addTogether([1, 2, 3], [7, 8, 9]), [8, 10, 12]);

// 6
console.log("--- 6 ---");

// test(addTogether([1], [4, 5, 6]), [5, 5, 6]);
// test(addTogether([1, 2, 3], [4]), [5, 2, 3]);

console.log("--- 応用演習 ---");
console.log("--- 1 ---");
// let password = prompt("パスワードを入力してください")
// while (password !== "1107") {
//   password = prompt("パスワードを入力してください")
// }

// const getPass = () => {
//   let password = prompt("パスワードを入力してください");
//   while (password === "1107") {
//     return password;
//   }
//   return getPass();
// }

console.log("--- 2 ---");
/**
 * @param {Array<any>} array
 * @returns {Array<any>} 重複していない値のみが入った新しい配列
 */
// ここにコードを書きましょう

function unique(array) {

}

test(unique([1, 1, 1, 1, 1]), []);
test(unique([1, 3, 4, 5, 2, 4]), [1, 3, 5, 2]);