// document.querySelector('#submit-btn').addEventListener('click', onclick) 
// function onclick(e) {
//     e.preventDefault()
//     let item 
//     item = e.timeStamp
//     item = e.clientX
//     item = e.clientY
//     item = e.offsetX
//     item = e.offsetY
//     e.target.innerText= "Hello, I am Clicked"
//     console.log(item)
// }

// Mouse Event

const form = document.querySelector('form')
const submitBtn = document.querySelector('.submit-btn')
const header = document.querySelector('h3')
// submitBtn.addEventListener('click', run)
// submitBtn.addEventListener('dblclick', run)
// submitBtn.addEventListener('mousedown', run)
// submitBtn.addEventListener('mouseup', run)
submitBtn.addEventListener('mousemove', run)
// form.addEventListener('mouseover',run)
// form.addEventListener('mouseout',run)
// form.addEventListener('mouseenter',run)
// form.addEventListener('mouseleave',run)

function run(e){
    e.preventDefault();
    console.log('event type', e.type)
    header.textContent = `x : ${e.offsetX} y: ${e.offsetY}`
}