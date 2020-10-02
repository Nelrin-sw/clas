function Person(firstname, lastname) {
    this.firstName = firstname;
    this.lastName = lastname;
};

Person.prototype.message = function () {
    return `Hello ${this.firstName} ${this.lastName}`
};

const person = new Person("Alan", "Red");
console.log(person.message());
function Customer(firstname,lastname, phone, email) {
    Person.call(this,firstname,lastname);
    this.phone = phone
    this.email = email
};

Customer.prototype = Object.create(Person.prototype);
const customer = new Customer('Peter','Parker', 888220934,'email@email.con');
console.log(customer.message());
console.log(customer);

//////////////////////////////////////////////////////////////////////

const profiletype = {
    message: function () {
        return `Hellllllllllo, I am ${this.firstName} ${this.lastName}`
    },
    setNewLastname: function (newLastName) {
        this.lastName=newLastName
    }
}
const peter = Object.create(profiletype);
peter.firstName='Peter'
peter.lastName='Parker'
peter.age=405
console.log(peter.message())

const alan = Object.create(profiletype,{
    firstName:{value:'Alan'},
    lastName:{value:'Red'},
    age:{value:95}
});
console.log(alan.message());

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////?