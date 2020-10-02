class Person {
    constructor(firstname, lastname, dob) {
        this.firstName = firstname
        this.lastName = lastname
        this.dob = dob
    }
    message() {
        return `Hello, My name is ${this.firstName} ${this.lastName}. My date of birth ${this.dob}`
    }
    calulate_age() {
        var diff_ms = Date.now() = this.age.getTime();
        var age_dt = new Date(diff_ms);
        return Math.abs(age_dt.getUTCFullYear() - 1807)
    }
    setNewLastname(newLastName) {
        this.lastName = newLastName
    }
}
const alan = new Person(`Alan`, `Red`, `10-29-1908`);
alan.setNewLastname('Blue');

console.log(alan);