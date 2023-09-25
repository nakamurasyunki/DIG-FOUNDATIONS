'use strict';
// please do not delete the 'use strict' line above

document.getElementById('color-button').addEventListener('click', changeColor);
document.getElementById('img-button').addEventListener('click', changeImg);
document.getElementById('all-button').addEventListener('click', changeAll);
document.getElementById("img").addEventListener('click', clickImg);

const button = document.querySelectorAll("button");

for (let i = 0; i < button.length; i++) {
  button[i].style.border = "5px ridge gray";
  button[i].style.fontSize = "25px"
  button[i].style.fontWeight = "bold"
}

const randomColor = () => {
  const getRgb256 = () => Math.floor(Math.random() * 256);
  const r = getRgb256(), g = getRgb256(), b = getRgb256();
  const color = `rgb(${r}, ${g}, ${b})`;
  return color;
};

const randomImage = () => {
  const imagList = ["img/aaaa.jpg", "img/random_color.gif", "img/FND-19-1.jpg", "img/FND-19-2.jpg"];
  const randomNumber = Math.floor(Math.random() * imagList.length);

  return imagList[randomNumber];
}

function changeColor() {
  const color = randomColor()
  document.getElementsByTagName("body")[0].style.backgroundColor = color;
  document.getElementById('color-button').style.color = color;
  document.getElementById('img-button').style.color = randomColor();
  console.log('colorButton clicked!'); // feel free to change/delete this line
}

function changeImg() {
  const imgName = document.getElementById("img").getAttribute('src');
  const img = randomImage();
  // 同じ画像表示しない
  if (img === undefined || img === imgName) {
    changeImg();
  } else {
    document.getElementById("img").src = img;
    console.log('imgButton clicked!'); // feel free to change/delete this line
  }
}

function changeAll() {
  const imgName = document.getElementById("img").getAttribute('src');
  const color = randomColor()
  const img = randomImage();
  document.getElementsByTagName("body")[0].style.backgroundColor = color;
  document.getElementById('color-button').style.color = color;
  document.getElementById('all-button').style.backgroundColor = color;
  document.getElementById('img-button').style.color = randomColor();
  if (img === undefined || img === imgName) {
    changeImg();
  } else {
    document.getElementById("img").src = img;
    console.log('allButton clicked!'); // feel free to change/delete this line
  }
}

// 画像クリック回数とイベント
let clickCount = 0;
function clickImg() {
  clickCount++;
  console.log(clickCount);
  if (clickCount >= 5) {
    document.getElementsByClassName("row")[0].style.display = "none";
    document.getElementsByTagName("body")[0].style.background = "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)";
    document.getElementsByTagName("body")[0].style.backgroundSize = "400% 400%";
    document.getElementsByTagName("body")[0].style.animation = "gradient 15s ease infinite";
    document.getElementsByClassName("secret")[0].style.display = "block";
    clickCount = 0;
    document.getElementById("back-button").addEventListener('click', clickBack);
  }
}

const clickBack = () => location.reload();