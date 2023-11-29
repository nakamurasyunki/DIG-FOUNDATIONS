'use strict'
// 1行目に記載している 'use strict' は削除しないでください

let actual;
let expected;

console.log("--- 基礎演習 ---");
console.log("--- 1 ---");
/**
 * @param {Array<string>} arrayOfPeople - 人の名前の配列
 * @returns {number} 与えられた配列の長さ
 */
function numberOfPeople(arrayOfPeople) {
  // ここにコードを書きましょう
  return arrayOfPeople.length;
}

actual = numberOfPeople(["Koike", "Mizuno", "Akagi", "Yano"]);
expected = 4;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd("Result:");
}

console.log("--- 2 ---");
// ここにコードを書きましょう.
const students = ["Koike", "Mizuno", "Akagi", "Yano", "Tanaka"];

actual = numberOfPeople(students); // 宣言した配列 students を先ほど作成した numberOfPeople に渡しています。
expected = 5;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd("Result:");
}

console.log("--- 3 ---");
// ここにコードを書きましょう.
students.push("Yamada", "Itadori", "Husiguro");

actual = numberOfPeople(students);
expected = 8;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd("Result:");
}

console.log("--- 4 ---");
/**
 * @param {Array<any>} array - 配列
 * @returns {any} 与えられた配列の最後の要素を返す
 */
function last(array) {
  // ここにコードを書きましょう
  return array[(array.length - 1)];
}

// ここにテストを書いてください

actual = last(["Koike", "Mizuno", "Akagi", "Yano"]);
expected = "Yano";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd("Result:");
}

console.log("--- 5 ---");
/**
 * @param {Array<any>} ??? - 配列
 * @param {any} ??? - 配列の最後に追加する値
 * @returns {number} 処理後の配列の長さを返す。与えられた配列の末尾に、第 2 引数で渡された要素を追加してください。
 */
// ここにコードを書きましょう
const myPush = (array, num) => array[array.length] = num;

let array = [1, 2, 3, 4];

// 関数が正しい結果を返すことを確認する
actual = myPush(array, 5);
expected = 5;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd("Result:");
}

// 配列が正しく変更されていることを確認する
actual = array;
expected = [1, 2, 3, 4, 5];

// 上にも書きましたが、配列同士をそのまま比較することはできません。一旦、JSON.stringify で文字列に変換してから比較しましょう。

if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd("Result:");
}

// さらにテストを追加してみましょう。

console.log("--- 中級演習 ---");
console.log("--- 1 ---");
/**
 * @param {Array<any>} array - 配列
 * @returns {Array<any>} 配列の真ん中が "hi" に置き換えらえた配列、もしくは同じ配列を返す
 */
// ここにコードを書きましょう
const hiInTheMiddle = array => {
  if (array.length % 2 === 1) {
    array[(Math.floor(array.length / 2))] = "hi";
    return array;
  }
  return array;
};

actual = hiInTheMiddle([1, 2, 3, 4, 5]);
expected = [1, 2, "hi", 4, 5];

if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd("Result:");
}

actual = hiInTheMiddle([1, 2, 3, 4]);
expected = [1, 2, 3, 4];

if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd("Result:");
}


console.log("--- 2 ---");
/**
 * 与えられた配列から最後の要素を取り除き、その要素を返す
 * @param {Array<any>} array - 配列
 * @returns {any} 与えられた配列の最後の要素を返す
 */
// ここにコードを書きましょう
const myPop = array => array.splice(array.length - 1)[0];

array = [1, 2, 3, 4];

actual = myPop(array);
expected = 4;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd("Result:");
}

actual = array;
expected = [1, 2, 3];

if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd("Result:");
}

console.log("--- 3 ---");
/**
 * 第 1 引数で与えられた配列の最初に第 2 引数の要素を追加
 * @param {Array<any>} array - 配列
 * @param {any} num - 配列の先頭に追加する値
 * @returns {number} 処理後の配列の長さを返す
 */
// ここにコードを書きましょう
const myUnshift = (array, num) => {
  array.splice(0, 0, num);
  return array.length;
};

array = [1, 2, 3, 4];

actual = myUnshift(array, 5);
expected = 5;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd("Result:");
}

