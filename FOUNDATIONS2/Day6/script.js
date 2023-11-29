'use strict'
// 1行目に記載している 'use strict' は削除しないでください
let expected;
let actual;

console.log("--- 続・条件分岐 ---");

console.log("--- 基礎演習 ---");
console.log("--- 1 ---");
/**
 * @param {number} age - 年齢
 * @returns {boolean} 与えられた年齢がティーンエイジャー（13 歳から 19 歳までの間：「thirTEEN」から「nineTEEN」）かどうか
 */
function isTeenager(age) {
  // ここにコードを書きましょう.
  if (age >= 13 && age <= 19 && typeof age === "number") {
    return true;
  } else if (typeof age === "number") {
    return false;
  } else {
    return "無効です！与えられた年齢は数字ではありません！";
  }
}

actual = isTeenager(3);
expected = false;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = isTeenager(14);
expected = true;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// さらにテストを書いて、コードが正しいことを確認してください。

console.log("--- 2 ---");
actual = isTeenager("Hello!");
expected = "無効です！与えられた年齢は数字ではありません！";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = isTeenager(true);
expected = "無効です！与えられた年齢は数字ではありません！";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = isTeenager();
expected = "無効です！与えられた年齢は数字ではありません！";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

console.log("--- 3 ---");
/**
 * @param {string} name - 人の名前
 * @param {boolean} title - 名前に"san" を付ける場合は true　何もつけない場合は false
 * @param {boolean} greet - "Hello" なら true　"Goodbye" なら false
 * @returns {string} 与えられた引数に応じた適切な挨拶文

 */
// ここにコードを書きましょう.
const anotherGreeting = (name, title, greet) => {
  if (typeof name === "string" && typeof title === "boolean" && typeof greet === "boolean") {
    if (title && greet) {
      return `Hello, ${name}-san.`;
    } else if (!title && !greet) {
      return `Goodbye, ${name}!`;
    } else if (!title && greet) {
      return `Hello, ${name}!`;
    } else {
      return `Goodbye, ${name}-san.`;
    }
  }
  return "無効な入力値です！";
};

actual = anotherGreeting("Mary", true, true);
expected = "Hello, Mary-san.";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = anotherGreeting("Mary", false, true);
expected = "Hello, Mary!";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = anotherGreeting("Felix", true, false);
expected = "Goodbye, Felix-san.";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// さらにテストを書いて、コードが正しいことを確認してください。

console.log("--- 中級演習 ---");
console.log("--- 1 ---");
actual = anotherGreeting(true, false, true);
expected = "無効な入力値です！";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = anotherGreeting("Sam", true, 0);
expected = "無効な入力値です！";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

console.log("--- 2 ---");
/**
 * @param {number} score - 0 以上 100 以下の点数（スコア）
 * @returns {"A"|"B"|"C"|"D"|"F"} 点数に応じた成績（グレード）
 */

const getGrade = score => {
  if (score === 0 || score >= 101) {
    return "無効な点数です。";
  } else if (score >= 90 && score <= 100) {
    return "A";
  } else if (score >= 80 && score <= 89) {
    return "B";
  } else if (score >= 70 && score <= 79) {
    return "C";
  } else if (score >= 60 && score <= 69) {
    return "D";
  } else if (score <= 59) {
    return "F";
  }
}

actual = getGrade(95);
expected = "A";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = getGrade(85);
expected = "B";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = getGrade(75);
expected = "C";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = getGrade(65);
expected = "D";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = getGrade(55);
expected = "F";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// さらにテストを書いて、コードが正しいことを確認してください

console.log("--- 3 ---");
actual = getGrade(101);
expected = "無効な点数です。";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// さらにテストを書いて、コードが正しいことを確認してください

console.log("--- 4 ---");
/**
 * @param {"A"|"B"|"C"|"D"|"F"} grade - 成績（グレード）
 * @returns {number} 各成績における最高点（ベストスコア）
 */

const getBestScore = grade => {
  if (grade === "A") {
    return 100;
  } else if (grade === "B") {
    return 89;
  } else if (grade === "C") {
    return 79;
  } else if (grade === "D") {
    return 69;
  } else if (grade === "F") {
    return 59;
  } else {
    return "無効な成績です。";
  }
};

actual = getBestScore("A");
expected = 100;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = getBestScore("B");
expected = 89;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// さらにテストを書いて、コードが正しいことを確認してください

console.log("--- 5 ---");
actual = getBestScore("恐竜ってすばらしい");
expected = "無効な成績です。";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = getBestScore(100);
expected = "無効な成績です。";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// さらにテストを書いて、コードが正しいことを確認してください

console.log("--- 応用演習 ---");
console.log("--- 1 ---");
/**
 * @param {boolean} bool1 - １つめの被演算子
 * @param {boolean} bool2 - ２つめの被演算子
 * @returns {boolean} ２つの被演算子を与えられた順番のまま || で評価したときと同じ結果
 */
// ここにコードを書きましょう
// const or = (bool1, bool2) => {
//   if (bool1 && bool2) {
//     return true;
//   } else if ((!bool1 && bool2)) {
//     return true;
//   } else if (bool1 && !bool2) {
//     return true;
//   } else if (!(bool1 && bool2)) {
//     return false;
//   }
// };

