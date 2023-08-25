'use strict'
// 1行目に記載している 'use strict' は削除しないでください

let actual;
let expected;

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

// ウォーミングアップ
// /**
//  * @param {Array<object>} arrays 複数のオブジェクトが入った配列
//  * @param {string} key キー
//  * @returns {Array<any>} 配列の中のオブジェクトから、第 2 引数と同じキーに対応する値だけを拾って（＝ pluck して）、配列に入れたもの
//  */

// // ここにコードを書きましょう。
// function pluck(arrays,key) {
//   const result = [];
//   for (const array of arrays) {
//     result.push(array[key]);
//   }
//   return result;
// }

// const arrayOfObjects = [
//   { a: 1, b: 2, c: 3 },
//   { a: 4, b: 5, c: 6 },
//   { a: 7, b: 8 },
// ];

// test(pluck(arrayOfObjects, "a"), [1, 4, 7]);
// test(pluck(arrayOfObjects, "b"), [2, 5, 8]);
// test(pluck(arrayOfObjects, "c"), [3, 6, undefined]);

// for in ループ
const infoObject = { name: "Hana", dog: "true", age: 12 };

for(const key in infoObject) {
  const value = infoObject[key];
  console.log(infoObject[key]);
}