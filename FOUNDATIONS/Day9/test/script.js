'use strict'
// 1行目に記載している 'use strict' は削除しないでください

//   /**
//   * @param {Array<number>} odds - 数値型の要素を持つ配列
//   * @returns {Array<number>} 与えられた配列の中の奇数（odd number）だけが入った新しい配列
//   */
//   function getOddNumbers(odds) {
//   // ここにコードを書きましょう
//   const result = [];
//   for (const odd of odds) {
//     if (odd % 2 !== 0) {
//       result.push(odd);
//     }
//   }
//   return result;
// }

// let actual = getOddNumbers([1, 2, 3, 4, 5, 6, 7, 8]);
// let expected = [1, 3, 5, 7];

// // 現時点では、配列の比較には JSON.stringify を使う必要があると覚えておいてください。
// if (JSON.stringify(actual) === JSON.stringify(expected)) {
//   console.log("Yay! Test PASSED.");
// } else {
//   console.error("Test FAILED. Keep trying!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// // ここにテストを書きましょう
// actual = getOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
// expected = [1, 3, 5, 7, 9, 11, 13, 15];

// // 現時点では、配列の比較には JSON.stringify を使う必要があると覚えておいてください。
// if (JSON.stringify(actual) === JSON.stringify(expected)) {
//   console.log("Yay! Test PASSED.");
// } else {
//   console.error("Test FAILED. Keep trying!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// const info = { name: "Hana", dog: true, age: 12};

// let animal = "dog";
// let age = 12;
// console.log(info[animal]);
// console.log(info[age]);
// console.log(info[dog]);

// const lesson = {
//   instructor: "Eriko",
//   coding: true
// };

// 演習
// 確認
// 1

// 基礎演習
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

// 1
// ここにコードを書きましょう。
// const myInfo = {name:"Shunki",age:26,location:"Toyota",isProgrammer:true};

// // この演習では TDD スタイルのテストは必要ありません。console.log を使用してあなたが入力した情報を表示してみましょう。
// console.log(myInfo["isProgrammer"]); // => "true"

// 2
// const morseCode = {t:"-",a:".-",r:".-."};

// test(morseCode["t"], "-");
// test(morseCode["a"], ".-");
// test(morseCode["r"], ".-.");

// 3
// /**
//  * @param {string}  モールス信号に変換する文字
//  * @returns {string} 与えられた文字に対応するモールス信号
//  */
// let result = "";
// function morseCodeArt(codes) {
//   // ここにコードを書きましょう.
//   if (morseCode[codes] !== undefined){
//     return morseCode[codes];
//   } else {
//     for (const code of codes) {
//       result = result + morseCode[code] + " ";
//     }
//     result = result.trimEnd();
//     return result;
//   }
// }

// let result = "";
// function morseCodeArt(codes) {
//   // ここにコードを書きましょう.
//   if (morseCode[codes] !== undefined){
//     return morseCode[codes];
//   } else {
//     for (const code of codes) {
//       result = result + morseCode[code] + " ";
//     }
//     result = result.trimEnd();
//     morseCode[codes] = result;
//     return morseCode[codes];
//   }
// }

// test(morseCodeArt("a"), ".-");
// test(morseCodeArt("r"), ".-.");
// test(morseCodeArt("t"), "-");
// test(morseCodeArt("art"), ".- .-. -");

// // 4
// /**
//  * @param {object}obj  オブジェクト
//  * @param {Array<string>}lists  文字列の入った配列
//  * @returns {object} 与えられた配列の要素をキーにして、それに対応する値を第 1 引数のオブジェクトから選んで作った新しいオブジェクト
//  */
// // ここにコードを書きましょう.
// function select(obj,lists) {
//   const result = {};
//   for (const list of lists) {
//     result[list] = obj[list];
//   }
//   return result;
// }

// test(select({ a: 1, b: 2, c: 3 }, ["a"]), { a: 1 });
// test(select({ a: 1, b: 2, c: 3 }, ["a", "c"]), { a: 1, c: 3 });
// test(select({ a: 1, b: 2, c: 3 }, ["a", "b", "c"]), { a: 1, b: 2, c: 3 });
// test(select({ a: 1, b: 2, c: 3 }, []), {});

// // 5
// /**
//  * @param {string} greets
//  * @returns {{ [character: string]: number }} 与えられた文字列の中の各文字をキーに、その登場回数を値にしたオブジェクト
//  */
// // ここにコードを書きましょう.
// function countCharacters(greets) {
//   const result = {};
//   for (const greet of greets) {
//     let count = greets.split(greet).length - 1;
//     result[greet] = count;
//   }
//   return result;
// }

