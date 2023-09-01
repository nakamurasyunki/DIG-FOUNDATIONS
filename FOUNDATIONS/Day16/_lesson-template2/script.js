'use strict'
// 1行目に記載している 'use strict' は削除しないでください

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

/**
 * @param {{ [key: string]: number }} objects
 * @returns {{ [key: string]: number }} 与えられたオブジェクトと同じ値を持つが、数値には 1 が足されたオブジェクト
 */

function incrementNumbers(objects) {
  const result = {};
  for (const key in objects) {
    let val = objects[key];
    if (typeof val === "number") {
      val += 1;
    }
    result[key] = val;
  }
  console.log(result);
  return result;
}

test(incrementNumbers({ a: 1, b: 2, 1: 3, d: "hello" }), {
  a: 2,
  b: 3,
  1: 4,
  d: "hello",
});
test(incrementNumbers({ a: 2, b: 3, 1: 4, d: "hello" }), {
  a: 3,
  b: 4,
  1: 5,
  d: "hello",
});