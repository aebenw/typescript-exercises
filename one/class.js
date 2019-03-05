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
var Person = /** @class */ (function () {
    //below, the public key is making it so that it creates an attribut upon construction
    // it would be the equivilent of what's happening with name above
    function Person(name, username) {
        this.username = username;
        // protected can be accessed from a class that inherets from this class
        this.age = 26;
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.setType('anything');
    };
    Person.prototype.setType = function (type) {
        this.type = type;
    };
    return Person;
}());
var person = new Person("Eben", "ew");
console.log(person.username);
var Eben = /** @class */ (function (_super) {
    __extends(Eben, _super);
    function Eben(username) {
        var _this = _super.call(this, 'Eben', username) || this;
        _this.age = 12;
        return _this;
    }
    return Eben;
}(Person));
var eb = new Eben('eb');
console.log(eb);
// Getters & Setters
var Plant = /** @class */ (function () {
    function Plant() {
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            value.length > 3 ? this._species = value : this._species = 'default';
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
// static properties/methods
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.circ = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log(Helpers.PI);
console.log(Helpers.circ(20));
var plant = new Plant();
console.log(plant.species);
plant.species = "a";
console.log(plant.species);
plant.species = "apple";
console.log(plant.species);
// Abstract Classes 
// they need to inheret from them, they never are instantiated
var Project = /** @class */ (function () {
    function Project() {
    }
    // the following will be available completely in a child class
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var newProj = new ITProject();
newProj.changeName("new proj");
console.log(newProj);
// private constructors 
// this is done so that only one instance of this class can be created 
// and it can never be over wrtten 
// the only thing publicly available is the static method
// which also creates the instance
var OnlyOne = /** @class */ (function () {
    function OnlyOne(name) {
        this.name = name;
    }
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('the only one');
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
// read only 
// public properties can be rewritten as well as reading it 
// the way to combat that is on line 107
// public readonly name: string