// test(countCharacters("hello"), { h: 1, e: 1, l: 2, o: 1 });
// test(countCharacters("hello hello"), { h: 2, e: 2, l: 4, o: 2, " ": 1 });

// // 中級演習
// // 1
// /**
//  * @param {string} greet
//  * @returns {{ [word: string]: number }} 与えられた文字列の中の各単語をキーとして持つオブジェクト。各キーに対応する値は、それぞれの単語が文字列の中で使われている回数。
//  */
// // ここにコードを書きましょう.
// function countWords(greet) {
//   const result = {};
//   const words = greet.split(" ");
//   for (const word of words) {
//     if (result[word]) {
//       result[word] += 1;
//     } else if (word !== "") {
//       result[word] = 1;
//     }
//   }
//   return result;
// }

// test(countWords("hello hello"), { hello: 2 });
// test(countWords("hello Hello"), { hello: 1, Hello: 1 });
// test(countWords("おはよう おはよう こんばんは"), {おはよう: 2, こんばんは: 1})
// test(countWords(""), {});

// ポケモンタイム！！
// const pokemons = [
//   {
//     Number: "001",
//     Name: "フシギダネ",
//     Generation: "第一世代",
//     About:
//       "生後しばらくは種から養分を得て成長する。背中の種から養分を受け取ることで、何日も何も食べなくても平気。",
//     Types: ["くさ", "どく"],
//   },
//   {
//     Number: "025",
//     Name: "ピカチュウ",
//     Generation: "第一世代",
//     About:
//       "静電気を体にまとい触った相手をまひさせることがある。",
//     Types: ["でんき"],
//   },
//   {
//     Number: "019",
//     Name: "コラッタ",
//     Generation: "第一世代",
//     About:
//       "どんな場所でも住み着いていける生命力。警戒心がとても強い。",
//     Types: ["ノーマル"],
//   },
// ];

// // 1
// /**
//  * @param {Array<object>}  pokemons ポケモンオブジェクトが入った配列
//  * @returns {Array<string>} 各オブジェクトの `Names` を要素に持つ配列
//  */
// // ここにコードを書きましょう.
// function getNames(pokemons) {
//   const Names = [];
//   for (const pokemon of pokemons) {
//     let key = "Name";
//     Names.push(pokemon[key]);
//   }
//   return Names;
// }

// // 'pokemons' の配列は、以下のコードより上に書かれていなければいけません。
// test(getNames(pokemons), ["フシギダネ", "ピカチュウ", "コラッタ"]);

// // 2
// /**
//  * @param {Array<object>} pokemons ポケモンが入った配列
//  * @param {number} number 取り出したいポケモンの 'number'
//  * @returns {object|null} 与えられた数字を 'number' に持つポケモン。もし対応するポケモンが存在しなければ、データがないことを示すデータ、null を返すようにしましょう。
//  */
// // ここにコードを書きましょう.
// function findPokemon(pokemons,number) {
//   const result = {};
//   for (const pokemon of pokemons) {
//     if (pokemon["Number"] == number) {
//       result[number] = pokemon;
//       return result[number];
//     } else {
//       result[number] = null;
//     }
//   }
//   return result[number];
// }

// test(findPokemon(pokemons, 1), pokemons[0]);
// test(findPokemon(pokemons, 19), pokemons[2]);
// test(findPokemon(pokemons, 25), pokemons[1]);
// test(findPokemon(pokemons, 1337), null);

// // 応用演習
// // 1
// /**
//  * @param {object} obj オブジェクト
//  * @returns {object} 与えられたオブジェクトのキーと値のペアのうち、値が奇数のものを除いた新たなオブジェクト。

//  */
// // ここにコードを書きましょう.
// function removeOddValues(obj) {
//   const result = {};
//   const keys = Object.keys(obj);
//   for (const key of keys) {
//     if (typeof(obj[key]) === "number") {
//       if (obj[key] % 2 === 0) {
//         result[key] = obj[key];
//       }
//     } else {
//       result[key] = obj[key];
//     }
//   }
//   return result;
// }

// test(removeOddValues({ a: 1, b: 2, c: 3 }), { b: 2 });
// test(removeOddValues({ a: "1", b: "2", c: "3" }), {
//   a: "1",
//   b: "2",
//   c: "3",
// });
// オブジェクトを書くとき、1 行で書くと横に長くなってしまう場合はキーと値のペアを改行して書くこともできます。

