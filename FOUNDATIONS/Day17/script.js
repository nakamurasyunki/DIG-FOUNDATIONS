'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// function doubleArray(array) {
//   // 何かする
//   const result = [];
//   for (const elem of array) {
//     result.push(elem * 2);
//   }
//   return result;
// }

// doubleArray([2, 3, 4, 5, 6]); // => [4, 6, 8, 10, 12]
// console.log(doubleArray([2, 3, 4, 5, 6])); // => [4, 6, 8, 10, 12]

// function squareNumberArray(array) {
//   // 何かする
//   const result = [];
//   for (const elem of array) {
//     result.push(elem * elem);
//     // result.push(elem ** 2);
//   }
//   return result;
// }

// squareNumberArray([2, 3, 4, 5, 6]); // => [4, 9, 16, 25, 36]
// console.log(squareNumberArray([2, 3, 4, 5, 6])); // => [4, 9, 16, 25, 36]

// function double(element) {
//   return element * 2;
// }

// function square(element) {
//   return element * element;
// }

// const originalArray = [2, 3, 4, 5, 6];
// const newArray = originalArray.map(square);

// console.log(newArray);
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
console.log("--- 基礎演習 ---");
console.log("--- 1 ---");
console.log("--- 2 ---");
console.log("--- 3 ---");

console.log("--- 中級演習 ---");
console.log("--- 応用演習 ---");
console.log("--- 1 ---");
console.log("--- 2 ---");
/**
 * @param {Array<any>} ???
 * @param {Function} ??? - 実行したい関数
 * @param {number} ??? - 関数を実行したい回数
 * @returns {Array<any>} 与えられた配列の各要素に、実行したい回数だけ関数を実行した結果が入った、新しい配列
 */

// ここにコードを書きましょう
function feedback(array, func, number) {
  let newArray = array.map(func);
  for (let i = 1; i < number; i++) {
    newArray = newArray.map(func)
    console.log(newArray);
  }
  return newArray;
}

function double(element) {
  return element * 2;
}

test(feedback([1, 2, 3], double, 1), [2, 4, 6]);
test(feedback([1, 2, 3], double, 2), [4, 8, 12]);
test(feedback([1, 2, 3], double, 8), [256, 512, 768]);