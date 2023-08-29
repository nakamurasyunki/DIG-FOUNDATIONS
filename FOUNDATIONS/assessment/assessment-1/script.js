'use strict'
// 1行目に記載している 'use strict' は削除しないでください
// 課題
// 1
function greeting(name) {
  return "Hello, " + name + "!";
}

// テスト
console.log(greeting("Kana")); // => "Hello, Kana!"
console.log(greeting("Kimiko")); // => "Hello, Kimiko!"

// 2
function average(num1,num2) {
  return (num1 + num2) / 2;
}

// テスト
console.log(average(1, 2)); // => 1.5
console.log(average(100, 300)); // => 200

// 3
let actual;
let expected;

/**
 * @param {"Spring"|"Summer"|"Fall"|"Winter"} season - 現在の季節
 * @param {"warm"|"hot"|"cool"|"cold"} temp - 現在の気温
//  * @returns {"この季節の平均的な気温です"|"この季節には珍しい気温です"} 季節や気温に応じて変わる、気候に関する説明
 * @returns {"The temperature is normal for the season."|"The temperature is unusual for the season."} 季節や気温に応じて変わる、気候に関する説明
 */
function describeTheWeather(season,temp) {
  // ここにコードを書きましょう
  if (season === "Spring" && temp === "warm") {
    return "The temperature is normal for the season.";
    // return "この季節の平均的な気温です";
  } else if (season === "Summer" && temp === "hot") {
    return "The temperature is normal for the season.";
    // return "この季節の平均的な気温です";
  } else if (season === "Fall" && temp === "cool") {
    return "The temperature is normal for the season.";
    // return "この季節の平均的な気温です";
  } else if (season === "Winter" && temp === "cold") {
    return "The temperature is normal for the season.";
    // return "この季節の平均的な気温です";
  } else {
    return "The temperature is unusual for the season.";
    // return "この季節には珍しい気温です";
  }
}

// テスト
actual = describeTheWeather("Spring", "warm");
// expected = "この季節の平均的な気温です";
expected = "The temperature is normal for the season.";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = describeTheWeather("Spring", "cold");
// expected = "この季節には珍しい気温です";
expected = "The temperature is unusual for the season.";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// さらにテストを書いて、コードが正しいことを確認してください
actual = describeTheWeather("Summer", "hot");
// expected = "この季節の平均的な気温です";
expected = "The temperature is normal for the season.";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = describeTheWeather("Summer", "cool");
// expected = "この季節には珍しい気温です";
expected = "The temperature is unusual for the season.";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}actual = describeTheWeather("Fall", "cool");
// expected = "この季節の平均的な気温です";
expected = "The temperature is normal for the season.";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = describeTheWeather("Fall", "warm");
// expected = "この季節には珍しい気温です";
expected = "The temperature is unusual for the season.";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}actual = describeTheWeather("Winter", "cold");
// expected = "この季節の平均的な気温です";
expected = "The temperature is normal for the season.";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = describeTheWeather("winter", "hot");
// expected = "この季節には珍しい気温です";
expected = "The temperature is unusual for the season.";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}