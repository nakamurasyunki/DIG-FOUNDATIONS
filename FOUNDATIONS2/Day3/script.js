'use strict'
// 1行目に記載している 'use strict' は削除しないでください

console.log("--- 比較入門 ---");
console.log("--- 基礎演習 ---");
console.log("--- 1 ---");
"true" == true;
// 上の例では使っていますが、基本的に等価演算子 ( == ) は使わず、必ず厳密等価演算子 ( === ) を使うようにしましょう。
"true" === true;
3 >= 3;
3 !== 4;

console.log("--- 2 ---");
console.log(1100 > 99) // => true を表示

console.log(1 === 21) // => false を表示

console.log(62 !== 12) // => true を表示

console.log("5" === 5) // => false を表示

console.log("6" !== "six") // => true を表示

console.log("--- 3 ---");
console.log(2 + 3 * 10 < 50);

console.log("--- 4 ---");
function isEqual(valueOne, valueTwo) {
  return valueOne == valueTwo;
}

console.log(isEqual(2, "2"));

console.log("--- 5 ---");
function isGreaterThan(valueOne, valueTwo) {
  if (valueOne > valueTwo) {
    return true;
  } else if (valueOne < valueTwo) {
    return false;
  }
}

console.log(isGreaterThan(5, 10));
console.log(isGreaterThan(10, 5));

console.log("--- 6 ---");
const isOfAge = age => {
  if (age >= 20) {
    // return true;
    return `成人です。飲酒できます。飲みすぎに注意`; //中級[1]
  } else {
    // return false;
    return `未成年です。飲酒できません。お酒は20歳から`; //中級[1]
  }
};

console.log("age:20", isOfAge(20));
console.log("age:16", isOfAge(16));

console.log("===============");
console.log("--- 中級演習 ---");
console.log("--- 1 ---");

console.log("--- 2 ---");
const isEven = n => {
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

console.log("n:20", isEven(20));
console.log("n:15", isEven(15));

console.log("--- 3 ---");
const validCredentials = (username, password) => {
  if (username.length === 7 && password.length >= 8) {
    return true;
  } else {
    return false;
  }
};

console.log("name:1572774,pass:123456789", validCredentials("1572774", "123456789"));
console.log("name:1572774,pass:1234567", validCredentials("1572774", "1234567"));

console.log("===============");
console.log("--- 応用演習 ---");
console.log("--- 1 ---");
const isEven2 = n => {
  if (Number.isInteger(n / 2)) {
    return true;
  }
  return false;
};

console.log("n:20", isEven2(20));
console.log("n:15", isEven2(15));

console.log("--- 2 ---");
const getGreaterValue = (num1, num2) => Math.max(num1, num2);

console.log(getGreaterValue(10, 15)); // 15 を表示
console.log(getGreaterValue(15, 10)); // 15 を表示

console.log("--- 3 ---");
const getGreatestValue = (...args) => Math.max(...args);

console.log(getGreatestValue(10, 15)); // 15 を表示
console.log(getGreatestValue(15, 10)); // 15 を表示
console.log(getGreatestValue(1, 2, 3, 4, 5)); // 5 を表示
console.log(getGreatestValue(1, 10, 3, 4, 5)); // 10 を表示

console.log("===============");
console.log("--- ナイトメア ---");
console.log("--- 1 ---");
const flatten = arrays => {
  const result = [];
  arrays.forEach(array => {
    if (typeof array === "number") {
      result.push(array);
    } else {
      array.forEach(elem => result.push(elem));
    }
  });
  return result;
};

console.log(
  flatten([
    [1, 2, 3],
    [4, 5, 6],
  ])
); // [1, 2, 3, 4, 5, 6]
console.log(flatten([1, 2, 3, [4, 5, 6]])); // [1, 2, 3, 4, 5, 6]
console.log(flatten([[1], [2], [3], [4, 5, 6]])); // [1, 2, 3, 4, 5, 6]