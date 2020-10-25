const firstnameInput = document.getElementById('first_name');
const heading = document.querySelector("h3");
const form = document.querySelector("form");
form.addEventListener("submit", submit);

function submit(e) {
    console.log('Event type : ' + e.type)
    heading.innerText = e.target.value
};