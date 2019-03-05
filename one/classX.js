"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Exercise 1 - How was your TypeScript Class?
var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
        this.name = name;
    }
    Car.prototype.honk = function () {
        console.log("Toooooooooot!");
    };
    Car.prototype.accelerate = function (speed) {
        return this.acceleration += speed;
    };
    return Car;
}());
var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
// Exercise 2 - Two objects, based on each other ...
var baseObject = /** @class */ (function () {
    function baseObject(width, length) {
        this.width = width;
        this.length = length;
        this.width = width;
        this.length = length;
    }
    return baseObject;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, length) {
        var _this = _super.call(this, width, length) || this;
        console.log(_this.width);
        return _this;
    }
    Rectangle.prototype.calcSize = function () {
        return this.length * this.width;
    };
    return Rectangle;
}(baseObject));
var rectangle = new Rectangle(5, 2);
console.log(rectangle.calcSize());
// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
var Personn = /** @class */ (function () {
    function Personn() {
    }
    Object.defineProperty(Personn.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            value.length > 3 ? this._firstName = value : this._firstName = '';
        },
        enumerable: true,
        configurable: true
    });
    return Personn;
}());
var personn = new Personn();
console.log(personn.firstName);
personn.firstName = "Ma";
console.log(personn.firstName);
personn.firstName = "Maximilian";
console.log(personn.firstName);
