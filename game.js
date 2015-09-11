/* @flow */
var mondai = [
            ['duke_72dpi.png', 'デューク', 'duke'],
            ['cist.png', '千歳科学技術大学', 'cist'],
        ];
var miss = '';
var index = 0;
var us = '';

window.onload = function() {
  reload();
}

function reload() {
  var gazou = mondai[index][0];
  var jp = mondai[index][1];
  us = mondai[index][2];
  document.getElementById("gazou").src = gazou;
  document.getElementById("jp").innerHTML = jp;
  document.getElementById("us").innerHTML = us;
}

function owari() {
  document.onkeydown = function(){};
  document.body.removeChild(document.getElementById("gazou"));
  document.body.removeChild(document.getElementById("jp"));
  document.body.removeChild(document.getElementById("us"));
  document.getElementById("kekka").innerHTML = 'ミスタイプ：' + miss.length + '回';
}

document.onkeydown = function (event) {
  var inputKey = event.keyCode;
  var ok = us.toUpperCase().charCodeAt(0);
  if (ok === inputKey) {
    us = us.substr(1, us.length);
    document.getElementById("us").innerHTML = us;
  } else {
    miss = miss + '×';
    document.getElementById("miss").innerHTML = miss;
  }
  if (!us) {
    index = index + 1;
    if (mondai.length <= index) {
      owari();
    } else {
      reload();
    }
  }
}
