'use strict'
// 1行目に記載している 'use strict' は削除しないでください

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

// 1
console.log("--- 1 ---");
// ここにコードを書きましょう
/**
 * 
 * @param {array<number>} array //数値の配列
 * @param {boolean} bool //true or falseを受け取る
 * @returns //boolがtrueなら偶数だけの配列 falseなら奇数だけの配列を返す
 */
const evenOrOdd = (array, bool) => array.filter(elem => {
  if (bool === true) {
    return Math.abs(elem) % 2 === 0;
  } else {
    return Math.abs(elem) % 2 === 1;
  }
});

// evenOrOdd([1, 2, 3, 4, 5], true); // [2, 4]
// evenOrOdd([0, 4, 36], false); // []
// evenOrOdd([-1, -2, 4, -5, -7], false); // [-1, -5, -7]

test(evenOrOdd([1, 2, 3, 4, 5], true), [2, 4]);
test(evenOrOdd([0, 4, 36], false), []);
test(evenOrOdd([-1, -2, 4, -5, -7], false), [-1, -5, -7]);

// 2
console.log("--- 2 ---");
// ここにコードを書きましょう
/**
 * 
 * @param {object} object 
 * @param {string or number} target //文字列または数値
 * @returns //targetにマッチする値を持つ全てのキーの新しい配列を返す
 */
const findKeys = (object, target) => {
  return Object.keys(object).filter((key) => object[key] === target)
};

// findKeys({ a: 1, b: 2, c: 6, d: 4, e: 2 }, 2); // ["b", "e"]
// findKeys({ 1: "h", b: "el", c: "hello", d: "hello", e: "o" }, "hello"); // ["c", "d"]

test(findKeys({ a: 1, b: 2, c: 6, d: 4, e: 2 }, 2), ["b", "e"]);
test(findKeys({ 1: "h", b: "el", c: "hello", d: "hello", e: "o" }, "hello"), ["c", "d"]);

// 3
console.log("--- 3 ---");
// ここにコードを書きましょう
/**
 * 
 * @param {array<string>} keyArray 
 * @param {array} valueArray 
 * @returns 
 */
const buildObject = (keyArray, valueArray) => {
  const result = {};
  for (let i = 0; i < keyArray.length; i++) {
    result[keyArray[i]] = valueArray[i];
  }
  return result;
};

// buildObject(["a", "b", "c"], [1, 2, 3]); // {"a": 1, "b": 2, "c": 3}
// buildObject(["cat", "dog", "duck"], ["にゃー", "わんわん", "がーがー"]); // {"cat": "にゃー", "dog": "わんわん", "duck": "がーがー"}
// buildObject(["cat", "dog", "duck"], [null, 0, NaN]); // {"cat": null, "dog": 0, "duck": NaN}
// buildObject(["abc", "def", "ghi"], [[0, 1, 2], [3, 4, 5], [6, 7, 8]]);  // {"abc": [0, 1, 2], "def": [3, 4, 5], "ghi": [6, 7, 8]}

test(buildObject(["a", "b", "c"], [1, 2, 3]), { "a": 1, "b": 2, "c": 3 }); // {"a": 1, "b": 2, "c": 3}
test(buildObject(["cat", "dog", "duck"], ["にゃー", "わんわん", "がーがー"]), { "cat": "にゃー", "dog": "わんわん", "duck": "がーがー" });
test(buildObject(["cat", "dog", "duck"], [null, 0, NaN]), { "cat": null, "dog": 0, "duck": NaN });
test(buildObject(["abc", "def", "ghi"], [[0, 1, 2], [3, 4, 5], [6, 7, 8]]), { "abc": [0, 1, 2], "def": [3, 4, 5], "ghi": [6, 7, 8] });

// 4
console.log("--- 4 ---");
// ここにコードを書きましょう
/**
 * 
 * @param {number} x 
 * @returns 
 */
const add = x => function (y) {
  return x + y;
};

const addTwo = add(2);
// addTwo(3); // 5
// addTwo(70); // 72

test(addTwo(3), 5);
test(addTwo(70), 72);

const addOneHundred = add(100);
// addOneHundred(3); // 103

test(addOneHundred(3), 103);

// 5
console.log("--- 5 ---");
function sayHello() {
  console.log("Hello");
}

function sayHelloAndName(name) {
  return "Hello, " + name;
}

const foo = sayHello();
const bar = sayHelloAndName("JavaScript");

console.log(foo);
console.log(bar);

