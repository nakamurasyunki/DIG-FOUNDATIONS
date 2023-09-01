const alligator = document.getElementsByClassName("box2")[0];
const pushAlligator = document.getElementById("button1");
const pushTiger = document.getElementById("button2");
const pushDragon = document.getElementById("button3");
const inputNumber = document.getElementById("inputNumber");

function outputAlligator() {
  let alligatorCount = "🐊";
  for (let i = 1; i <= inputNumber.value; i++) {
    alligator.innerText = alligatorCount;
    alligatorCount += "🐊"
  }
}
function outputTiger() {
  let alligatorCount = "🐅";
  for (let i = 1; i <= inputNumber.value; i++) {
    alligator.innerText = alligatorCount;
    alligatorCount += "🐅"
  }
}
function outputDragon() {
  let alligatorCount = "🐉";
  for (let i = 1; i <= inputNumber.value; i++) {
    alligator.innerText = alligatorCount;
    alligatorCount += "🐉"
  }
}


pushAlligator.addEventListener("click", outputAlligator);
pushTiger.addEventListener("click", outputTiger);
pushDragon.addEventListener("click", outputDragon);