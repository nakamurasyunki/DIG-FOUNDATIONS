'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// ファイル全体で使用する tdd 変数を宣言します
let expected;
let actual;

// 基礎演習
// 1
// const average = (x, y) => (x + y) / 2;

// expected = 1; // 期待するテスト結果
// actual = average(1, 1); // テストする式

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }

// expected = 1.5; // 期待するテスト結果
// actual = average(1, 2); // テストする式

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }

// expected = 2.5;
// actual = average(2, 3);

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }

// expected = 3;
// actual = average(2, 4);

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
// const isPositive = thing => thing > 0;

// expected = true; // 期待するテスト結果
// actual = isPositive(1); // テストする式

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
// expected = false; // 期待するテスト結果
// actual = isPositive(-1); // テストする式

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }

// expected = false; // 期待するテスト結果
// actual = isPositive(0); // テストする式

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
const areaOfTriangle = (base, height) => base * height / 2;

expected = 7.5; // 期待するテスト結果
actual = areaOfTriangle(3, 5); // テストする式

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

// さらにテストを書きましょう。