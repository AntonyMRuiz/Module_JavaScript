/**
 * 1. Objetos
 * 2. Prototipos
 * 3. Clases
 * 
 * 
 * 4. Modularidad (Conceptual)
 */

let user = {
    name : "Antony",
    "age" : 26,
    greet : function () {
        console.log("Hola",this.name);
    }
}


function User (name, age) {
    this.name = name;
    this.age = age;
    this.greet = function () {
        console.log("Hola",this.name);
    }
}

let p1 = new User("Antony", 26);

User.prototype.bye = function () {
    console.log(`Adios ${this.name}`);
}

let p2 = new User("Vanesa", 19);



class Users {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }

    // greet = function () {
    //     console.log("Hola",this.name);
    // }

    greet() {
        console.log(`Hola ${this.name}`);
    }
}


let p3 = new Users("Pepe",10);

console.log(p3.name);

p3.greet();
