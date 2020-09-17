const lastnameInput = document.getElementById('last_name');
lastnameInput.addEventListener('focus', focus);
const firstnameInput = document.getElementById('first_name');
firstnameInput.addEventListener('focus', focus);
function focus(e) {
    console.log('Event type : ' + e.type)
};

/////////////////////////////////

const lastInput = document.getElementById('last_name');
lastInput.addEventListener('blur', blur);
const firstInput = document.getElementById('first_name');
firstInput.addEventListener('blur', blur);
function blur(e) {
    console.log('Event type : ' + e.type)
};

/////////////////////////////////

const namelastInput = document.getElementById('last_name');
namelastInput.addEventListener('cut', cut);
const namefirstInput = document.getElementById('first_name');
namefirstInput.addEventListener('cut', cut);
function cut(e) {
    console.log('Event type : ' + e.type)
};

/////////////////////////////////

const namelast = document.getElementById('last_name');
namelast.addEventListener('copy', copy);
const namefirst = document.getElementById('first_name');
namefirst.addEventListener('copy', copy);
function copy(e) {
    console.log('Event type : ' + e.type)
};

//////////////////////////////////

const last = document.getElementById('last_name');
last.addEventListener('paste', paste);
const first = document.getElementById('first_name');
first.addEventListener('paste', paste);
function paste(e) {
    console.log('Event type : ' + e.type)
};

//////////////////////////////////

const name2 = document.getElementById('last_name');
name2.addEventListener('input', input);
const name1 = document.getElementById('first_name');
name1.addEventListener('input', input);

const heading = document.querySelector('h3')

function input(e) {
    console.log('Event type : ' + e.type)
    heading.innerText = e.target.value  
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
