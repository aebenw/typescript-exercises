// decorators are just functions that get tacked on to classes 
// they take one argument, which is the constructor function
function dec(constructorFn: Function){
    console.log(constructorFn)
}

//it gets tacked on like so:
@dec
class Person {
    constructor(){
        console.log("he;;;;;ooo")
    }
}


// Factory 

function logging(value: boolean){
    return  dec 
}

@logging(true)
class Car {
    constructor() {
        console.log("goodbye")
    }
}