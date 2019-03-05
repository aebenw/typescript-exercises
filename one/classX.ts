// Exercise 1 - How was your TypeScript Class?
class Car {
    acceleration: number;

    constructor(public name: string){
        this.name = name;
    }

    honk(): void {
        console.log("Toooooooooot!");
    }

    accelerate(speed: number): number {
        return this.acceleration += speed;
    }
}

let car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

// Exercise 2 - Two objects, based on each other ...
class baseObject {
    constructor(public width: number, public length: number){
        this.width = width;
        this.length = length;
    }
}


class Rectangle extends baseObject {
    constructor(width: number, length: number){
        super(width, length)
        console.log(this.width)
    }

    calcSize(): number {
        return this.length * this.width;
    }
}

const rectangle = new Rectangle(5, 2);
console.log(rectangle.calcSize());

// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
class Personn {
    private _firstName: string;

    get firstName(): string {
        return this._firstName;
    }
    set firstName(value: string) {
        value.length > 3 ? this._firstName= value : this._firstName = '';
    }
}
const personn = new Personn()
console.log(personn.firstName);
personn.firstName = "Ma";
console.log(personn.firstName);
personn.firstName = "Maximilian";
console.log(personn.firstName);