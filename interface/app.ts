interface NamedPerson {
    firstName: string
    //adding a ? after the property means that it is optional
    age?: number;
    //below is a wildcard optional
    [propName: string]: any;
    greet(lastName:string): void;
}

function greet(person: NamedPerson) {
    console.log("hi" + person.firstName)
};

function changeName(person: NamedPerson){
    person.firstName = 'Anne'
}

const person = {
    firstName: 'Max',
    // the following throws an error
    // name: 'Max',
    age: 27,
    hobbies: ["cooking, sports"],
    greet(lastName: string) {
        console.log("my last name is " + lastName)
    }
}

greet(person);
changeName(person);
person.greet('Per')

class Person implements NamedPerson {

    constructor(public firstName: string){}

     greet(lastName: string): void {
         console.log("my last name is " + lastName)
     }
}

const myPerson = new Person("eben");
myPerson.firstName = 'eben'
myPerson.greet("wood")

// Funciton Types 

interface DoubleValueFunc {
    (number1: number, number2: number): number;
}


let myDoubleFunc: DoubleValueFunc;
myDoubleFunc = (number1: number, number2: number) => {
    return number1 * number2 
}


// Interface Inheretence 

interface AgedPerson extends NamedPerson {
     age: number;
}

const oldPerson: AgedPerson = {
    age: 99,
    firstName: 'Eben',
    greet(lastName: string){
        console.log("my last name is " + lastName)
    }
}

console.log(oldPerson)


// Interfaces don't get transpiled, JS doesn't have any infastructure for it. It's just for developement in TS