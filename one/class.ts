class Person {
    // everything is public by default
    public name: string;
    // protected can be accessed from a class that inherets from this class
    protected age: number = 26;
    // private can only be accessed in this class
    private type: string;

    //below, the public key is making it so that it creates an attribut upon construction
    // it would be the equivilent of what's happening with name above

    constructor(name:string, public username: string){
        this.name = name
    }

    printAge() {
        console.log(this.age)
        this.setType('anything')
    }

    private setType(type: string){
        this.type = type
    }
}

const person = new Person("Eben", "ew");
console.log(person.username)


class Eben extends Person {
    constructor(username: string){
        super('Eben', username)
        this.age = 12;
    }
}
const eb = new Eben('eb')
console.log(eb)

// Getters & Setters
class Plant {
    private _species: string;

    get species() {
        return this._species
    }

    set species(value: string){
        value.length > 3 ? this._species= value : this._species = 'default'
    }
}

// static properties/methods

class Helpers {
    static PI: number = 3.14;
    static circ(diameter: number): number {
        return this.PI * diameter
    }
}

console.log(Helpers.PI);
console.log(Helpers.circ(20))


let plant = new Plant();
console.log(plant.species)
plant.species = "a"
console.log(plant.species)
plant.species = "apple";
console.log(plant.species)

// Abstract Classes 
// they need to inheret from them, they never are instantiated
abstract class Project {
    projectName: string;
    budget: number;

    // the following needs to be implemented in the child class with its own logic
    // it inherts 
    abstract changeName(name: string): void;

    // the following will be available completely in a child class
    calcBudget() {
        return this.budget * 2
    }
}

class ITProject extends Project {
    changeName(name: string):void {
        this.projectName = name
    }
}

const newProj = new ITProject();
newProj.changeName("new proj")
console.log(newProj)

// private constructors 
// this is done so that only one instance of this class can be created 
// and it can never be over wrtten 
// the only thing publicly available is the static method
// which also creates the instance

class OnlyOne {
    private static instance: OnlyOne;

    private constructor(public readonly name: string){}

    static getInstance(){
        if(!OnlyOne.instance){
            OnlyOne.instance = new OnlyOne('the only one');
        }
        return OnlyOne.instance
    }
}

// read only 
// public properties can be rewritten as well as reading it 
// the way to combat that is on line 107
// public readonly name: string

