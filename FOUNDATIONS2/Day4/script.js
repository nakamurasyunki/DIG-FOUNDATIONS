'use strict'
// 1行目に記載している 'use strict' は削除しないでください

console.log("--- 基礎演習 ---");
console.log("--- 1 ---");
function simplePasswordLock(password) {
  if (password === "password") {
    return "パスワードが合いました。ようこそ！";
  }
  return "パスワードが違います。もう一度入力してください。";
}

console.log("qwerty:", simplePasswordLock("qwerty")); // => "パスワードが違います。もう一度入力してください。" と表示されるようにする。
console.log("password:", simplePasswordLock("password")); // => "パスワードが合いました。ようこそ！" と表示されるようにする。

console.log("--- 2 ---");
console.log("Hello".length);
console.log("The length of this string is 31".length);
console.log(" spaces! ".length);

console.log("--- 3 ---");
const isItToolLong = str => {
  if (str.length > 10) {
    return true;
  } else {
    return false;
  }
};

console.log("Hello:", isItToolLong("Hello"));
console.log("My name is Shunki!:", isItToolLong("My name is Shunki!"));

console.log("--- 4 ---");
function biggerNumber(numOne, numTwo) {
  if (numOne > numTwo) {
    return "The first argument is bigger.";
  } else if (numOne < numTwo) {
    return "The second argument is bigger.";
  } else {
    return "The arguments is equal";
  }
}

console.log(biggerNumber(4, 3)); // => 'The first argument is bigger.' と表示されるようにする。
console.log(biggerNumber(3, 4)); // => 'The second argument is bigger.' と表示されるようにする。
console.log(biggerNumber(4, 4)); // => 'The second argument is bigger.' と表示されるようにする。

console.log("--- 5 ---");
function printDataType(data) {
  if (typeof data === "number") {
    console.log("This is a number.");
  } else if (typeof data === "string") {
    console.log("This is a string.");
  } else if (typeof data === "boolean") {
    console.log("This is a boolean.");
  } else {
    console.log("This is a not a string, boolean, or number.");
  }
}

printDataType(42); // => "This is a number." が表示されるようにする。
printDataType("Hello!"); // => "This is a string." が表示されるようにする。
printDataType(true); // => "This is a boolean." が表示されるようにする。
printDataType(undefined); // => "This is not a string, boolean, or number." が表示されるようにする。

console.log("--- 6 ---");
const greeting = (name, lang) => {
  if (lang === "Japanese") {
    return `Konnichiwa, ${name}!`;
  } else if (lang === "English") {
    return `Hello, ${name}!`;
  } else if (lang === "German") {
    return `Gutentag, ${name}!`;
  } else {
    return `Hola, ${name}!`;
  }
};

console.log(greeting("Harry Potter", "Japanese")); // => "Konnichiwa, Harry Potter!" が表示されるようにする。
console.log(greeting("Harry Potter", "English")); // => "Hello, Harry Potter!" が表示されるようにする。
console.log(greeting("Harry Potter", "German")); // => "Gutentag, Harry Potter!" が表示されるようにする。
console.log(greeting("Harry Potter", "Spanish")); // => "Hola, Harry Potter!" が表示されるようにする。

console.log("--- 7 ---");
const isEven = num => {
  if (typeof num === "number") {
    if (num % 2 === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return "This is not a number.";
  }
};

console.log(isEven(4)); // => true が表示されるようにする。
console.log(isEven(7)); // => false が表示されるようにする。
console.log(isEven("7")); // => false が表示されるようにする。

console.log("===============");
console.log("--- 中級演習 ---");
console.log("--- 1 ---");
const isOdd = num => {
  if (typeof num === "number") {
    if (num % 2 === 1) {
      return true;
    } else {
      return false;
    }
  } else {
    return "数値じゃありません";
  }
};

console.log(isOdd(2)); //false
console.log(isOdd(3)); //true
console.log(isOdd("2")); //"数値じゃありません"

console.log("--- 2 ---");
const isPositive = num => {
  if (typeof num === "number") {
    if (Math.sign(num) === 1) {
      return true;
    } else if (Math.sign(num) === -1) {
      return false;
    }
  } else {
    return "数値じゃありません";
  }
};

console.log(isPositive(-2)); //false
console.log(isPositive(3)); //true
console.log(isPositive("2")); //"数値じゃありません"

console.log("--- 3 ---");
const isNegative = num => {
  if (typeof num === "number") {
    if (Math.sign(num) === 1) {
      return true;
    } else if (Math.sign(num) === -1) {
      return false;
    }
  } else {
    return "数値じゃありません";
  }
};

console.log(isNegative(2)); //false
console.log(isNegative(-3)); //true
console.log(isNegative("2")); //"数値じゃありません"

console.log("--- 4 ---");
const isZero = num => {
  if (typeof num === "number") {
    if (num === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return "数値じゃありません";
  }
};

console.log(isZero(2)); //false
console.log(isZero(0)); //true
console.log(isZero("2")); //"数値じゃありません"

console.log("--- 5 ---");

console.log("--- 6 ---");

console.log("===============");
console.log("--- 応用演習 ---");
console.log("--- 1 ---");