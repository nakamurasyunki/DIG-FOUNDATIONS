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
  const imagList = ["imgbb/aaaa.jpg", "imgbb/random_color.gif"];
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

let clickCount = 0;
function clickImg() {
  clickCount++;
  if (clickCount >= 5) {
    particlesJS("img", { //ここに書くのがHTMLのidに対応するもの
      "img": {
        "number": {
          "value": 50,//紙吹雪の数
          "density": {
            "enable": false,
            "value_area": 200
          }
        },
        "color": {
          "value": ["#EA5532", "#F6AD3C", "#FFF33F", "#00A95F", "#00ADA9", "#00AFEC", "#4D4398", "#E85298"]//紙吹雪の色の種類
        },
        "shape": {
          "type": "polygon",//形状はPolygon,つまり多角形
          "stroke": {
            "width": 0,
          },
          "polygon": {
            "nb_sides": 4//多角形の角の数
          }
        },
        "opacity": {
          "value": 1,
          "random": false,
          "anim": {
            "enable": true,
            "speed": 20,
            "opacity_min": 0,
            "sync": false
          }
        },
        "size": {
          "value": 5,
          "random": true,//サイズをランダムにする
          "anim": {
            "enable": true,
            "speed": 1,
            "size_min": 1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false,
        },
        "move": {
          "enable": true,
          "speed": 5,//小さくするとゆっくり、大きくすると速くなる
          "direction": "bottom",//落ちる向き
          "random": false,//動きをランダムにするか
          "straight": false,//まっすぐ落ちるかどうか
          "out_mode": "out",//画面の外に出るか
          "bounce": false,//跳ね返るかどうか
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": false,
          },
          "onclick": {
            "enable": false,
          },
          "resize": true
        },
      },
      "retina_detect": true
    });
    clickCount = 0;
  }
}