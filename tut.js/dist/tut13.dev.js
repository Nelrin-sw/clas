"use strict";

function Person(firstname, lastname) {
  this.firstName = firstname;
  this.lastName = lastname;
}

;

Person.prototype.message = function () {
  return "Hello ".concat(this.firstName, " ").concat(this.lastName);
};

var person = new Person("Alan", "Red");
console.log(person.message());

function Customer(firstname, lastname, phone, email) {
  Person.call(this, firstname, lastname);
  this.phone = phone;
  this.email = email;
}

;
Customer.prototype = Object.create(Person.prototype);
var customer = new Customer('Peter', 'Parker', 888220934, 'email@email.con');
console.log(customer.message());
console.log(customer); //////////////////////////////////////////////////////////////////////

var profiletype = {
  message: function message() {
    return "Hellllllllllo, I am ".concat(this.firstName, " ").concat(this.lastName);
  },
  setNewLastname: function setNewLastname(newLastName) {
    this.lastName = newLastName;
  }
};
var peter = Object.create(profiletype);
peter.firstName = 'Peter';
peter.lastName = 'Parker';
peter.age = 405;
console.log(peter.message());
var alan = Object.create(profiletype, {
  firstName: {
    value: 'Alan'
  },
  lastName: {
    value: 'Red'
  },
  age: {
    value: 95
  }
});
console.log(alan.message()); ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////?