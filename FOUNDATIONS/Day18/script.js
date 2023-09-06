'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// function test(actual, expected) {
//   if (JSON.stringify(actual) === JSON.stringify(expected)) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//     console.trace();
//   }
// }

function test(actual, expected) {
  if (_.isEqual(actual, expected)) {
    console.log("OK! Test PASSED.");
  } else {
    console.error("Test FAILED. Try again!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
    console.trace();
  }
}

// ウォーミングアップ
// const arrayOfObjects = [
//   { name: "alice", favoriteColor: "green" },
//   { name: "bob", favoriteColor: "blue" },
// ];

// ここにコードを書きましょう
// /**
//  * getNames
//  * @param {*} arrayOfObjects
//  * @returns {name<array>}
//  */
// function getNames(arrayOfObjects) {
//   return arrayOfObjects.map(function (elem) {
//     return elem.name;
//   })
// }

// /**
//  * getFavoriteColors
//  * @param {*} arrayOfObjects
//  * @returns {array<favoriteColor>}
//  */
// function getFavoriteColors(arrayOfObjects) {
//   return arrayOfObjects.map(function (elem) {
//     return elem.favoriteColor;
//   })
// }

// test(getNames(arrayOfObjects), ["alice", "bob"]);
// test(getFavoriteColors(arrayOfObjects), ["green", "blue"]);
// console.log("--- evenArray ---");
// function evenArray(array) {
//   // 何かする
//   const result = [];
//   for (const elem of array) {
//     if (elem % 2 === 0) {
//       result.push(elem);
//     }
//   }
//   return result;
// }

// evenArray([2, 3, 4, 5, 6]); // => [2, 4, 6]
// console.log(evenArray([2, 3, 4, 5, 6])); // => [2, 4, 6]

// console.log("--- threeGreaterNumber ---");
// function threeGreaterNumber(array) {
//   // 何かする
//   const result = [];
//   for (const elem of array) {
//     if (elem > 3) {
//       result.push(elem);
//     }
//   }
//   return result;
// }

// threeGreaterNumber([2, 3, 4, 5, 6]); // => [2, 4, 6]
// console.log(threeGreaterNumber([2, 3, 4, 5, 6])); // => [2, 4, 6]

// console.log("--------関数式-------");
// const sayHello = function (name) {
//   return `Hello, ${name}`
// };
// console.log(sayHello("Masaki"));

// console.log("--------アロー-------");
// const sayHello = name => `Hello ,${name}!`;
// console.log(sayHello("Shunki"));


console.log("--- 演習 ---");
console.log("--- 基礎演習 ---");
console.log("--- 1 ---");
/**
 * @param {number} num
 * @returns {boolean} 与えられた数値が 10 の倍数かどうか
 */
// ここにコードを書きましょう
function isMultipleOfTen(num) {
  return num % 10 === 0;
}

const arrayOfNumbers = [2, 4, 6, 8, 10, 15, 20, 30, 66, 89, 100];

test(arrayOfNumbers.filter(isMultipleOfTen), [10, 20, 30, 100]); // .filter メソッドの引数に isMultipleOfTen を渡しています。
test(arrayOfNumbers.slice(6).filter(isMultipleOfTen), [20, 30, 100]);

console.log("--- 2 ---");
/**
 * @param {string} str
 * @returns {boolean} 与えられた文字列に母音 (a, e, i, o, u) が1つ以上含まれているか
 */
// ここにコードを書きましょう
function hasAVowel(str) {
  return str.includes("a") || str.includes("i") || str.includes("u") || str.includes("e") || str.includes("o");

}

const arrayOfStrings1 = ["bat", "ball", "tree", "cow", "bnm"];
const arrayOfStrings2 = ["bhg", "waa", "cvb"];

test(arrayOfStrings1.filter(hasAVowel), ["bat", "ball", "tree", "cow"]); // .filter メソッドの引数に hasAVowel を渡しています。
test(arrayOfStrings2.filter(hasAVowel), ["waa"]);

console.log("--- 3 ---");
/**
 * @param {Array<number>} array
 * @returns {Array<number>} 与えられた配列の中にある正の数のみを要素として持つ配列
 */
// ここにコードを書きましょう
const getPositiveNumbers = array => array.filter(function (elem) {
  return elem > 0;
});

test(getPositiveNumbers([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
test(getPositiveNumbers([0, 1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
test(getPositiveNumbers([1, -2, 3, -4, 5]), [1, 3, 5]);
test(getPositiveNumbers([-2, -4]), []);

console.log("--- 4 ---");
/**
 * @param {Array<string>} array
 * @returns {Array<string>} 与えられた配列の中にある、大文字で始まり、疑問符で終わる文字列のみを要素として持つ配列
 */
// ここにコードを書きましょう
const getQuestions = array => array.filter(function (elem) {
  return elem[0] === elem[0].toUpperCase() && elem[elem.length - 1] === "?";
  // return elem[0].match(/^[A-Z]+$/) && elem[elem.length - 1] === "?";
});

const arrayOfStrings3 = [
  "Hi, there.",
  "What did you read?",
  "My name is JavaScript",
  "Do you cook?",
];

test(getQuestions(arrayOfStrings3), [
  "What did you read?",
  "Do you cook?",
]);
test(getQuestions(arrayOfStrings3.slice(2)), [
  "Do you cook?",
]);

console.log("--- 中級演習 ---");
console.log("--- 1 ---");
/**
 * @param {Array<string>} ???
 * @returns {Array<string>} 与えられた配列の中にある、長さが奇数で、文字がすべて大文字の文字列のみを要素として持つ配列
 */
// ここにコードを書きましょう
const getOddLengthCapitalWords = array => array.filter(function (elem) {
  return elem.length % 2 === 1 && elem === elem.toUpperCase();
})

const arrayOfStrings4 = ["SNAKE", "APPLES", "Peaches", "PUMPKINPIES"];

test(getOddLengthCapitalWords(arrayOfStrings4), ["SNAKE", "PUMPKINPIES"]);
test(getOddLengthCapitalWords(arrayOfStrings4.slice(1)), ["PUMPKINPIES"]);

console.log("--- 2 ---");
/**
 * @param {Array<any>} array1
 * @param {Array<any>} array2
 * @returns {Array<any>} 与えられた配列の両方に存在する要素だけが入った配列
 */
// ここにコードを書きましょう
// const intersection = (array1, array2) => array1.filter(function (elem) {
//   return array2.includes(elem);
// })

// test(intersection([1, 2, 3], [1, 2, 3]), [1, 2, 3]);
// test(intersection([1, 2, 3], [2, 3, 4]), [2, 3]);
// test(intersection([1, 2, 3], [3, 4, 5]), [3]);
// test(intersection([1, 2, 3], [4, 5, 6]), []);

console.log("--- 応用演習 ---");
console.log("--- 1 ---");
/**
 * @param {...Array<any>} ??? - 任意の数の配列
 * @returns {Array<any>} 与えられた配列のすべてに共通する要素だけが入った配列
 */
// ここにコードを書きましょう
const intersection = (...array) => array.filter(function (elements) {
  return elements.filter(function (elem) {
    return array.includes(elem);
  })
})

test(intersection([1, 2, 3], [1, 2, 3], [1, 2, 3]), [1, 2, 3]);
test(intersection([1, 2, 3], [2, 3, 4], [3, 4, 5]), [3]);
test(intersection([1, 2, 3], [3, 4, 5], [6]), []);
test(
  intersection([1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [4, 5, 6]),
  []
);

console.log("--- 2 ---");
console.log("--- ナイトメア ---");
console.log("--- 1 ---");
console.log("--- 2 ---");