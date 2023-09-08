// Exercise 1

// Original function:
function sayHello() {
    return "Hello, world!";
}

const result1 = sayHello();
console.log(result1);

// Refactored function:
const sayHelloArrow = () => "Hello, world!";

const result2 = sayHelloArrow();
console.log(result2);

// Exercise 2

// Original function:
function double(x) {
    return x * 2;
}

const multiplication1 = double(5);
console.log(multiplication1);

// Refactored function:

const doublearrow = (x) => x*2;

const multiplication2 = doublearrow(5);
console.log(multiplication2)

// Exercise 3

// Original function:

function add(x, y) {
    return x + y;
}

const add1 = add(3,2);
console.log(add1);

// Refactored function:
const addarrow = (x,y) => x+y;

const add2 = addarrow(3,2);
console.log(add2);

// Exercise 4

// Original function:

const person = {
    name: "Alice",
    sayHi: function() {
        return "Hi, " + this.name + "!";
    }
};

console.log(person.name);
console.log(person.sayHi());  

// Refactored function:

const personarrow = {
    name: "Alice",
//    sayHi: () => "Hi, " + this.name + "!" // Does not work since arrow functions do not have their own "this" binding
    sayHi: function() {
        return "Hi, " + this.name + "!";
}
}

console.log(personarrow.name);
console.log(personarrow.sayHi());

// Exercise 5

const numbers = [1, 2, 3, 4, 5];

// Original function:

const doubled = numbers.map(function(num) {
    return num * 2;
});

console.log(doubled);

// Refactored function:

const doubledarrow = numbers.map(num => num * 2);

console.log(doubledarrow);