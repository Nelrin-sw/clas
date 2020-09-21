"use strict";

var colorList = ['red', 'blue', 'gold', 'pink', "lawngreen"];
var colorPicker = document.getElementsByClassName('color-pick');
var output = document.getElementById('output'); // console.log(colorPicker, output, "Hi");

for (var i = 0; i < colorPicker.length; i++) {
  colorpicker[i].style.backgroundColor = colorlist[i];
}