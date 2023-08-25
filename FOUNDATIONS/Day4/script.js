'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// ウォーミングアップ
// 1
// function isMultipleOfThree(num) {
//     return num % 3 === 0;
// }

// // テスト
// console.log(isMultipleOfThree(6)); // => true
// console.log(isMultipleOfThree(10)); // => false

// 2
// function isMultipleOf(num1,num2) {
//     return num1 % num2 === 0;
// }

// // テスト
// console.log(isMultipleOf(6, 3)); // => true
// console.log(isMultipleOf(10, 4)); // => false

// 4
function biggerNumber(numOne, numTwo) {
	if (numOne > numTwo){
		return "The first argument is bigger.";
	}else {
		return "The second argument is bigger.";
	}
}
console.log(biggerNumber(4, 3)); // => 'The first argument is bigger.' と表示されるようにする
console.log(biggerNumber(3, 4)); // => 'The second argument is bigger.' と表示されるようにする。