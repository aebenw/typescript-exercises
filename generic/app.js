"use strict";
function echo(data) {
    return data;
}
// This can work since the type 'string' can support the method .length
console.log(echo('Max').length);
// But we get undefined when we try and do this instead of being warned
// JS has no way of knowing this doesn't mean anything
console.log(echo(27).length);
// Better Generic
// By adding a T we are making it a generic
// meaning that it is of a type, which can be declared or inferred
function betterEcho(data) {
    return data;
}
// so now when we do this 
// console.log(betterEcho(28).length)
//  JS knows that this won't work and won't compile our code
// It implies what the type is by the datatype we give it 
// We can also explicitly tell it what kind of type we want it to be 
console.log(betterEcho(27));
// Built-in Generics
// The compiler here is asking for Array to have a type attatched to it
// const testResults: Array = [1.94, 2.33];
var testResults = [1.94, 2.33];
testResults.push(2);
// the following doesn't work 
// testResults.push("won't work")
// Array has generics built into i t
// Arrays 
function printAll(args) {
    args.forEach(function (el) { return console.log(el); });
}
printAll(["Apple", "ban"]);
// Generic Types 
var echo2 = betterEcho;
// not quite sure what's happeneing with the second equal sign 
// i know its referencing the function but I don't get how. 
console.log(echo2('testing'));
// Generic Class with single type
// Very important, will be used the most 
// if we do this, typing the class when we want it to be a number, we get an error
// the T can be anything, not just a number. 
var SimpleMath = /** @class */ (function () {
    function SimpleMath(baseValue, multiplyValue) {
        this.baseValue = baseValue;
        this.multiplyValue = multiplyValue;
    }
    // To make sure this works, we need to type cast
    // We do this by adding a + sign
    SimpleMath.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue;
    };
    return SimpleMath;
}());
var simple = new SimpleMath(20, 30);
simple.calculate();
//Generic Class multiple types
// Convention to use U instead of t when referring to multiple 
var USimpleMath = /** @class */ (function () {
    function USimpleMath(baseValue, multiplyValue) {
        this.baseValue = baseValue;
        this.multiplyValue = multiplyValue;
    }
    // To make sure this works, we need to type cast
    // We do this by adding a + sign
    USimpleMath.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue;
    };
    return USimpleMath;
}());
var uSimple = new USimpleMath(20, 30);
simple.calculate();
// Create a generic Map (an Object like an Array, but instead with Key-Value Pairs). The key will always be a string.
// Let's keep it simple and only add the following methods to the Map:
var MyMap = /** @class */ (function () {
    function MyMap() {
        this._map = [];
    }
    Object.defineProperty(MyMap.prototype, "map", {
        get: function () {
            return this._map;
        },
        enumerable: true,
        configurable: true
    });
    MyMap.prototype.setItem = function (key, value) {
        this._map.push([key, value]);
    };
    MyMap.prototype.getItem = function (key) {
        for (var i = 0; i < this._map.length; i++) {
            if (this._map[i][0] === key)
                return this._map[i];
        }
    };
    MyMap.prototype.clear = function () {
        this._map = [];
    };
    return MyMap;
}());
// setItem(key: string, item: T) // should create a new key-value pair
// getItem(key: string) // should retrieve the value of the provided key
// clear() // should remove all key-value pairs
// printMap() // should output key-value pairs
// The map should be usable like shown below:
var numberMap = new MyMap();
numberMap.setItem('apples', 5);
numberMap.setItem('peaches', 3);
console.log(numberMap.map);
console.log(numberMap.getItem('apples'));
numberMap.clear();
console.log(numberMap.map);
// numberMap.setItem('bananas', 10);
// numberMap.printMap();
var stringMap = new MyMap();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
console.log(stringMap.map);
console.log(stringMap.getItem('name'));
// stringMap.printMap();
