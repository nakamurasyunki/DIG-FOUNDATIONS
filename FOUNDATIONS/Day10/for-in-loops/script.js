'use strict'
// 1行目に記載している 'use strict' は削除しないでください

let actual;
let expected;

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

// const hellos = {
//   English: "Hello",
//   Japanese: "Konnichiwa",
//   German: "Hallo",
//   Spanish: "Hola",
//   Arabic: "Ahlan wa sahlan",
//   Chinese: "Nihao",
// };

// /*
//  * @returns {undefined} この関数は挨拶をコンソールに表示するだけで、返り値は必要ありません。
//  */

// function sayHellos() {
//   for (const key in hellos) {
//     const val = hellos[key];
//     console.log(val);
//   }
// }

// sayHellos(); // 実際にこの関数を呼び出すと、以下のようにコンソールに表示されることを確認しましょう。
// // "Hello"
// // "Konnichiwa"
// // "Hallo"
// // "Hola"
// // "Ahlan wa sahlan"
// // "Nihao"

// /**
//  * @param {object} ???
//  * @returns {Array<string>} 与えられたオブジェクトのすべてのキーが入った配列
//  */

// function getKeys(objects) {
//   const result = [];
//   for (const key in objects) {
//     result.push(key);
//   }
//   return result;
// }

// const object1 = { a: 1, b: 2, c: "hello" };
// const object2 = { 1: "a", 2: "b", hello: "c" };

// test(getKeys(object1), ["a", "b", "c"]);
// test(getKeys(object2), ["1", "2", "hello"]);

// /**
//  * @param {object} ???
//  * @returns {Array<any>} 与えられたオブジェクトのすべての値が入った配列
//  */
// function getValues(objects) {
//   const result = [];
//   for (const key in objects) {
//     const val = objects[key];
//     result.push(val);
//   }
//   return result;
// }

// test(getValues(object1), [1, 2, "hello"]);
// test(getValues(object2), ["a", "b", "c"]);

// function printAllValues(object) {
//   for (const key in object) {
//     console.log(object[key]);
//   }
// }

// const myObject = { foo: 1, bar: 2, key: 3, delta: 4, lee: 5 };

// printAllValues(myObject); // 1 2 3 4 5 と順番に表示されたら成功です！

// /**
//  * @param {object} オブジェクト。ただし値はすべて異なるものとする。
//  * @returns {object} 与えられたオブジェクトのキーと値を入れ替えた、新しいオブジェクト
//  */

// function swapPairs(objects) {
//   const result = {};
//   for (const key in objects) {
//     const val = objects[key];
//     result[val] = key;
//   }
//   return result;
// }

// const object3 = { a: 1, b: 2, c: 3, d: 4 };
// const object4 = { 1: "a", 2: "b", 3: "c", 4: "d" };

// test(swapPairs(object3), { 1: "a", 2: "b", 3: "c", 4: "d" });
// test(swapPairs(object4), { a: "1", b: "2", c: "3", d: "4" });

// // 配列で for...in ループを使用することはできるでしょうか。
// // 簡単な配列を作って、実際に試してみてください。

// for (const val in [11, 22, 33]) {
//   console.log(val); // index番号
// }

// for (const val of [11, 22, 33]) {
//   console.log(val);
// }

// // オブジェクトで for...of ループを使用することはできるでしょうか。
// // 簡単なオブジェクトを作って、実際に試してみてください。🤔
// for (const val in { a: 11, b: 22, c: 33 }) {
//   console.log(val);
// }

// for (const val of { a: 11, b: 22, c: 33 }) {
//   console.log(val); // エラー　dictにofは使えない
// }

// function getFirstObjectValues(lists) {
//   const result = [];

//   for (const key in lists[0]) {
//     const val = lists[0][key];
//     result.push(val);
//   }
//   return result;
// }

// test(getFirstObjectValues(collection), [1, 2]);
// test(getFirstObjectValues(collection.slice(1)), [3, 3]);

// /**
//  * @param {Array<object>} オブジェクトを要素に持つ配列
//  * @returns {Array<any>} すべてのオブジェクトのすべての値が入った配列
//  */

// function getAllValues(lists) {
//   const result = [];
//   for (const obj of lists) {
//     for (const key in obj) {
//       const val = obj[key];
//       result.push(val);
//     }
//   }
//   return result;
// }

// test(getAllValues(collection), [1, 2, 3, 3, 4, 100]);
// test(getAllValues(collection.slice(1)), [3, 3, 4, 100]);