// セントレアから愛知芸術文化センターに移動！！！
// const routes = [
//   { route: "タクシー", time: { taxi: 74}, cost: 15720},
//   { route: "ミュースカイ＋名古屋＋地下鉄", time: { kintetsu: 29, transit: 7, subway: 5, walk: 6 }, cost: 1460 },
//   { route: "ミュースカイ＋金山＋バス", time: { kintetsu: 24, transit: 17, bus: 24, walk: 3 }, cost: 1400 },
//   { route: "ミュースカイ＋金山＋地下鉄", time: { kintetsu: 24, transit: 6, subway: 8, walk: 6 }, cost: 1400 },
//   { route: "ミュースカイ＋神宮前＋バス", time: { kintetsu: 21, transit: 10, bus: 30, walk: 3 }, cost: 1330 },
//   { route: "特急＋金山＋地下鉄", time: { kintetsu: 32, transit: 5, subway: 8, walk: 6 }, cost: 1030 },
// ];

// // 1
// /**
//  * @param {Array<object>} routes ルートの入った配列
//  * @returns {object} 一番時間のかかるオブジェクト
//  */
// // ここにコードを書きましょう.
// let result;
// function longestTime(routes) {
//   let routeTime = 0;
//   let key = "time";
//   if (routes !== undefined) {
//     for (const route of routes) {
//       let sum = 0;
//       for (const time of Object.values(route[key])) {
//         if (Number.isFinite(time)) {
//           sum += time;
//         }
//       }
//       if (routeTime < sum) {
//         routeTime = sum;
//         result = route;
//       }
//     }
//   } else {
//     result = undefined;
//   }
//   return result;
// }

// test(longestTime(routes), routes[0]);
// test(longestTime(routes.slice(3)), routes[4]);
// test(longestTime(), undefined);

// // 2
// /**
//  * @param {Array<object>}  ルートの入った配列 `routes`
//  * @returns {Array<object>} 与えられたすべてのルートオブジェクトをコスト (cost) の安い順（昇順）に並び替えた新たな配列。同じコストの場合は、元の順番のままにする。
//  */

// // ここにコードを書きましょう.
// function getSortedByCost(routes) {
//   const result = [];
//   for (const route of routes) {
//     result.push(route);
//   }
//   result.sort((a,b) => a.cost - b.cost);
//   return result;
// }

// // routes のコピーを作りましょう。 (後でテストに使います。)
// const routesCopy = JSON.stringify(routes);

// const routesByCost = [
//  { route: "特急＋金山＋地下鉄", time: { kintetsu: 32, transit: 5, subway: 8, walk: 6 }, cost: 1030 },
//  { route: "ミュースカイ＋神宮前＋バス", time: { kintetsu: 21, transit: 10, bus: 30, walk: 3 }, cost: 1330 },
//  { route: "ミュースカイ＋金山＋バス", time: { kintetsu: 24, transit: 17, bus: 24, walk: 3 }, cost: 1400 },
//  { route: "ミュースカイ＋金山＋地下鉄", time: { kintetsu: 24, transit: 6, subway: 8, walk: 6 }, cost: 1400 },
//  { route: "ミュースカイ＋名古屋＋地下鉄", time: { kintetsu: 29, transit: 7, subway: 5, walk: 6 }, cost: 1460 },
//  { route: "タクシー", time: { taxi: 74}, cost: 15720},
// ];

// test(getSortedByCost(routes), routesByCost);

// // `getSortedByCost` 関数を使う前にとったコピーと比較して、元の routes 配列が変更されていないことを確認する。
// test(JSON.stringify(routes), routesCopy);

// スコープ
// function greet() {
//   const greeting = "Hello World";
//   return greeting;
// }

// console.log(greet());
// console.log(greeting);

// 1
// let word = "こんにちは！";

// function greet(name) {
//   let word = "おはよう！";
//   return name + "さん、" + word;
// }
// console.log(greet("りか"));

// 2
// function sumArray(arrayOfNumbers) {  // 「数字の配列」と言う仮引数です。
//   let sum =0;
//   for (const number of arrayOfNumbers) {
//     sum += number;
//   }
//   return sum;
// }

// test(sumArray([1, 2, 3]), 6);
// test(sumArray([10, 20, 30]), 60);
// test(sumArray([100, 200, 300]), 600);

// 3
// let count = 0;

// function counter(x) {
//   count = count + x;
//   return count;
// }

// test(counter(3), 3);
// test(counter(4), 7);
// test(counter(5), 12);