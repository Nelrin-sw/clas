"use strict";

var firstnameInput = document.getElementById('first_name');
var heading = document.querySelector("h3");
var form = document.querySelector("form");
form.addEventListener("submit", submit);

function submit(e) {
  console.log('Event type : ' + e.type);
  heading.innerText = e.target.value;
}

;