const or = (bool1, bool2) => {
  if (bool1) {
    return bool1;
  } else if (bool2) {
    return bool2;
  } else {
    return bool1;
  }
};

actual = or(true, true);
expected = true;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = or(true, false);
expected = true;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = or(false, false);
expected = false;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = or(false, true);
expected = true;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}
// さらにテストを書いて、コードが正しいことを確認してください
actual = or("bananas", false);
expected = "bananas";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = or("", "bananas");
expected = "bananas";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}
console.log("--- 2 ---");
/**
 * @param {any} bool1 - 1 つめの被演算子
 * @param {any} bool2 - 2 つめの被演算子
 * @returns {any} 2 つの被演算子を与えられた順番のまま && で評価したときと同じ結果
 */
// ここにコードを書きましょう
const and = (bool1, bool2) => {
  if (!bool1) {
    return bool1;
  } else if (!bool2) {
    return bool2;
  } else {
    return bool1;
  }
};

actual = and(true, true);
expected = true;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = and(true, false);
expected = false;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// さらにテストを書いて、コードが正しいことを確認してください
actual = and("bananas", false);
expected = false;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = and("", "bananas");
expected = "";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

console.log("--- 関数（Functions）, 比較（Comparisons）, 条件分岐（Conditionals） ---");
console.log("--- 基礎演習 ---");
console.log("--- 1 ---");
/**
 * @param {string} str - テストの対象となる文字列
 * @param {number} num - 確認したい文字数
 * @returns {any} 与えられた文字列の長さが確認したい文字数より長いかどうか
 */
// ここにコードを書きましょう
const isLongerThan = (str, num) => {
  if (typeof str !== "string") {
    return "Invalid input.";
  } else if (str.length > num) {
    return true;
  } else {
    return false;
  }
};

actual = isLongerThan("three", 3);
expected = true;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = isLongerThan("three", 5);
expected = false;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = isLongerThan(3, 5);
expected = "Invalid input.";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}


console.log("--- 2 ---");
/**
 * @param {number} num - テストの対象となる数値
 * @returns {boolean} 与えられた数値が奇数かどうかを表すブーリアン
 */
// ここにコードを書きましょう
const isOddWithoutIf = num => num % 2 === 1;

actual = isOddWithoutIf(3);
expected = true;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = isOddWithoutIf(4);
expected = false;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

console.log("--- 3 ---");
/**
 * @param {number} num - 数値（0-10）。その名前がアルファベットの形で返ることになる
 * @returns {"zero"|"one"|"two"|"three"|"four"|"five"|"six"|"seven"|"eight"|"nine"|"ten"} 与えられた数値をアルファベットで記した時の名前
 */
// ここにコードを書きましょう
const numberStr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];

const getSimpleNumberName = num => numberStr[num];

actual = getSimpleNumberName(0);
expected = "zero";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = getSimpleNumberName(2);
expected = "two";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = getSimpleNumberName(10);
expected = "ten";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = getSimpleNumberName(7);
expected = "seven";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// さらにテストを書いて、コードが正しいことを確認してください

console.log("--- 4 ---");
/**
 * @param {number} num - 正多角形の辺の数 (3-8)
 * @returns {"triangle"|"square"|"pentagon"|"hexagon"|"heptagon"|"octagon"} 与えられた数の辺を持つ正多角形の英語名
 */
// ここにコードを書きましょう
const polygonList = ["triangle", "square", "pentagon", "hexagon", "heptagon", "octagon"];

const getPolygonName = num => polygonList[num - 3];

actual = getPolygonName(3);
expected = "triangle";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// さらにテストを書いて、コードが正しいことを確認してください

console.log("--- 中級演習 ---");
console.log("--- 1 ---");
/**
 * @param {1|2|3|4|5|6|7|8|9|10|11|12} hour - 時 (12時間制)
 * @param {number} min - 分
 * @param {"AM"|"PM"} time - "AM" または "PM"
 * @returns {"morning"|"afternoon"|"evening"|"night"} 大まかな「時間帯」
 */
// ここにコードを書きましょう
const getTimeOfDay = (hour, min, time) => {
  if (time === "AM") {
    if (hour >= 4 && hour < 12) {
      return "morning";
    } else if (hour <= 3)
      return "night";
  } else if (time === "PM") {
    if (hour === 12 || hour < 5) {
      return "afternoon";
    } else if (hour >= 5) {
      if (hour <= 7) {
        return "evening";
      } else if (hour <= 8 && min < 30) {
        return "evening";
      } else if (hour >= 8 && hour < 12 && min >= 30) {
        return "night";
      }
    }
  }
};

actual = getTimeOfDay(4, 0, "AM");
expected = "morning";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = getTimeOfDay(3, 59, "AM");
expected = "night";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = getTimeOfDay(3, 59, "PM");
expected = "afternoon";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = getTimeOfDay(7, 30, "PM");
expected = "evening";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = getTimeOfDay(11, 59, "PM");
expected = "night";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// さらにテストを書いて、コードが正しいことを確認してください。

console.log("--- 応用演習 ---");
console.log("--- 1 ---");

console.log("--- ナイトメア ---");
console.log("--- 1 ---");