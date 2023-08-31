const alligator = document.getElementsByClassName("box2")[0];
const pushAlligator = document.getElementById("button");
const inputNumber = document.getElementsByTagName("input")[0];

function outputAlligator() {
  let alligatorCount = "🐊";
  for (let i = 1; i <= inputNumber.innerText; i++) {
    alligator.innerText = alligatorCount;
    alligatorCount += "🐊"
  }
}

