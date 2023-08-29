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

// -- 1 --
/**
 * @param {Array<string>} friends - 友達の名前が入った配列
 * @returns {Array<string>} 友達の名前それぞれに `"Hello"` の挨拶が付け加わった文字列を要素に持つ配列
 */
// ここにコードを書きましょう
function sayHelloToFriends(friends) {
  const result = [];
  for (const friend of friends) {
    const greet = "Hello, " + friend + "!";
    result.push(greet);
  }
  return result;
}

const friends = ["Mario", "Luigi"];
test(sayHelloToFriends(friends), ["Hello, Mario!", "Hello, Luigi!"]);

// ---------------------
const obj1 = { a: "A" };
const obj2 = { a: "A", b: 2 };
const obj3 = { a: "A", b: 2, c: "C", d: true };
const obj4 = { a: "A", c: "C" };
// ---------------------

// -- 2 --
/**
 * @param {object} オブジェクト
 * @returns {{ [key: string]: string }} 引数で与えられたオブジェクトの、値が文字列であるキーと値のペアだけを持つ新しいオブジェクト。
 */
function filterObjectForStrings(object) {
  // ここにコードを書きましょう
  const result = {};
  for (const key in object) {
    const val = object[key];
    if (typeof val === "string") {
      result[key] = val;
    }
  }
  return result;
}

test(filterObjectForStrings(obj1), obj1); // 変化なし
test(filterObjectForStrings(obj2), obj1); // 値が 2 のペアは含まれていない
test(filterObjectForStrings(obj3), obj4); // 値が 2 や true のペアは含まれていない

// -- 3 --
/**
 * @param {Array<object>} arrayOfObjects - オブジェクトを要素に持つ配列
 * @returns {Array<{ [key: string]: string }>} 引数で与えられた配列内の各オブジェクトについて、値が文字列であるキーと値のペアのみを持つ新しいオブジェクトを作成し、そのオブジェクトを含む新しい配列を返り値として返す。
 */
function filterArrayForStrings(arrayOfObjects) {
  // ここにコードを書きましょう.
  const result = [];
  for (const obj of arrayOfObjects) {
    // どこかで関数 `filterObjectForStrings` を呼びましょう
    result.push(filterObjectForStrings(obj));
  }
  return result;
}

test(filterArrayForStrings([obj1]), [obj1]); // 変化なし

// 2 番目の要素から値が 2 のペアは除くこと
test(filterArrayForStrings([obj1, obj2]), [obj1, obj1]);

test(filterArrayForStrings([obj3, obj2, obj1]), [obj4, obj1, obj1]);

// -- 4 --
const names = ["ichi", "ni", "san", "yon"];

// i が 0 ~ 3 までループする
for (let i = 0; i < 4; i++) {
  // j が配列の要素数( 4 )なので 0 ~ 3 までループする
  for (let j = 0; j < names.length; j++) {
    // k が 1 ~ 2 までループする
    for (let k = 1; k < 3; k++) {
      console.log(names[j]);
    }
  }
}

// i が 0 ~ 3 まで４回ループする
// j が配列の要素数( 4 )なので 0 ~ 3 まで４回ループする
// k が 1 ~ 2 まで２回ループする

// 予想
// ichi,ichi,ni,ni,san,san,yon,yonが４回分

// 説明
// namesの一つの要素を２回出力して、それを要素分(４回)繰り返して、さらに i の４回分繰り返しているので
// 同じ要素が２つで４回分繰り返される

// console.clear()
// -- 5 --
for (let i = 0; i < 2; i++) {
  console.log("a: " + i);
  for (let i = 0; i < 2; i++) {
    console.log("b: " + i);
    for (let i = 0; i < 2; i++) {
      console.log("c: " + i);
    }
  }
}

// 予想
// a:0,b:0,c:0,c:1,b:1,c:0,c:1,a:1,b:0,c:0,c:1,b:1,c:0,c:1,

// 説明
// a ⇒ b ⇒ c ⇒ c ⇒ b ⇒ c ⇒ c ⇒ a ⇒ b ⇒ c ⇒ c ⇒ b ⇒ c ⇒ c ⇒ a
// 0 ⇒ 0 ⇒ 0 ⇒ 1 ⇒ 1 ⇒ 0 ⇒ 1 ⇒ 1 ⇒ 0 ⇒ 0 ⇒ 1 ⇒ 1 ⇒ 0 ⇒ 1 ⇒ 1