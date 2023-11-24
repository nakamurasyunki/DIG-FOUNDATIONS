'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// const colors = ["red","green","blue"];
// console.log(colors);

// for (const color of colors) {
//   console.log(color);
// }

let actual;
let expected;

// 基礎演習
// 1
// /**
//  * @param {Array<number>} 数値型の要素を持つ配列
//  * @returns {number} 与えられた配列のすべての数字の合計
//  */
// function sumArray(infos) {
//   // ここにコードを書きましょう。
//   let sum = 0;
//   for (const info of infos) {
//     sum += info;
//   }
//   return sum;
// }

// actual = sumArray([1, 2, 3, 4]);
// expected = 10;

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }

// // さらにテストを書きましょう。
// actual = sumArray([5, 6, 7, 8, 9]);
// expected = 35;

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }

// 2
// /**
//  * @param {Array<number>} 数値型の要素を持つ配列
//  * @returns {number} 与えられた配列の全ての数字をかけ合わせた積 (product)
//  */
// function productArray(infos) {
//   // ここにコードを書きましょう。
//   let product = 1;
//   for (const info of infos) {
//     product *= info;
//   }
//   return product;
// }

// actual = productArray([1, 2, 3, 4]);
// expected = 24;

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }

// // さらにテストを書きましょう。
// actual = productArray([1, 2, 3, 4, 5]);
// expected = 120;

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }

// 3
// /**
//  * @param {Array<any>} 配列
//  * @returns {boolean} 与えられた配列に "fun" という文字列が要素として入っているかどうかを表すブーリアン
//  */
// function hasFun(infos) {
//   // ここにコードを書きましょう。
//   let array = false;
//   for (const info of infos) {
//     if (info === "fun") {
//       array = true;
//     }
//   }
//   return array;
// }

// actual = hasFun(["dog", 2, false, "fun", "hello"]);
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

// actual = hasFun(["gift", 2, false, "run", "hello"]);
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

// さらにテストを書きましょう。

// 4
// /**
//  * @param {Array<any>} ???
//  * @returns {boolean} 与えられた配列の要素がブーリアンだけかどうかを表すブーリアン
//  */
// function containsOnlyBooleans(infos) {
//   // ここにコードを書きましょう。
//   for (const info of infos) {
//     if (typeof(info) !== "boolean") {
//       return false;
//     }
//   }
//   return true;
// }

// actual = containsOnlyBooleans([true, false, true, false, false]);
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

// actual = containsOnlyBooleans([true, true, true, "not a boolean"]);
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

// さらにテストを書きましょう。

// 5
// /**
//  * @param {Array<any>} 1番目の配列
//  * @param {Array<any>} 2番目の配列
//  * @returns {Array<any>} 与えられた2つの配列を連結させた配列
//  */
// function concatenate(array1,array2) {
//   // ここにコードを書きましょう。
//   for (const array of array2) {
//     array1.push(array);
//   }
//   console.log(array1);
//   return array1;
// }

// actual = concatenate(["one", "two"], ["three", "four"]);
// expected = ["one", "two", "three", "four"];

// // 配列同士を比較するため、ここでは JSON.stringify で文字列に変換することにしましょう。
// if (JSON.stringify(actual) === JSON.stringify(expected)) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }

// さらにテストを書きましょう。

// 6
// /**
//  * @param {Array<number>} 数値型の要素を持つ配列

//  * @returns {Array<number>} 与えられた配列の中の偶数だけを入れた配列
//  */
// function getEvenNumbers(numbers) {
//   // ここにコードを書きましょう。
//   const result = [];
//   for (const elem of numbers) {
//     if (elem % 2 === 0) {
//       result.push(elem);
//     }
//   }
//   return result;
// }

// const getEvenNumbers = numbers => numbers.filter((elem) => elem % 2 === 2);

// actual = getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]);
// expected = [2, 4, 6, 8];

// // 上記と同じく、配列を比較するためここでは JSON.stringify を使いましょう。
// if (JSON.stringify(actual) === JSON.stringify(expected)) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }

// さらにテストを書きましょう。

