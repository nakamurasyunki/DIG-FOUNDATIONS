'use strict'
// 1行目に記載している 'use strict' は削除しないでください

const array = [1, 2, 3, 4, 5];

// 分割代入　配列
const [x, y, z] = array;

// if (x === 1) {
//   console.log("test passed!");
// } else {
//   console.log("test failed");
//   console.log("x: ", x);
// }

console.log(x);
console.log(y);
console.log(z);

const obj = { a: 1, b: "hello" };

// 分割代入　Object
const { a, b } = obj;

// if (a === 1) {
//   console.log("test passed!");
// } else {
//   console.log("test failed");
//   console.log("a: ", a);
// }

console.log(a);
console.log(b);

// switch分