// /**
//  * @param {Array<object>} オブジェクトを要素に持つ配列
//  * @param {string} 取り出したいキーの名前
//  * @returns {Array<any>} すべてのオブジェクトにおいて第 2 引数のキーに対応する値が入った配列
//  */
// function selectValues(lists, key) {
//   const result = [];
//   for (const obj of lists) {
//     const val = obj[key];
//     if (typeof val !== "undefined") {
//       result.push(val);
//     }
//   }
//   return result;
// }

// test(selectValues(collection, "a"), [1, 3, 100]);
// test(selectValues(collection, "b"), [2, 3, 4]);

// 参照

// 1
// let theLoneliestNumber = 1;

// let aFriend = theLoneliestNumber;

// console.log(theLoneliestNumber); // ???
// console.log(aFriend); // ???
// console.log(theLoneliestNumber === aFriend); // ???

// 2
// const kermit = [
//   "red",
//   "orange",
//   "yellow",
//   "green",
//   "blue",
//   "indigo",
//   "violet",
// ];
// const missPiggy = kermit.slice();

// console.log(kermit); // ???
// console.log(missPiggy); // ???
// console.log(kermit === missPiggy); // ???

// 3
// let mamas = "Monday";

// let papas = mamas;

// papas += ", so good to me.";

// console.log(mamas); // ???
// console.log(papas); // ???
// console.log(mamas === papas); // ???

// 4
// const theFabFour = {
//   bass: ["paul"],
//   drums: ["ringo"],
//   guitar: ["george", "john"],
//   vocals: ["george", "john", "paul", "ringo"],
// };

// const theFifthBeatle = theFabFour;
// theFifthBeatle.guitar.push("beau");

// console.log(theFabFour); // ???
// console.log(theFifthBeatle); // ???
// console.log(theFabFour === theFifthBeatle); // ???

// console.log(theFabFour.guitar); // ???
// console.log(theFifthBeatle.guitar); // ???
// console.log(theFabFour.guitar === theFifthBeatle.guitar); // ???

// 5
// let isHot = true;
// let isCold = !isHot;

// isHot = !isHot;

// console.log(isHot); // ???
// console.log(isCold); // ???
// console.log(isHot === isCold); // ???

// 6
// const easyAs = [
//   ["a", "b", "c"],
//   [1, 2, 3],
//   ["do", "re"],
// ];
// const simpleAs = easyAs.slice();
// simpleAs[2].push("mi");

// console.log(easyAs); // ???
// console.log(simpleAs); // ???
// console.log(easyAs === simpleAs); // ???

// console.log(easyAs[2]); // ???
// console.log(simpleAs[2]); // ???
// console.log(easyAs[2] === simpleAs[2]); // ???


// 中級演習
// 1
// /**
//  * @param {object} objects
//  * @returns {object} 与えられたオブジェクトのキーと値を入れ替えた新しいオブジェクト。ただし、重複する値がある場合は、最初のキーと値のペアのみを使用し、その後のペアは無視すること。
//  */

// // ここにコードを書きましょう
// function swapPairs2(objects) {
//   const result = {};
//   for (const key in objects) {
//     const val = objects[key];
//     if (result[val] === undefined) {
//       result[val] = key;
//     }
//   }
//   return result;
// }

// const object5 = { a: 1, b: 2, c: 3, d: 1 };
// const object6 = { a: 1, b: 1, c: 1, d: 1 };

// // `a: 1` と `d: 1` はどちらも値が `1` で重複しているので最初のキーと値のペアである `a: 1` を使い、`d: 1` は無視する。
// test(swapPairs2(object5), { 1: "a", 2: "b", 3: "c" });

// // object6も 1 という値が何度も重複してでてくる。したがって、2 回目以降、1 が値になるキーと値のペアは無視される。
// test(swapPairs2(object6), { 1: "a" });

// 2
// /**
//  * @param {Array<object>} lists
//  * @returns {Array<any>} 与えられた配列内のすべてのオブジェクトのすべての値が入った配列。重複した値がある場合は 1 つだけ残す。
//  */

// // ここにコードを書きましょう
// function getAllValues2(lists) {
//   const result = [];
//   for (const obj of lists) {
//     for (const key in obj) {
//       const val = obj[key];
//       if (result.indexOf(val) === -1) {
//         result.push(val);
//       }
//     }
//   }
//   return result;
// }

// const collection2 = [{ a: 1, b: 2, c: 2 }, { d: 1, e: 3 }, { f: 4, g: 5 }];

// test(getAllValues2(collection2), [1, 2, 3, 4, 5]);
// test(getAllValues2(collection2.slice(1)), [1, 3, 4, 5]);