// 7
// /**
//  * @param {Array<number>} 第 1 引数：数値型の要素を持つ配列
//  * @param {number} 第 2 引数：配列の中の数字にかける数字
//  * @returns {Array<number>} 配列の中の数字に第 2 引数をかけた結果が入った新しい配列
//  */
// // function getMultipliedArray(array, num) {
// //   // ここにコードを書きましょう。
// //   const result = [];
// //   for (const elem of array) {
// //     result.push(elem * num);
// //   }
// //   return result;
// // }

// const getMultipliedArray = (array, num) => array.map((elem) => elem * num);

// actual = getMultipliedArray([1, 2, 3], 6);
// expected = [6, 12, 18];

// // 上記と同じく、配列を比較するためここでは JSON.stringify を使いましょう。
// if (JSON.stringify(actual) === JSON.stringify(expected)) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }

// さらにテストを書きましょう。

// 中級演習
// 1
// /**
//  * @param {Array<number>} 数値型の要素を持つ配列
//  * @returns {boolean} 与えられた配列が昇順になっているかを表すブーリアン
//  */
// function isSorted(array) {
//   // ここにコードを書きましょう。
//   const result = array.slice();
//   array.sort()
//   return JSON.stringify(result) === JSON.stringify(array);
// }

function isSorted(array) {
  let result = false;
  let i = 1;
  for (const elem of array) {
    if (elem <= array[i] || array[i] === undefined) {
      result = true;
      i += 1;
    } else {
      result = false;
      break;
    }
  }
  return result
}

actual = isSorted([1, 2, 3]);
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

actual = isSorted([3, 2, 3]);
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

// // さらにテストを書きましょう。
actual = isSorted([-1, 2, 3]);
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

actual = isSorted([-1, 2, -3]);
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

// 2
// /**
//  * @param {Array<any>} 配列
//  * @param {string|number|boolean} 配列内での出現回数をカウントしたい値（値のデータ型は `string`、`number`、`boolean` のいずれかとする）
//  * @returns {number} 第 2 引数の値が第 1 引数の配列内で出てきた回数
//  */
// function countOccurrences(array, keyword) {
//   // ここにコードを書きましょう。
//   let result = 0;
//   for (const elem of array) {
//     if (elem === keyword) {
//       result += 1;
//     }
//   }
//   return result;
// }

// actual = countOccurrences([1, 2, 3], 2);
// expected = 1;

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }

// actual = countOccurrences([1, 2, 2], 2);
// expected = 2;

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }

// actual = countOccurrences([1, 2, "cat"], "cat");
// expected = 1;

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }

// さらにテストを書きましょう。

// 3
// /**
//  * @param {Array<any>} place
//  * @returns {Array<any>} 与えられた配列の要素が逆の順番に入っている新しい配列
//  */
// function myReverse(place) {
//   // ここにコードを書きましょう。
//   const result = [];
//   for (const elem of place) {
//     result.unshift(elem);
//   }
//   return result;
// }

// const japaneseIslands = ["九州", "四国", "本州", "北海道"]; 　// 日本の島が入っている配列です。

// actual = myReverse(japaneseIslands);
// expected = ["北海道", "本州", "四国", "九州"];

// // 上記と同じく、配列を比較するためここでは JSON.stringify を使いましょう。
// if (JSON.stringify(actual) === JSON.stringify(expected)) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }

// // 元の配列が変更されていないことを確認してください。

// actual = japaneseIslands;
// expected = ["九州", "四国", "本州", "北海道"];

// if (JSON.stringify(actual) === JSON.stringify(expected)) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }

// さらにテストを書きましょう。

// 4
// /**
//  * @param {Array<number>} array
//  * @param {"+"|"-"|"*"|"/"|"**"|"%"} ope 使用したい算術演算子を表す文字列
//  * @param {number} num 使用したい被演算子
//  * @returns {Array<any>} 与えられた配列の各要素に、引数の算術演算子と被演算子を適用した結果が入った新たな配列
//  */
// function getOperatedArray(array, ope, num) {
//   // ここにコードを書きましょう。
//   const result = [];
//   for (const elem of array) {
//     result.push(new Function(`return ${elem}${ope}${num}`)());
//   }
//   return result;
// }

// actual = getOperatedArray([1, 2, 3], "+", 5);
// expected = [6, 7, 8];

// // 上記と同じく、配列を比較するためここでは JSON.stringify を使いましょう。
// if (JSON.stringify(actual) === JSON.stringify(expected)) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }

