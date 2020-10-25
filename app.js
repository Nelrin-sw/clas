// const number = [1, 2, 3, -1, -2];

// const filtered = number.filter(function (value) {
//     return value >= 0
// })

// console.log(filtered);

//----------------------------

// const number = [1, 2, 3, -1, -2];

// const filtered = number.filter(n => n >= 0)

// console.log(filtered);

//----------------------------

// const number = [1, 2, 3, -1, -2];

// const filtered = number.filter(n => n >= 0)
// const item = filtered.map(n => `<li>` + n + `</li>`)

// console.log(item);

//-----------------------------

// const number = [1, 2, 3, -1, -2];

// const filtered = number.filter(n => n >= 0);
// const item = filtered.map(n => `<li>` + n + `</li>`);
// const html = `<ul>` + item.join() + `</ul>`;

// console.log(html);

//------------------------------

// const number = [1, 2, 3, -1, -2];

// const filtered = number.filter(n => n >= 0);
// const item = filtered.map(n => {
//     const obj = {value: n};
//     return obj
// });

// console.log(item);

//------------------------------

const number = [1, 2, 3, -1, -2];

const filtered = number.filter(n => n >= 0);
const item = filtered.map(n => {
    return {value: n}});

console.log(item);

//------------------------------