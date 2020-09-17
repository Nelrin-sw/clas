"use strict";

var colorPick = document.getElementsByClassName('color-picker');
var output = document.getElementById('output');
var colorList = ['green', 'blue', 'orange', 'purple']; //////////

var _loop = function _loop(i) {
  colorPick[i].style.backgroundColor = colorList[i];
  colorPick[i].addEventListener = ('click', function color() {
    changeColor = colorList[i];
  });
};

for (var i = 0; i < colorPick.length; i++) {
  _loop(i);
}

; //////

output.style.backgroundColor = color;