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
// カリー化

function example(name) {
  function greet(strGreet) {
    return strGreet + name;
  }
  return greet;
}

// const exampleB = numA => {
//   return numB => {
//     return numC => {
//       return (numA + numB) * numC;
//     }
//   }
// }

// (numA + numB) * numC
function exampleB(numA) {
  return function (numB) {
    return function (numC) {
      return (numA + numB) * numC;
    }
  }
}

exampleB(2)(5)(10);
console.log(exampleB(2)(5)(10));

const apple = 2;
const banana = 5;
const cherry = 8;

function buyFruits(numA) {
  return function (numB) {
    return function (numC) {
      return (numA + numB) * numC;
    }
  }
}

const bananaCherry = buyFruits(banana)(cherry);

bananaCherry(5);
bananaCherry(10);

function skippingS(array) {
  return array.map((elem, index) => {
    if (index % 2 === 0) {
      return `${elem}S`;
    }
    return elem;
  })
}

test(skippingS(["a", "b", "c", "d", "e", "f", "g"]), ["aS", "b", "cS", "d", "eS", "f", "gS"]);
test(skippingS([3, 4, 5, 6, 7]), ["3S", 4, "5S", 6, "7S"]);
test(skippingS(["r"]), ["rS"]);