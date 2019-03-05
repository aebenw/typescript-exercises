"use strict";
function greet(person) {
    console.log("hi" + person.firstName);
}
;
function changeName(person) {
    person.firstName = 'Anne';
}
var person = {
    firstName: 'Max',
    // the following throws an error
    // name: 'Max',
    age: 27,
    hobbies: ["cooking, sports"],
    greet: function (lastName) {
        console.log("my last name is " + lastName);
    }
};
greet(person);
changeName(person);
person.greet('Per');
var Person = /** @class */ (function () {
    function Person(firstName) {
        this.firstName = firstName;
    }
    Person.prototype.greet = function (lastName) {
        console.log("my last name is " + lastName);
    };
    return Person;
}());
var myPerson = new Person("eben");
myPerson.firstName = 'eben';
myPerson.greet("wood");
var myDoubleFunc;
myDoubleFunc = function (number1, number2) {
    return number1 * number2;
};
var oldPerson = {
    age: 99,
    firstName: 'Eben',
    greet: function (lastName) {
        console.log("my last name is " + lastName);
    }
};
console.log(oldPerson);
