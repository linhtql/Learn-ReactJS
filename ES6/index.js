/*   Classes  */

// class is a type of function
class Car {
    constructor(name) {
        this.brand = name;
    }

    present() {
        return 'I have a ' + this.brand;
    }
}

// inheritance
class Model extends Car {
    constructor(name, mod) {
        super(name);
        this.model = mod;
    }

    show() {
        return this.present() + ', it is a ' + this.modode;
    }
}

const mycar = new Car("Ford");
const mycar1 = new Model("Ford", "Everest");

console.log(mycar.present());
console.log(mycar1.show());

/*  Arrow Functions */

// Before
hello = function () {
    return "Hello World!";
}

console.log(hello());

// With Arrow Function
hello = () => {
    return "Hello World!";
}

// Shorter 
hello = () => "Hello World!";

// With parameter
hello = (val) => "Hello " + val;

// Shorter
hello = val => "Hello " + val;


/*  Variables */

// var: if in strict mode: getn an error if variables were undefined
// outside of a function: global scope
// inside of a function:  function scope
// inside a block (loop,...): it still available outside of that block
// var has a function scope, not a block scope


// let: block scope

// const: block scope


/* Destructuring Arrays */ 
// extract only what is needed

// Before
const vehicles = ['mustang', 'f-150', 'expedition'];

// old way
const car = vehicles[0];
const truck = vehicles[1];
const suv = vehicles[2];

// With Destructuring: 
const [car1, truck1, suv1] = vehicles;

const [car2,, suv2] = vehicles;

function calculatte(a, b) {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;

    return [add, subtract, multiply, divide];
}

const [add, substract, multiply, divide] = calculatte(4, 7);
console.log(substract);

/* Spead Operator */
// quickly copy all or part of an existing array or object into another array or object

const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];

// The spread operator often used in combination with destructuring
const numbers = [1, 2, 3, 4, 5, 6];
const [one, two, ...rest] = numbers;

// Use the spread operator with objects too:
const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
}

const updateMyVehicle = {
    type: 'car',
    year: 2021,
    color: 'yellow'
}

const myUpdateVehicle = {...myVehicle, ...updateMyVehicle}


/* Modules */
// allow you to break up your code into separate file 

// Can export a function or variable

// There are two types of exports: Named and Default.

// Only have one default export in a file


// Import
// Named exports must be destructured using curly braces
import { name , age } from './person.js';

// Default exports do not
import message from './message.js'


/* Ternary Operator */
// condition ? <expression if true > : <expression if false>
