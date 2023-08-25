'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// 配列のメソッドを実験してみましょう。
const arrTreats = ["apple", "banana", "chocolate", "doughnut"];

console.log(arrTreats);

// それぞれコンソールに何が表示されるか予想した後、
// 実行して結果を確認してみましょう。
console.log(arrTreats.indexOf("banana"));
console.log(arrTreats.indexOf("doughnut"));

// 引数が配列に無い場合、何が返ってくるでしょう？
console.log(arrTreats.indexOf("ramen"));

// indexOfを使って、配列の中の"banana"を探して"brownie"に書き換えてみましょう
arrTreats[arrTreats.indexOf("banana")] = "brownie";
console.log(arrTreats);


// ボーナス問題
// arrTreatsの末尾に、あなたの好きなおやつを追加しましょう

// ここにコードを書いてみましょう
arrTreats.push("cake");
console.log(arrTreats);
// おやつが追加できているか確認するために、末尾の値を取得しましょう！

// ここにコードを書いてみましょう
console.log(arrTreats[arrTreats.length-1]);