// あなたの回答と、なぜそうなるのかの説明をここに記載してください
// 回答:Hello => undefined => Hello, JavaScriptの順
// 理由:上から順に実行され、foo => barの順にconsole.logされており、関数呼び出し演算子を含めて変数に代入されているため関数実行の順も一緒になっている
// 表示内容に関してはfooには関数sayHelloが代入されていてconsole.log("Hello")が中身にあり副作用として表示され,sayHelloは返り値がないのでundefinedが出る、barは関数sayHelloAndNameが代入され
// 引数にJavaScriptが送られ関数sayHelloAndNameの返り値が表示される

// 6
console.log("--- 6 ---");
console.log("別フォルダに記述");

// 7
console.log("--- 7 ---");
// ここにコードを書きましょう
/**
 * 
 * @param {array or object} collection 
 * @param {function} func 
 * @returns 
 */
const map = (collection, func) => {
  const result = [];
  if (Array.isArray(collection) === true) {
    Array.from(collection, elem => result.push(func(elem)));
  } else {
    Array.from(Object.values(collection), elem => result.push(func(elem)));
  }
  return result;
}

function addOne(num) {
  return num + 1;
}
// map([1, 2, 3], addOne); // [2, 3, 4]
// map({ a: 1, b: 2, c: 3 }, addOne); // [2, 3, 4]

test(map([1, 2, 3], addOne), [2, 3, 4]);
test(map({ a: 1, b: 2, c: 3 }, addOne), [2, 3, 4]);

// 8
console.log("--- 8 ---");
// ここにコードを書きましょう
/**
 * 
 * @param {string} str 
 * @param {string} word 
 * @returns 
 */
const changeMiddle = (str, word) => {
  const changeWord = str.split(" ");
  const wordPlace = Math.floor(changeWord.length / 2);
  changeWord[wordPlace] = word;
  return changeWord.join(" ");
};

// changeMiddle("I like cats", "love"); // "I love cats"
// changeMiddle("red green blue", "yellow"); // "red yellow blue"

test(changeMiddle("I like cats", "love"), "I love cats");
test(changeMiddle("red green blue", "yellow"), "red yellow blue");

// 9
console.log("--- 9 ---");
// ここにコードを書きましょう
/**
 * 
 * @param {array} array 
 * @returns 
 */
const countSomething = array => {
  let strCount = 0, boolCount = 0, numCount = 0;

  for (const elem of array) {
    if (typeof elem === "string") {
      strCount++;
    } else if (typeof elem === "boolean") {
      boolCount++;
    } else {
      numCount++;
    }
  }
  if (strCount > boolCount && strCount > numCount) {
    return `STRING COUNT: ${strCount}`;
  } else if (boolCount > strCount && boolCount > numCount) {
    return `BOOL COUNT: ${boolCount}`;
  } else {
    return `NUMBER COUNT: ${numCount}`;
  }
};

// countSomething(["a", "b", "c", true, false, 2]); // "STRING COUNT: 3"
// countSomething([true, true, false, true]); // "BOOL COUNT: 4"
// countSomething([true, true, 1, 0, 1, false, 1]); // "NUMBER COUNT: 4"

test(countSomething(["a", "b", "c", true, false, 2]), "STRING COUNT: 3");
test(countSomething([true, true, false, true]), "BOOL COUNT: 4");
test(countSomething([true, true, 1, 0, 1, false, 1]), "NUMBER COUNT: 4");

// 10
console.log("--- 10 ---");
// ここにコードを書きましょう
/**
 * 
 * @param {array or object} collection 
 * @param {console.log} action 
 */
const each = (collection, action) => {
  if (Array.isArray(collection) === true) {
    Array.from(collection, num => action(num));
  } else {
    Array.from(Object.values(collection), num => action(num));
  }
};

each({ a: 1, b: 2, c: 3 }, console.log);
each([4, 5, 6], console.log);

// 上記を実行すると下記を表示するはずです
// 1
// 2
// 3
// 4
// 5
// 6

// 11
console.log("--- 11 ---");
// ここにコードを書きましょう
/**
 * 
 * @param {function} funcA 
 * @param {function} funcB 
 * @returns 
 */
const compose = (funcA, funcB) => function (x) {
  return funcB(funcA(x));
};

function multiplyTwo(x) {
  return x * 2;
}

function addTen(x) {
  return x + 10;
}

const baz = compose(multiplyTwo, addTen);
// baz(5); // 20
// baz(100); // 210

test(baz(5), 20);
test(baz(100), 210);