// actual = getOperatedArray([9, 6, 3], "/", 3);
// expected = [3, 2, 1];

// //上記と同じく、配列を比較するためここでは JSON.stringify を使いましょう。
// if (JSON.stringify(actual) === JSON.stringify(expected)) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }

// さらにテストを書きましょう。

// 応用演習
// 1
// /**
//  * @param {Array<string>} pain 「痛む場所」が入った配列
//  * @returns {string} お医者さんに診てもらうときに言うセリフ
//  */
// function callADoctor(pain) {
//   // ここにコードを書きましょう。
//   let word = "";
//   let i = 1;
//   for (const elem of pain) {
//     if (i === 1) {
//       word = elem;
//       i++;
//     } else {
//       word += `と${elem}`
//       i++;
//     }
//   }
//   return `先生、${word}が痛いんです！`;
// }

// actual = callADoctor(["頭"]);
// expected = "先生、頭が痛いんです！";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }

// actual = callADoctor(["肩"]);
// expected = "先生、肩が痛いんです！";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }

// actual = callADoctor(["頭", "肩", "膝", "足の指"]);
// expected = "先生、頭と肩と膝と足の指が痛いんです！";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }

// さらにテストを書きましょう。

// 2
// /**
//  * @param {Array<any>} array
//  * @returns {number} 与えられた配列の「要素」の数。このとき、入れ子になった配列がある場合は、その配列内の要素も一つ一つカウントすること。
//  */
// function deepCount(array) {
//   // ここにコードを書きましょう。
//   return array.flat(Infinity).length;
// }

// actual = deepCount([1]);
// expected = 1;

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }

// actual = deepCount([1, 3]);
// expected = 2;

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }

// actual = deepCount([1, 3, [2, 4]]);
// expected = 4;

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }

// actual = deepCount(["a", "b", ["c", ["d", "e", ["f"]]]]);
// expected = 6;

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }

// さらにテストを書きましょう。

// ナイトメア
// 1
// /**
//  * @param {Array<number>} 数値型の要素を持つ配列
//  * @returns {Array<number>} 与えられた配列の数字が昇順に並び替えられた配列
//  */
// function mySort(array) {
//   // ここにコードを書きましょう。
//   const result = [];
//   for (const elem of array) {
//     if (result[0] === undefined) {
//       result.push(elem);
//     } else if (elem > result[0]) {
//       result.push(elem);
//     } else {
//       result.unshift(elem);
//     }
//   }
//   return result;
// }

// let numbers = [5, 4, 3, 2, 1];

// actual = mySort(numbers);
// expected = [1, 2, 3, 4, 5];

// // 正しい結果を返すことを確認する
// if (JSON.stringify(actual) === JSON.stringify(expected)) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }

// // 元の配列が変更されていないことを確認する
// if (JSON.stringify(numbers) === JSON.stringify([5, 4, 3, 2, 1])) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }

// // さらにテストを書きましょう。

// 2
// /**
//  * @param {Array<any>} array
//  * @returns {Array<any>} 与えられた配列を 1 次元配列に平坦化した配列
//  */

// const flattenDeep = array => array.flat(Infinity);

// expected = [1, 2, 3, 4, 5, 6];
// actual = flattenDeep([1, 2, 3, [4, 5, 6]]);

// // 正しい結果を返すことを確認する
// if (JSON.stringify(actual) === JSON.stringify(expected)) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }

// expected = [1, 2, 3, 4, 5, 6];
// actual = flattenDeep([
//   [1, 2, 3],
//   [4, 5, 6],
// ]);

// // 正しい結果を返すことを確認する
// if (JSON.stringify(actual) === JSON.stringify(expected)) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }

// expected = [1, 2, 3, 4, 5, 6];
// actual = flattenDeep([[1], [2], [3], [4, 5, 6]]);

// // 正しい結果を返すことを確認する
// if (JSON.stringify(actual) === JSON.stringify(expected)) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }

// expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// actual = flattenDeep([[1, [2, [3, [4, [5, [6, [7, [8, [9]]]]]]]]]]);

// // 正しい結果を返すことを確認する
// if (JSON.stringify(actual) === JSON.stringify(expected)) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }