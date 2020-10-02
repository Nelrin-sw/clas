"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Person =
/*#__PURE__*/
function () {
  function Person(firstname, lastname, dob) {
    _classCallCheck(this, Person);

    this.firstName = firstname;
    this.lastName = lastname;
    this.dob = dob;
  }

  _createClass(Person, [{
    key: "message",
    value: function message() {
      return "Hello, My name is ".concat(this.firstName, " ").concat(this.lastName, ". My date of birth ").concat(this.dob);
    }
  }]);

  return Person;
}();