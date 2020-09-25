// const num1 = 8;
// const num2 = new Number(8);

// let item1 = true;
// let item2 = new Boolean(true);

// item1 = {name: "Smith"}
// item2 = new Object({name:"Smith"})

// item1 = [1,2,3,4,5]
// item2 = new Array (1,2,3,4,5)

// item1 = function (x,y) {
//     return x + y
// }
// item2 = new Function ('x','y','return x-y')

// console.log(item1(4,8));
// console.log(item2(8,9));

function Person(firstname,lastname, dob) {
    this.firstname = firstname
    this.lastname = lastname
    this.dob = new Date(dob)
    this.calculate_age = function () {
        var diff_ms = Date.now() - this.dob.getTime();
        var age_dt = new Date(diff_ms);

        return Math.abs(age_dt.getUTCFullYear()- 1970)
    }
}

const peter = new Person("Peter","Brown","12-13-2000")
const aan = new Person("Alan","Red","12-13-1990")

console.log(peter.calculate_age === AnalyserNode.calculate_age)
console.log(peter.calculate_age ())
console.log(aan.calculate_age())

Person.prototype.getFullName = function () {
    return `${this.firstname} ${this.lastname}`
}

Person.prototype.setNewLastName = function (newLastName) {
    this.lastname = newLastName
}

console.log(peter.getFullName())
peter.setNewLastName("Willam")
console.log(peter.getFullName())
console.log(peter.hasOwnProperty('firstName'))
console.log(peter.hasOwnProperty('calculate_age'))