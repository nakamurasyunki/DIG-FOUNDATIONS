'use strict'
// 1行目に記載している 'use strict' は削除しないでください

function test(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("OK! Test PASSED.");
  } else {
    console.error("Test FAILED. Try again!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
    console.trace();
  }
}

// 1
// ここにコードを書きましょう
/**
 * 
 * @param {*} array 
 * @returns 
 */
const doTheThing = array => array.filter(function (elem) {
  return elem <= 5;
}).map(function (elem) {
  return elem * elem;
});

test(doTheThing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 4, 9, 16, 25]);
test(doTheThing([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [25, 16, 9, 4, 1]);

// 2
// ここにコードを書きましょう
const result = [];
const putItemInRefrigerator = putDrink => result.push(putDrink);
// function removeItemFromRefrigerator(drink) {
//   return result.filter(function (elem) {
//     return elem !== drink;
//   })
// }
// const removeItemFromRefrigerator = removeDrink => result.filter(function (elem) {
//   if (removeDrink === elem) {
//     return result.splice(result.indexOf(removeDrink), 1);
//   }
//   return result;
// })
const removeItemFromRefrigerator = removeDrink => {
  if (result.includes(removeDrink)) {
    result.splice(result.indexOf(removeDrink), 1);
  }
}
const getItemsInRefrigerator = () => result;

test(getItemsInRefrigerator(), []);

putItemInRefrigerator("milk");
test(getItemsInRefrigerator(), ["milk"]);

putItemInRefrigerator("juice");
test(getItemsInRefrigerator(), ["milk", "juice"]);

removeItemFromRefrigerator("milk");
test(getItemsInRefrigerator(), ["juice"]);

removeItemFromRefrigerator("milk");
console.log(result);
test(getItemsInRefrigerator(), ["juice"]);
