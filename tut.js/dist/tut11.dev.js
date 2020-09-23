"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// const smith = {
//     Name: "Smith",
//     Surname: "Game",
//     Age: 40
// }
// console.log(smith)
// function PERsion(name, surname, age) {
//     this.Name = name
//     this.Surname = surname
//     this.Age = age
//     this.Calulate_age = function () {
//         var diff_ms = Date.now = this.age.getTime();
//         var age_dt = new Date(diff_ms);
//         return Math.abs(age_dt.getUTCFullYear()- 1807)
//     }
//     console.log(this.Calulate_age())
//     // console.log(this)
// }
// const peter = new PERsion('Peter', 'Parker', 6-5-1950);
// const parker = new PERsion('Parker', 'Peter', 1-5-2000);
var name1 = "Smith";
var name2 = new String("Smith");
name2.age = 18;
console.log(name1, _typeof(name1));
console.log(name2, _typeof(name2));

if (name1 === name2) {
  console.log("Equal");
} else {
  console.log("Diffferent");
}