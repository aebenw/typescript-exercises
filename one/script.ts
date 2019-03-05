// Booleans/strings/numbers/typed arrasy
let myAge: number = 12;

// mixed array 
let hobbies: any[] = [];
hobbies.push(100);
hobbies.push(' a string')
console.log(hobbies)

// tuples - arrays that follow a two type pattern format
let address: [string, number] = ["park", 99]
console.log(address)

// enums
//    Kind of like reverse arrays
enum Colors {
    Green, 
    Red,
    Blue = 12
}

console.log(Colors.Green) //print out 0
console.log(Colors.Green) //print out 0

// any
// let car: any = "bmw";
// car = 4;
// ^^ valid
// but makes it like normal js, gives up all the properties of TS

// More advanced Types 

//           function
// function returnMyAge(): string {
//     return myAge
// } 
// ^^ won't return the correct variable bc its not a string

// void
// the type declared outside the function refers to the return value
function sayHello(): void {
    console.log('this should not return anything bc its void')
}

// argument types 
// in order for it to return a number, the arg types both need to be a number
// error will raise if that's not the case
function multiply(val1: number, val2: number): number {
    return val1 * val2;
}

// function types
// functions can be a type 
// we can say characteristics of the fucntion
//    how many arguments, its return value
let myMultiply: (a: number, b: number) => number;
myMultiply = multiply

// objects 
// in the background, the object becomes a type
// with two fields, name and age, and they need to remain structured in this way.
// let userData = {
//     name: 'Eben',
//     age: 27
// }

// I would be able to do something like this 

// userData = {} //it needs to always contain the feilds it is created with 

// Nor could this be done 
//  userData = {a: "ben", b: 33}

// to be explicit we could this 

// let userData: {name: string, age: number} = {
//     name: 'Eben',
//     age: 26
// }


 // complex object 
 let complex: {data: number[], output: (all:boolean) => number[]} = {
     data: [1,3,4],
     output: function (all: boolean): number[] {
         return this.data 
     }
 }

// a possible problem 
// if we wanted to change the type of one of the properties, we would have to change it everywhere
// a way to solve this is through type aliasing 
// this is making the type in one place and then using it everywhere we need it

type Complex =  {data: number[], output: (all:boolean) => number[]}

let complex2: Complex = {
    data: [1,3,4],
    output: function (all: boolean): number[] {
        return this.data 
    }
}

// union types 
// if you have an idea of 2, 3, 4, 5 kinds of types that something might be
// but do not want to do any 

let myRealAge: number | string = 27;
myRealAge = '27';

// check type 
let finalValue = 'a string'
if(typeof finalValue == "number") {
    console.log('it is a number')
    //won't log 
}

// the 'never' type 
function neverReturns(): never {
    throw new Error('an error')
}

// nullable types 
let canBeNull: number | null = 12
canBeNull = null;
let canAlsoBeNull; 