// 3
// const hellos = {
//   English: "Hello",
//   Japanese: "Konnichiwa",
//   German: "Hallo",
//   Spanish: "Hola",
//   Arabic: "Ahlan wa sahlan",
//   Chinese: "Nihao",
// };

// /**
//  * @returns {string} 基礎演習 1 で使った `hellos` オブジェクトの中の言葉をランダムに選んだもの
//  */

// // ここにコードを書きましょう
// function getRandomHello() {
//   const result = [];
//   for (const key in hellos) {
//     result.push(hellos[key]);
//   }
//   console.log(result);
//   return result[Math.floor(Math.random() * result.length)];
// }

// // ランダムな出力をする関数をテストすることは困難です。
// // ここでは、コンソールの表示を見て、テストとしましょう。
// console.log(getRandomHello()); // "Konnichiawa"、"Hola" 等、実行する度にランダムな言葉が表示されるはずです。

// 応用演習
// 1
// /**
//  * @param {object} objects
//  * @returns {object} 与えられたオブジェクトのキーと値を入れ替えた新しいオブジェクト。キーと値を入れ替えたとき、同じキーに対する値が複数になった場合はそれらの値を配列に入れること。
//  */

// // ここにコードを書きましょう。
// function swapPairs3(objects) {
//   const result = {};
//   const list = [];
//   for (const key in objects) {
//     const val = objects[key];
//     if (result[val] === undefined) {
//       result[val] = key;
//     } else {
//       if (list.length === 0) {
//         list.push(result[val]);
//       }
//       list.push(key);
//       result[val] = list;
//     }
//   }
//   console.log(result);
//   return result;
// }

// const object7 = { a: 1, b: 2, c: 3, d: 1 };
// const object8 = { a: 1, b: 1, c: 1, d: 1 };

// test(swapPairs3(object7), { 1: ["a", "d"], 2: "b", 3: "c" });
// test(swapPairs3(object8), { 1: ["a", "b", "c", "d"] });

// 2
// console.log("--- 2 ---");

// /**
//  * @param {object} object
//  * @returns {object} 引数のオブジェクトとほぼ同じ形の新しいオブジェクトだが、同じ値を持つキーと値のペアは削除する。
//  */

// // ここにコードを書きましょう
// function noDuplicateValues(object) {
//   const result = {};
//   const temporary = {};
//   for (const key in object) {
//     const val = object[key];
//     if (temporary[val] === undefined) {
//       temporary[val] = key;
//     } else {
//       delete temporary[val];
//     }
//   }
//   for (const key in temporary) {
//     const val = temporary[key];
//     result[val] = Number(key);
//   }
//   return result;
// }

// const object9 = { a: 1, b: 2, c: 3, d: 4 };
// const object3 = { a: 1, b: 2, c: 3, d: 4 };

// test(noDuplicateValues(object9), object3);
// test(noDuplicateValues(object7), { b: 2, c: 3 });
// test(noDuplicateValues(object8), {});

// ナイトメア
// 1
/**
 * @param {object}
 * @returns {number} 引数のオブジェクトの深さ（何層になっているか）を返す。入れ子になったオブジェクトが複数ある場合は、一番深い層の数を返してください。
 */

// ここにコードを書きましょう
// const getDepth = obj => Object.keys(obj).length;

let count = 0;
function getDepth(obj) {
  count += 1;
  for (const key in obj) {
    const val = obj[key];
    if (typeof val === "object") {
      count += 1;
      getDepth(val);
    } else {
      // count += 1;
    }
  }
  count -= 1;
  return count;
}

const nestedObject1 = { a: "A" };
const nestedObject2 = { a: "A", b: { c: "C" } };
const nestedObject3 = { a: "A", b: { c: "C" }, d: { e: { f: "F" } } };
const nestedObjectZ = {
  z: {
    y: {
      x: {
        w: {
          v: {
            u: {
              t: {
                s: {
                  r: {
                    q: {
                      p: {
                        o: {
                          n: {
                            m: {
                              l: {
                                k: {
                                  j: {
                                    i: {
                                      h: {
                                        g: {
                                          f: {
                                            e: "E",
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

// nestedObject1 の深さは 1 です
test(getDepth(nestedObject1), 1);

// nestedObject2 の深さは 2 です
test(getDepth(nestedObject2), 2);

// nestedObject3 の深さは 3 です
test(getDepth(nestedObject3), 3);

// nestedObjectZ の深さは 22 です。
test(getDepth(nestedObjectZ), 22);