actual = array;
expected = [5, 1, 2, 3, 4];

if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd("Result:");
}

console.log("--- 4 ---");
/**
 * 与えられた配列の最初の要素を取り除き、その要素を返す
 * @param {Array<any>} array - 配列
 * @returns {any} 与えられた配列の先頭の要素を返す
 */
// ここにコードを書きましょう
const myShift = array => array.splice(0, 1)[0];

array = [1, 2, 3, 4];

actual = myShift(array);
expected = 1;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd("Result:");
}

actual = array;
expected = [2, 3, 4];

if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd("Result:");
}

console.log("--- 応用演習 ---");
console.log("--- 1 ---");
/**
 * @param {Array<any>} array1 - 1 番目の配列
 * @param {Array<any>} array2 - 2 番目の配列
 * @returns {boolean} 2 つの配列が互いに逆順かどうか
 */
// ここにコードを書きましょう
const areReverses = (array1, array2) => {
  const newArray = array1.slice().reverse();
  if (JSON.stringify(newArray) === JSON.stringify(array2)) {
    return true;
  }
  return false;
};

let array1 = [1, 2, 3, 4];
let array2 = [4, 3, 2, 1];

actual = areReverses(array1, array2);
expected = true;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd("Result:");
}

actual = array1;
expected = [1, 2, 3, 4];

// 元の配列が変更されていないことを確認する
if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd("Result:");
}


console.log("--- 2 ---");
/**
 * @param {Array<any>} array1 - 1 番目の配列
 * @param {Array<any>} array2 - 2 番目の配列
 * @returns {Array<any>} 与えられた 2 つの配列を連結した新しい 1 つの配列を返す
 */
// ここにコードを書きましょう
const myConcat = (array1, array2) => [...array1, ...array2];

array1 = [1, 2, 3, 4];
array2 = [4, 3, 2, 1];

actual = myConcat(array1, array2);
expected = [1, 2, 3, 4, 4, 3, 2, 1];

if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd("Result:");
}

// 元の配列が変更されていないことを確認する
actual = array1;
expected = [1, 2, 3, 4];

if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd("Result:");
}

actual = array2;
expected = [4, 3, 2, 1];

if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd("Result:");
}

console.log("--- 1 ---");
myConcat(array1, array2).forEach((elem) => console.log(elem));
myConcat(array1, array2).forEach((elem) => console.log(elem * 2));
console.log("--- ナイトメア ---");
console.log("--- 1 ---");
/**
 * @param {Array<number>} array - 数字の配列
 * @returns {Array<number>} 与えられた配列の要素を昇順に並べた新しい配列
 */
function mySort(array) {
  // ここにコードを書きましょう.
  const result = array.slice();
  for (let outCount = 0; outCount < result.length - 1; outCount++) {
    for (let i = result.length - 1; i > outCount; i--) {
      if (result[i] < result[i - 1]) {
        let num = result[i];
        result[i] = result[i - 1];
        result[i - 1] = num;
      }
    }
  }
  return result;
}

let arrayToSort = [5, 4, 3, 2, 1];

actual = mySort(arrayToSort);
expected = [1, 2, 3, 4, 5];

// 正しい結果を返すことを確認する
if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd("Result:");
}

// 元の配列が変更されていないことを確認する
if (JSON.stringify(arrayToSort) === JSON.stringify([5, 4, 3, 2, 1])) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd("Result:");
}

let arrayToSort2 = [5, 6, 3, 2, 1];

actual = mySort(arrayToSort2);
expected = [1, 2, 3, 5, 6];

// 正しい結果を返すことを確認する
if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd("Result:");
}

// 元の配列が変更されていないことを確認する
if (JSON.stringify(arrayToSort2) === JSON.stringify([5, 6, 3, 2, 1])) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd("Result:");
}
let arrayToSort3 = [5, 6, 1, 2, 3];

actual = mySort(arrayToSort3);
expected = [1, 2, 3, 5, 6];

// 正しい結果を返すことを確認する
if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd("Result:");
}

// 元の配列が変更されていないことを確認する
if (JSON.stringify(arrayToSort3) === JSON.stringify([5, 6, 1, 2, 3])) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd("Result:");
}

// ここにテストを書いてください