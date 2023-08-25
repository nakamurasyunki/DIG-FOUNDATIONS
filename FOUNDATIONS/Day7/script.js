'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// .pop()
// .shift()
// .unshift()
// .concat()

// 演習
// const instructors = ["Mori", "Yamazaki", "Tanaka", "Suzuki"];

// 1
// console.log(instructors[instructors.length-1]);

// 2
// const numbers = [1, 2, 3];

// console.log(numbers[2]); // 3
// console.log(numbers[0]); // 1
// console.log(numbers[numbers.length - 1]); // 3

// 次で使用しているメソッドやプロパティについて、分からないときはドキュメント（MDN）で調べてみましょう！

// console.log(numbers.pop() + numbers.pop()); // 5

// numbers.unshift(4, 5, 6);
// console.log(numbers); // 4,5,6,1

// console.log(numbers.shift()); // 4

// console.log(numbers.length); // 3

// numbers.push(5);
// numbers.push(6);

// console.log(numbers.pop() * numbers.pop()); // 30
// console.log(numbers[0]); // 5

// 3
// const numbers = [
//   [0, 1, 2, 3],
//   ["zero", "one", "two", "three"],
//   ["rei", "ichi", "ni", "san"],
// ];

// console.log(numbers[2]); // ["rei", "ichi", "ni", "san"]
// console.log(numbers[1][1]); // one
// console.log(numbers[0][2]); // 2
// console.log(numbers[numbers.length - 1][0]); // rei
// console.log(numbers[2].length); // 4
// console.log(numbers.pop()); // ["rei", "ichi", "ni", "san"]
// console.log(numbers[0].push(4)); // 5
// console.log(numbers.length); // 2

// 4
// const string = "hello";
// console.log(string.length); // 5
// console.log(string[0]); // h
// console.log(string[3]); // l
// console.log(string[string.length - 1]); // o