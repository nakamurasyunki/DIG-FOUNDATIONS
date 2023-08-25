'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// 2
// console.log(1100 >= 99); // => true を表示
// console.log(1 >= 21); // => false を表示
// console.log(62 !== "true"); // => true を表示
// console.log("5" > 5); // => false を表示
// console.log("6" !== "six"); // => true を表示

// 3
// console.log(2 + 3 * 10 < 50); //trueにする

// 4
// function isEqual(valueOne, valueTwo) {
//     return valueOne == valueTwo;
// }

// console.log(isEqual("1", 1));

// 5
// function isGreaterThan(valueOne, valueTwo) {
//     return valueOne > valueTwo;
// }

// console.log(isGreaterThan(10,5));

// 6
// function isOfAge(age) {
//     return age >= 20 ;
// }

// console.log(isOfAge(21));

// 中級演習
// 1
// function isOfAge(age) {
//     if (age >= 20){
//         return true + ":飲酒可能年齢です";
//     }else{
//         return false + ":飲酒可能年齢ではありません"
//     }
// }

// console.log(isOfAge(19));

// 2
// function isEven(n) {
//     return (n % 2) === 0;
// }

// console.log(isEven(19));

// 3
// function validCredentials(username,password) {
//     return username.length === 7, password.length === 8;
// }

// console.log(validCredentials("1234567","12345678"));

// 応用演習
// 1
// function isEven(n) {
//     return Number.isInteger(n / 2);
// }

// console.log(isEven(20));

// 2
// function getGreaterValue(num1,num2) {
//     if (num1 > num2) {
//         return num1;
//     }else {
//         return num2
//     }
// }

// console.log(getGreaterValue(10, 15)); // 15 を表示
// console.log(getGreaterValue(15, 10)); // 15 を表示s

// 3
// function getGreatestValue(num1,num2,num3,num4,num5) {
//     if (Math.max(num1,num2,num3,num4,num5)){
//         return Math.max(num1,num2,num3,num4,num5)
//     }else if (num1 > num2) {
//         return num1;
//     }else if (num2 > num1) {
//         return num2;
//     }
// }

// console.log(getGreatestValue(10, 15)); // 15 を表示
// console.log(getGreatestValue(15, 10)); // 15 を表示
// console.log(getGreatestValue(1, 2, 3, 4, 5)); // 5 を表示
// console.log(getGreatestValue(1, 10, 3, 4, 5)); // 10 を表示

// ナイトメア演習
// 1
function flatten(array) {
    const list = array;
    let list2;
    list.forEach(elm => {
        list2 = elm;
        list2.forEach(elm => {
            console.log(elm)
        })
    })
}

console.log(
    flatten([
    [1, 2, 3],
    [4, 5, 6],
    ])
); // [1, 2, 3, 4, 5, 6]
console.log(flatten([1, 2, 3, [4, 5, 6]])); // [1, 2, 3, 4, 5, 6]
console.log(flatten([[1], [2], [3], [4, 5, 6]])); // [1, 2, 3, 4, 5, 6]