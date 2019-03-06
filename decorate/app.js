"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// decorators are just functions that get tacked on to classes 
// they take one argument, which is the constructor function
function dec(constructorFn) {
    console.log(constructorFn);
}
//it gets tacked on like so:
var Person = /** @class */ (function () {
    function Person() {
        console.log("he;;;;;ooo");
    }
    Person = __decorate([
        dec
    ], Person);
    return Person;
}());
// Factory 
function logging(value) {
    return value ? dec : null;
}
var Car = /** @class */ (function () {
    function Car() {
        console.log("goodbye");
    }
    Car = __decorate([
        logging(true)
    ], Car);
    return Car;
}());
